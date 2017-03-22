import React, { Component, PropTypes } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as QuestionActions from '../actions/QuestionActions';

import Questions from '../components/Questions'
/**
 * It is common practice to have a 'Root' container/component require our main App (this one).
 * Again, this is because it serves to wrap the rest of our application with the Provider
 * component to make the Redux store available to the rest of the app.
 */
class App extends Component {
  constructor(props){
    super(props);
  this.getResult= this.getResult.bind(this);


  }

    handleSubmit(values){
           console.log(values);
    }

    getResult(answers){
      var correct = 0;
      var incorrect=0;
        console.log("correct answers recieved answer",answers.answers);
       console.log("form object",this.props.form.questions.values);
       var correctAnswers = answers.answers;
        var response= this.props.form.questions.values;
         for(var i=0;i<correctAnswers.length;i++){
           if(correctAnswers[i]===response[i]){
            correct++;
           }
           else
           incorrect++;
       }
    var result = [{text:"Correct",value:correct},
      {text:"InCorrect",value:incorrect}];
   
   console.log("sending result data",result);
    this.props.actions.setGraph(result);
     
    }

  render() {
    // we can use ES6's object destructuring to effectively 'unpack' our props
    const { counter, actions,form } = this.props; 
    console.log("app this props",this.props);
    console.log("action",actions);
    console.log("after set graph.....the state",this.props)
    //console.log("console for form in app.js",form);

    return (
        <Questions  actions={actions} questions={this.props.questions} correctAns={this.getResult} onSubmit={this.handleSubmit} result={this.props.result}/>
    );
  }
}

// App.propTypes = {
//   counter: PropTypes.number.isRequired,
//   actions: PropTypes.object.isRequired
// };

/**
 * Keep in mind that 'state' isn't the state of local object, but your single
 * state in this Redux application. 'counter' is a property within our store/state
 * object. By mapping it to props, we can pass it to the child component Counter.
 */
function mapStateToProps(state) {
  console.log("this is state",state);
  return {
    questions: state.questionReducer.questions,
    result:state.questionReducer.Result,
    form:state.form
  
  };
}

/**
 * Turns an object whose values are 'action creators' into an object with the same
 * keys but with every action creator wrapped into a 'dispatch' call that we can invoke
 * directly later on. Here we imported the actions specified in 'QuestionActions.js' and
 * used the bindActionCreators function Redux provides us.
 *
 * More info: http://redux.js.org/docs/api/bindActionCreators.html
 */
function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(QuestionActions, dispatch)
  };
}

/**
 * 'connect' is provided to us by the bindings offered by 'react-redux'. It simply
 * connects a React component to a Redux store. It never modifies the component class
 * that is passed into it, it actually returns a new connected componet class for use.
 *
 * More info: https://github.com/rackt/react-redux
 */

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
