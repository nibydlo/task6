import React, { Component } from 'react';
import '../main.css';
import styles from './messageText.module.css';

type MessageTextProps = {
  text: string,
  textClass: string,
  hideMessage: () => void,
}

class MessageText extends Component<MessageTextProps> {
  render() {
    return (
      <div className={styles.message_block__message_text_visible}>
        <button className="message-text__hide_button" onClick={this.props.hideMessage}>
          Hide
        </button>
        <div>{this.props.text}</div>
      </div>
    );
  }
}

export default MessageText;
