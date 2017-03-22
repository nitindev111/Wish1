import React, { Component } from 'react';
import { Button, FormGroup, FormControl, ControlLabel } from 'react-bootstrap';
import ReactDOM from "react-dom"
export default class Questions extends Component {
    constructor(props) {
        super(props);
        this.getSelectedValues = this.getSelectedValues.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    getSelectedValues(value) {
        console.log("get selected function", value);
    }
    handleSubmit(event) {
        event.preventDefault();
        console.log(ReactDOM.findDOMNode(this.refs.answer));
    }
    render() {
        console.log(this.props);
        var questions = this.props.questions;

        return (
         <form onSubmit={this.handleSubmit}>
                    {this.props.questions.map((question, index) => {
                        <div className="form-group">
                            <label htmlFor="questionTitle">{question.Title}</label>
                            <label htmlFor="sfsdf">sdfsdfsdfsd</label>
                            <select className="form-control">
                                <option key={index}>Select Answer</option>
                                {question.options.map((option, index) =>
                                    <option key={index} value={option}>{option}</option>
                                )};
                           </select>
                        </div>
                    })}
                </form>
        );
    }
}



 /*<div className="container-fluid">
                <form onSubmit={this.handleSubmit}>
                    {this.props.questions.map((question, index) => {
                        <div className="form-group">
                            <label htmlFor="questionTitle">{question.Title}</label>
                            <label htmlFor="sfsdf">sdfsdfsdfsd</label>
                            <select className="form-control">
                                <option key={index}>Select Answer</option>
                                {question.options.map((option, index) =>
                                    <option key={index} value={option}>{option}</option>
                                )};
                           </select>
                        </div>
                    })}
                </form>
            </div>*/
