import React, { Component } from 'react';
import '../main.css';

type MessageTextProps = {
  text: string,
  textClass: string,
  hideMessage: () => void,
}

class MessageText extends Component<MessageTextProps> {
  render() {
    return (
      <div className={this.props.textClass}>
        <button className="message-text__hide_button" onClick={this.props.hideMessage}>
          Hide
        </button>
        <div className="message-text__inner-text">{this.props.text}</div>
      </div>
    );
  }
}

export default MessageText;
