import React, { Component } from 'react';
import styles from './messageItem.module.css';
import '../main.css';

type MessageItemProps = {
  id: any,
  author: any,
  theme: any,
  date: any,
  text: any,
  selected: any,
  changeSelected: (id: any) => void,
  showMessage: (id: any) => void,
  deleted: any,
  animBefore: any,
  read: any
}

class MessageItem extends Component<MessageItemProps> {
  render() {

    console.log("render message");

    const messageClassName =
      this.props.deleted
        ?
        [styles.message_block__deleted, styles.message_block__row, styles.message_block__central_row, styles.message_block_central_row_unread].join(' ')
        : (this.props.animBefore ?
          (this.props.read ?
            [styles.message_block__central_row_read, styles.message_block__row, styles.message_block__central_row].join(' ') :
            [styles.message_block__central_row_unread, styles.message_block__row, styles.message_block__central_row].join(' ')) :
          [styles.new_message__appear, styles.message_block__new_message, styles.message_block__central_row_unread, styles.message_block__row, styles.message_block__central_row].join(' ')
        );
/*
    const messageClassName =
      this.props.deleted
        ?
        'message-block__deleted message-block__row message-block__central-row message-block_central-row-unread'
        : (this.props.animBefore ?
          (this.props.read ?
            'message-block__central-row_read message-block__row message-block__central-row' :
            'message-block__central-row_unread message-block__row message-block__central-row') :
          'new-message__appear message-block__new-message message-block__central-row_unread message-block__row message-block__central-row'
        );
*/
    return (
      <div id={this.props.id}
           className={messageClassName}>
        <div className={styles.central_row__open_message_button} id="1"
             onClick={this.props.showMessage.bind(this, this.props.id)}/>
        <label className="check">
          <input
            className={styles.check__input}
            type="checkbox"
            onChange={this.props.changeSelected.bind(this, this.props.id)}
            checked={this.props.selected}
          />
        </label>
        <div className={styles.central_row__avatar_frame}>
          <div className={styles.central_row__ya_circle}><a className={styles.ya_circle__ya_letter}>Я</a></div>
        </div>
        <div className={this.props.read ? styles.central_row__msg_sender : styles.central_row__msg_sender_unread}>Яндекс Паспорт</div>
        <div className={this.props.read ? styles.central_row__point_read : styles.central_row__point_unread}/>
        <div className={this.props.read ? styles.central_row__msg_theme : styles.central_row__msg_theme_unread}>{this.props.theme}</div>
        <div className={styles.central_row__date}>{this.props.date.getDate() + '.' + (this.props.date.getMonth() + 1)}</div>
      </div>
    );
  }
}

export default MessageItem;
