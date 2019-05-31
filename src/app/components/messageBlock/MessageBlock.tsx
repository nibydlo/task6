import React, { Component } from 'react';
import MessageList from '../messageList/MessageList';
import MessageText from '../messageText/MessageText';
import PropTypes from 'prop-types';
import styles from './messageBlock.module.css';

type MessageBlockProps = {
  text: string,
  textClass: string,
  messageListClass: string,
  messages: any[],
  changeSelected: (id: any) => void,
  hideMessage: () => void,
  showMessage: (id: any) => void,
  deleteMessages: () => void,
  setCheckBoxes: () => void,
  mainChecked: any,
  messageOrText: any,
  triggerToChange: any
}

class MessageBlock extends Component<MessageBlockProps> {
  render() {

    const pieceOfCode = this.props.messageOrText ?
      <MessageList
        messages={this.props.messages}
        changeSelected={this.props.changeSelected}
        messageListClass={this.props.messageListClass}
        showMessage={this.props.showMessage}
        triggerToChange={this.props.triggerToChange}
      />:
      <MessageText
        text={this.props.text}
        textClass={this.props.textClass}
        hideMessage={this.props.hideMessage}
      />;
    return (
      <div className={styles.main__message_block}>
        <div className={[styles.message_block__row, styles.message_block__upper_row].join(' ')}>
          <label className={styles.check}>
            <input
              className={styles.check__input}
              type="checkbox"
              onChange={this.props.setCheckBoxes.bind(this)}
              checked={this.props.mainChecked}
            />
          </label>
          <button className={[styles.upper_row__btn, styles.tooltip].join(' ')}>
            Переслать
            <span className={styles.tooltip_text}>Переслать</span>
          </button>
          <button className={[styles.upper_row__btn, styles.tooltip].join(' ')} onClick={this.props.deleteMessages.bind(this)}>Удалить
            <span className={styles.tooltip_text}>Удалить</span></button>
          <button className={[styles.upper_row__btn, styles.tooltip].join(' ')}>
            Это спам
            <span className={styles.tooltip_text}>Удалить</span></button>
          <button className={[styles.upper_row__btn, styles.tooltip].join(' ')}>Прочитано
            <span className={styles.tooltip_text}>Прочитано</span></button>
        </div>
        {pieceOfCode}
        <div className={styles.message_block__lower_row}>
          <div className={styles.lower_row__item}>Помощь и обратная связь</div>
          <div className={styles.lower_row__item}>Реклама</div>
          <div className={styles.lower_row__item}>copy2001-2018, Яндекс</div>
        </div>
      </div>
    );
  }
}

export default MessageBlock;
