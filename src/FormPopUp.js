// import React from 'react';
// import './FormPopUp.css'

// class FormPopUp extends React.Component {
//     constructor(props) {
//         super(props);
//         this.state = {
//         github: '',
//         medium: '',
//         linkedin: '',
//         codechef: '',
//         hackerrank: '',
//         twitter: '',
//         message: ''
//     }
// }

//    onInput = event => {
//         this.setState({ [event.target.name]: event.target.value });
//     }

//   cancelClick =(e) => {
//     e.preventDefault();
//     window.location='/'
//   }



//     submitClick = (e) => {
//         e.preventDefault();
//         const { github, medium, linkedin, codechef, hackerrank, twitter, message } = this.state;
//         alert(github)
//         fetch('/api/developers', {
//             method: 'POST',
//             body: JSON.stringify({ github_id:github, medium_id:medium, linkedin_id:linkedin, codechef_id:codechef, hackerrank_id:hackerrank, twitter_id:twitter, message}),
//             headers: {
//               'Content-type': 'application/json; charset=UTF-8'
//             }
//           }
//           ).then((response) => {
//             if (response.ok) {
//               window.location = '/'
//             }
//             return response.json().then((body) => {
//                 throw new Error(body.error)
//             })
//           })
//           .catch((error) => {
//             this.errorMessage = error.message
//             console.log(this.errorMessage);
//             this.setState({message: this.errorMessage});
//           });
//         }
    

//     render(){

//     return (
//         <div class="formContainer">
             
//             <form>
//                 <h2>Add developer profile</h2>
//                 <hr></hr>
//                 <div className="labelInput">
//                     <img className="companyIcon" src={'/images/iconfinder_github_317712.png'} alt="icon" height = "24px" width = "24px"/>
//                     <label>Github*</label>
//                 </div>
//                 <input
//                     className="labelInput"
//                     type="text"
//                     required="required"
//                     placeholder="abhikr"
//                     name="github"
//                     onInput={this.onInput} 
//                     value={this.state.github}
//                 />
//                 {this.state.message ? <h4 style={{ color: 'red', marginLeft: '80px', marginTop: '0'}}>Please enter valid Github Id</h4> : null}   
//                 <div className="labelInput">
//                     <img
//                         className="companyIcon"
//                         src={'/images/iconfinder_2018_social_media_popular_app_logo_linkedin_3225190.png'}
//                         alt="icon"
//                         height = "24px" width = "24px"
//                     />
//                     <label>LinkedIn</label>
//                 </div>
//                 <input
//                     className="labelInput"
//                     type="text"
//                     name="linkedin"
//                     placeholder="subham-mitra"
//                     onInput={this.onInput} 
//                     value={this.state.linkedin}
//                 />
//                 <div className="labelInput">
//                     <img className="companyIcon" src={'/images/codechef-1324440139527402917_32.png'} alt="icon" height = "24px" width = "24px" />
//                     <label>Codechef</label>
//                 </div>
//                 <input
//                     className="labelInput"
//                     name="codechef"
//                     placeholder="subham2107"
//                     onInput={this.onInput} 
//                     value={this.state.codechef}
//                     type="text"
//                 />
//                 <div className="labelInput">
//                     <img
//                         className="companyIcon"
//                         src={'/images/iconfinder_160_Hackerrank_logo_logos_4373234.png'}
//                         alt="icon"
//                         height = "24px" width = "24px"
//                     />
//                     <label>Hackerrank</label>
//                 </div>
//                 <input
//                     className="labelInput"
//                     name="hackerrank"
//                     placeholder="subham2107"
//                     onInput={this.onInput} 
//                     value={this.state.hackerrank}
//                     type="text"
//                 />
//                 <div className="labelInput">
//                     <img
//                         className="companyIcon"
//                         src={'/images/iconfinder_2018_social_media_popular_app_logo_twitter_3225183.png'}
//                         alt="icon"
//                         height = "24px" width = "24px"
//                     />
//                     <label>Twitter</label>
//                 </div>
//                 <input className="labelInput" name="twitter" onInput={this.onInput} value={this.state.twitter} placeholder="subham2107" type="text" />
//                 <div className="labelInput">
//                     <img className="companyIcon" src={'/images/iconfinder_Circled_Medium_svg5_5279113.png'} alt="icon" height = "24px" width = "24px"/>
//                     <label>Medium</label>
//                 </div>
//                 <input className="labelInput" name="medium" onInput={this.onInput} placeholder="subham.mitra21"
//                     value={this.state.medium} type="text" />
//                 <hr className="bottomLine"></hr>
//                 <div className="buttons">
//                     <button className="cancelBtn" onClick={this.cancelClick}>
//                         Cancel
//                     </button>
//                     <button className="submitBtn" onClick={this.submitClick}>
//                         Submit
//                     </button>
//                 </div>
//             </form>
//         </div>
//     );
// }
// }

// export default FormPopUp;