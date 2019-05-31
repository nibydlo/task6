import React, { Component } from 'react';
import PropTypes from 'prop-types';

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
        'message-block__deleted message-block__row message-block__central-row message-block_central-row-unread'
        : (this.props.animBefore ?
          (this.props.read ?
            'message-block__central-row_read message-block__row message-block__central-row' :
            'message-block__central-row_unread message-block__row message-block__central-row') :
          'new-message__appear message-block__new-message message-block__central-row_unread message-block__row message-block__central-row'
        );

    return (
      <div id={this.props.id}
           className={messageClassName}>
        <div className="central-row__open-message_button" id="1"
             onClick={this.props.showMessage.bind(this, this.props.id)}/>
        <label className="check">
          <input
            className="check__input check__regular"
            type="checkbox"
            onChange={this.props.changeSelected.bind(this, this.props.id)}
            checked={this.props.selected}
          />
        </label>
        <div className="central-row__avatar-frame">
          <div className="central-row__ya-circle"><a className="ya-circle__ya-letter">Я</a></div>
        </div>
        <div className="central-row__msg-sender">Яндекс Паспорт</div>
        <div className="central-row__point"/>
        <div className="central-row__msg-theme">{this.props.theme}</div>
        <div className="central-row__date">{this.props.date.getDate() + '.' + (this.props.date.getMonth() + 1)}</div>
      </div>
    );
  }
}

export default MessageItem;
