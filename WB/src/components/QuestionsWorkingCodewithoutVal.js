import React, { Component } from 'react';
import { Button, FormGroup, FormControl, ControlLabel } from 'react-bootstrap';
import ReactDOM from "react-dom";
import { Field, reduxForm } from 'redux-form';
import { connect } from 'react-redux'
import BarChart from 'react-bar-chart';

class Questions extends Component {
    constructor(props) {
    super(props);
     this.onReset = this.onReset.bind(this);
    }

onReset(){
const ResetChart=[{text:"Correct",value:0},
   {text:"InCorrect",value:0}]

this.props.reset();
this.props.actions.setGraph(ResetChart);
}


    render() {
        console.log("FORM PROPS",this.props);
        const {questions,actions} = this.props;
        const { handleSubmit, load, pristine, reset, submitting,correctAns } = this.props;
        const margin = {top: 20, right: 20, bottom: 30, left: 40};
        console.log("result",this.props.result);
        const answers=[]; 

        console.log("correct answers",answers);
        const data=this.props.result;
 
        console.log("render",this.props);
        return (
            <div className="Container">
            <form  className="form-group" onSubmit={handleSubmit}>
                {questions.map(question=>
                <div className="form-control">
               {answers.push(question.answer)}
                     
                        <label htmlFor="text">{question.question}</label> 
                        <Field name={question.qId-1} type="text" component="select"   {...touched} {...error }  style={{width: 30 + '%'}} >    
                        <option >SELECT</option>
                         {question.options.map(option=>
                        <option>{option}
                            {touched && error && <span>{error}</span>}
                        </option>
                        
                       
                         
                         )}
                       
                    </Field>    
                </div>
                )}
                
                <button className="btn btn-default" type="submit" onClick={()=>correctAns({answers})} disabled={submitting} block>Submit</button>
                <button className="btn btn-default" type="submit" onClick={this.onReset}>Clear </button>
            </form>
                        <div className="barChart" style={{width: '50%'}}> 
                            <BarChart ylabel='Quantity'
                            width="300"
                            height="300"
                            margin={margin}
                            data={data}/>
                        </div>
            </div>
        )
    }


}


const renderField = ({questions, input, label, type, meta: { touched, error } }) =>
    (
        <div>
            {questions.map((question, index) =>
                <div>
                    <label>{question.question}</label>
                    <select>
                        <option value="">Select option</option>
                        {question.options.map(option =>
                            <option value={option}>{option}</option>
                        )}
                    </select>
                </div>
            )}

        </div>
    )


const validate = values => {
    
    console.log("values from the validate function", values); 
}

export default reduxForm({
    form: "questions",
    validate
})(Questions)














