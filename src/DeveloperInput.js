import React from 'react';
import FormPopUp from './FormPopUp';
import Popup from 'reactjs-popup';
import './DeveloperInput.css';


function FormPopUpCheck(props){
    const isClicked = props.isClicked;
    if(isClicked){
        return(
        <div>

            <FormPopUp/>
        </div>
        );

    }
    else{
        return(
        <div>
            
        </div>
        );
    }
}

class DeveloperInput extends React.Component{
    constructor(props){
        super(props);
            this.state = { isClicked:false };
            }

    handleClick = () => {
        this.setState({isClicked : true })
    }
    render() {
        const isClicked = this.state.isClicked;
        let button;
        if(isClicked === false){
            button = (
                <div class = "devInfoInputContainer">
                <Popup className = "aaa"
                trigger={<button className = "devInfoInputBtn" onClick = {this.handleClick}> Add Developer Profile
            </button>}
                position="top center"
                modal
                nested
>

                {close => (
                  <div className="modal" >
                    <button className="close" onClick={close}>
                      &times;
                    </button>
                    <div className="header"> Developer Profile </div>
                    <div className="content">
                     <FormPopUp/>
                    </div>
                    <div className="actions">
                      <button
                        className="button"
                        onClick={() => {
                          console.log('modal closed ');
                          close();
                        }}
                      >
                        close modal
                      </button>
                    </div>
                  </div>
                )}

              </Popup>
                </div>
            )
        }
        return(
            <div>
                <FormPopUpCheck isClicked = {isClicked}/>
                {button}
            </div>
        )
}
}
export default DeveloperInput;