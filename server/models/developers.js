const mongoose = require("mongoose");
const { Schema } = mongoose;
const developerSchema = new Schema({
   devs: [
       {
    id: {
        type: String,
    },
    avatar_url: {
        type: String,
    },
    myName: {
        type: String
    },
    company: {
        type: String
    },
    blog: {
        type: String
    },
    location: {
        type: String
    },
    email: {
        type: String
    },
    bio: {
        type: String
    },
    gihub_id:{
        type: String
    },
    linkedin_id: {
        type: String
    },
    codechef_id: {
        type: String
    },
    hackerrank_id: {
        type: String
    },
    twitter_id:{
        type: String
    },
    medium_id: {
        type: String
    },
    repos: [{
        repoName: {
            type: String
        },
        html_url:{
            type:String
        },
        description: {
            type:String
        },
        updated_at: {
            type :Date
        }
    }]
}]});

module.exports = mongoose.model('developers', developerSchema);
