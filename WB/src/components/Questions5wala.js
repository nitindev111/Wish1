






/*import React, { Component } from 'react';
import { Button, FormGroup, FormControl, ControlLabel } from 'react-bootstrap';
import ReactDOM from "react-dom";
import { Field, reduxForm } from 'redux-form';
import { connect } from 'react-redux'

class Questions extends Component {
    constructor(props) {
        super(props);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(values) {
        console.log("handle submit", values);
    }

    render() {
        const {questions} = this.props;
         const { handleSubmit, load, pristine, reset, submitting } = this.props
        console.log(questions);
        return (
            <form onSubmit={handleSubmit}>
                {questions.map((question, index) =>
                    <div>
                    <label htmlFor="question">{question.question}</label>
                        <Field name="Questions" component="select">
                            <option>select answer</option>
                            {question.options.map((option, index) =>
                                <option key={index} value={option}>{option}</option>
                            )};
                        </Field>
                    </div>
                )}
               <button type="submit">Submit</button>
         </form>


        )
    }


}

const renderField = ({ input, label, type, meta: { touched, error } }) => (
  <div>
    <label>{label}</label>
    <div>
      <input {...input} type={type} placeholder={label}/>
    </div>
  </div>
)

const validate=values=>{
    const errors={};
    if(!values.Questions){
        errors.Questions = 'Required'
    }
    return errors
}

export default reduxForm({
    form: "questions",
    validate
})(Questions)*/

































import React, { Component } from 'react';
import { Button, FormGroup, FormControl, ControlLabel } from 'react-bootstrap';
import ReactDOM from "react-dom";
import { Field, reduxForm } from 'redux-form';
import{connect} from 'react-redux'

 export default class Questions extends Component {
    constructor(props) {
        super(props);
        this.handleSubmit =this.handleSubmit.bind(this);
    }

    handleSubmit(values){
        console.log("handle submit",values);
    }

    render() {
        const {questions, handleSubmit, pristine, reset, submitting } = this.props;
        console.log("Questions passed through props",this.props.questions);
        return (
      <form onSubmit={handleSubmit}>
       <div>

           <label></label>
          <Field name="favoriteColor" component="select">
            <option value="">Select a color...</option>
            {colors.map(colorOption =>
              <option value={colorOption} key={colorOption}>{colorOption}</option>)}
          </Field>
        </div>
    </form>
        );
    }
}

const validate=values=>{
    const errors={};
    if(!values.username){
        errors.username = 'Required'
    }
    return errors
}

const renderField = ({ input, label, type,meta: { touched, error, warning } }) => (
  <div>
      {value.map(question,index=>
      <div>
      <label>{question.question}</label>
      <input {...input} type={type}/>
      {touched && ((error && <span>{error}</span>))}
      <option value="">Select a color...</option>
      {question.map((option,index) =>
      <option value={option} key={index}>{option}</option>)}
      </div>
    )}
  </div>
)



// Decorate the form component
 reduxForm({
  form: 'questions',
  validate // a unique name for this form
})(Questions);



 Questions = connect(
    state => ({
    questions: state.questions // pull initial values from account reducer
  }) // bind account loading action creator
)(Questions)






