import React, { Component } from 'react'

export default class Messages extends Component {
    submitForm(e){
        e.preventDefault();
        console.log(this.input.value);
        this.props.newMessage('@charlie_frye', this.input.value, Date.now());
        this.input.value = '';
    }
    render() {
        console.log(this.props);
        return (
            <div className="chat">
                <form onSubmit={this.submitForm.bind(this)} action="#">
                    {this.props.messages.map(message => {
                        const d = new Date(message.datetime);
                        return (
                            <p key={message.datetime} className="message">
                                <span className="message__date">{`${d.getDate()}.${d.getMonth()+1} ${d.getHours()}:${d.getMinutes()}`}</span>
                                <span className="message__author">{message.author}: </span>
                                <span>{message.text}</span>
                            </p>
                        )
                    })}
                    <input ref={(input) => this.input = input} type="text" className="chat__input" />
                </form>
            </div>
        )
    }
}