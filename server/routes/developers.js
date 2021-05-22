const express = require('express');

const axios = require('axios');

const router = express.Router();
const Developers = require('../models/developers')
const mongoose = require('mongodb');
const developers = [];
router.get('/', (req, res) => {
    console.log("From Get");
    console.log(req.session.dev_id);
    const dev = [];
    Developers.findOne({_id: req.session.dev_id})
    .then(dev2 => {
   if(dev2){
    console.log(dev2);
    for (let i = 0; i < dev2.devs.length; i++) {
        const id = dev2.devs[i].id;
        const avatarUrl = dev2.devs[i].avatar_url;
        console.log(id);
        console.log(avatarUrl);
        const result = { id, avatar_url: avatarUrl };
        dev.push(result);
    }
}
else{

}
res.status(200).send(dev);
})
  //console.log(dev);
});

router.post('/', (req,res) => {
        const githubId = req.body.github_id;
        const linkedinId = req.body.linkedin_id;
        const codechefId = req.body.codechef_id;
        const hackerrankId = req.body.hackerrank_id;
        const twitterId = req.body.twitter_id;
        const mediumId = req.body.medium_id;
        let id;
        let avatarUrl;
        let myName;
        let repoName;
        let company;
        let blog;
        let location;
        let email;
        let bio;
        let html_url;
        let description;
        let updated_at;
        let repos = {};
        const reposList = [];
        console.log(`https://api.github.com/users/${githubId}`);
        const promiseUser = axios(`https://api.github.com/users/${githubId}`);
        const promiseRepos = axios(`https://api.github.com/users/${githubId}/repos`);
        Promise.all([promiseUser, promiseRepos])
            .then((responses) => {
                Object.keys(responses[0].data).forEach((key) => {
                    req.body[key] = responses[0].data[key];
                    id = req.body.login;
                    avatarUrl = req.body.avatar_url;
                    myName = req.body.name;
                    company = req.body.company;
                    blog = req.body.blog;
                    location = req.body.location;
                    email = req.body.email;
                    bio = req.body.bio;
                });
                Object.keys(responses[1].data).forEach((key) => {
                    repoName = responses[1].data[key].name;
                    html_url = responses[1].data[key].html_url;
                    description = responses[1].data[key].description;
                    updated_at = responses[1].data[key].updated_at;
                    repos = {
                        repoName,
                        html_url,
                        description,
                        updated_at,
                    };
                    reposList.push(repos);
                }
                )
                Developers.findOne({_id : req.session.dev_id}).then(dev => {
                    if(dev){
                        console.log("Mil gya");
                    let flag = 0;
                    for (let i in dev.devs){
                        if(dev.devs[i].id === id){
                            console.log("id bhi mil gya");
                            flag = 1;
                            break;
                        }
                    }
                    if(flag === 0){
                        console.log("Flag 0 ba")
                        dev.devs.push({
                            id,
                            avatar_url: avatarUrl,
                            myName,
                            company,
                            blog,
                            location,
                            email,
                            bio,
                            github_id: id,
                            linkedin_id: linkedinId,
                            codechef_id: codechefId,
                            hackerrank_id: hackerrankId,
                            twitter_id: twitterId,
                            medium_id: mediumId,
                            repos: reposList
                        })  
                        
                        dev.save()
                        .then(() => {
                            console.log("Save ho gail ba");
                            return res.status(201).send({message: `Success`});
                        })
                    }
                    else
                    return res.status(201).send({message:`Already present`});
                }
                else{
                    //const categorydb = new Cart({items : {title : prod.title, name : prod.name, productId :  req.params.productId, quantity : 1, productprice : prod.price.mrp} , totalprice:prod.price.mrp});

                //     categorydb.save().then((cart3) => {
                //         req.session.cartId =  cart3.id;
                //         console.log(req.session)
                //             res.status(201).send({message : 'Product Added in D/B'});
                // }, err => {
                //      console.log("in errorr") 
                //      console.log(err)
                // })
                    const develop = new Developers({

                        devs : {
                            id,
                            avatar_url: avatarUrl,
                            myName,
                            company,
                            blog,
                            location,
                            email,
                            bio,
                            github_id: id,
                            linkedin_id: linkedinId,
                            codechef_id: codechefId,
                            hackerrank_id: hackerrankId,
                            twitter_id: twitterId,
                            medium_id: mediumId,
                            repos: reposList

                    }});
                    develop.save().then(dev2 => {
                        console.log("important");
                        console.log(dev2)
                        req.session.dev_id = dev2._id;
                        return res.status(201).send({message: `Success`})
                    }, err => {
                        res.status(404).send({message : 'Not added'});
                        console.log("in errorr") 
                        console.log(err)
                   })
                }
            });

            

});
});

router.get('/:id', (req,res) => {
    Developers.findOne({_id: req.session.dev_id})
    .then(dev => {
   if(dev){
        //console.log(dev);
        for(let i = 0; i < dev.devs.length; i++){
            if(req.params.id === dev.devs[i].id){
                return res.status(200).send(dev.devs[i]);
            }
        }
        res.status(404).send({
            error: 'User does not exist',
        });
    }
});;
});
module.exports = router;
