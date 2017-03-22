import React, { Component } from 'react';
import { Form,Button, FormGroup, FormControl, ControlLabel, HelpBlock} from 'react-bootstrap';
import ReactDOM from "react-dom"
export default class Questions extends Component {
    constructor(props) {
        super(props);
        this.getSelectedValues= this.getSelectedValues.bind(this);
        this.handleSubmit=this.handleSubmit.bind(this);
    }

getSelectedValues(value){
  //var myInputValue = document.getElementById("myInputID").value;
  console.log("get selected function",value)
  
  
 //  console.log(ReactDOM.findDOMNode(this.ref))
}
handleSubmit(event){
    event.preventDefault();
   console.log(ReactDOM.findDOMNode(this.refs.answer));

}

getValidationState(){
    console.log("sdfdsf")
}
    render() {
        console.log(this.props);
        var questions = this.props.questions;
         
        return (
        <Form horizontal>

        <FormGroup controlId="formBasicText" validationState={this.getValidationState()}>

          <FormControl.Static></FormControl.Static>
         <ControlLabel>Select</ControlLabel>
        <FormControl componentClass="select" placeholder="select">
                    <option value="select">select</option>
                    <option value="other">...</option>
        </FormControl>
         
        </FormGroup>
      </form>


        );
    }
}



