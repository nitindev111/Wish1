






import React, { Component } from 'react';
import { Button, FormGroup, FormControl, ControlLabel } from 'react-bootstrap';
import ReactDOM from "react-dom";
import { Field, reduxForm } from 'redux-form';
import { connect } from 'react-redux'

class Questions extends Component {
    constructor(props) {
        super(props);
        //  this.handleSubmit = this.handleSubmit.bind(this);
    }

    render() {
        const {questions} = this.props;
        const { handleSubmit, load, pristine, reset, submitting } = this.props
        console.log("render", this.props);
        return (
            <form onSubmit={handleSubmit}>
               {questions.map(question=>
               <div>
                <label htmlFor={question.id}>{question.question}</label>
                <Field name={question.qId} type="text" component={renderField} question={question}/>
               </div>
               )} 

                <button type="submit">Submit</button>
            </form>


        )
    }


}

const renderField = ({question, input, label, type, meta: { touched, error } }) =>
    

           
                     <select>
                        <option value="">Select option</option>
                        {question.options.map((option,index) =>
                         <option key={index} value={option}>{option}</option>
                         )}
                    </select>
           


const validate = values => {
    console.log("values", values);
    const errors = {};
    if (!values.Questions) {
        errors.Questions = 'Required'
    }
    return errors


}

export default reduxForm({
    form: "questions",
    validate
})(Questions)

