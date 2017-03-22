import React, { Component } from 'react';
import { Button, FormGroup, FormControl, ControlLabel } from 'react-bootstrap';
import ReactDOM from "react-dom"
export default class Questions extends Component {
    constructor(props) {
        super(props);
       
        this.handleSubmit=this.handleSubmit.bind(this);
        this.handleAnswerOptions=this.handleAnswerOptions.bind(this);
    }
handleAnswerOptions(e){
console.log(e.target.value);
}

handleSubmitValidations(value){
  //var myInputValue = document.getElementById("myInputID").value;
  console.log("get selected function",value)
  
  
 //  console.log(ReactDOM.findDOMNode(this.ref))
}
handleSubmit(event){
    event.preventDefault();
  

}
    render() {
        console.log(this.props);
        var questions = this.props.questions;
         
        return (

            <div>
                <form action="" onSubmit={this.handleSubmit}>
                
                 {this.props.questions.map((question,index) =>
                <FormGroup key={index} validationState={this.props.validationState} controlId="options">
                     <ControlLabel key={index}>{question.question}</ControlLabel>
                    
                        <FormControl style={{width: 30 + '%'}} componentClass="select" placeholder="select" onChange={(e)=>this.handleAnswerOptions(e)}>
                            <option  key={index}>Select Answer</option>
                            {question.options.map((option,index)=> 
                            <option key={index} value={option}>{option}</option>
                        )};
                        </FormControl>
                  </FormGroup>  
                    )}
               
                        <Button type="submit" bsStyle="success" bsSize="large">Submit</Button>

                 </form>
            </div>



        );
    }
}



