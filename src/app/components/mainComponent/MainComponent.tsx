import React, { Component } from 'react';
import styles from './mainComponent.module.css';
import MessageBlock from '../messageBlock/MessageBlock';

type MainComponentProps = {
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

class MainComponent extends Component<MainComponentProps,{}> {
  render() {
    return (
      <div className={styles.main}>
        <div className={styles.main__left_column}>
          <form>
            <button className={styles.left_column__btn_write}>Написать</button>
          </form>
          <div className={styles.left_column__btn_group}>
            <button className={styles.btn_group__control_button}>Входящие</button>
            <button className={styles.btn_group__control_button}>Отправленные</button>
            <button className={styles.btn_group__control_button}>Удалённые</button>
            <button className={styles.btn_group__control_button}>Спам</button>
            <button className={styles.btn_group__control_button}>Черновики</button>
            <button className={styles.btn_group__control_button}>Создать папку</button>
          </div>
        </div>
        <MessageBlock
          messages={this.props.messages}
          text={this.props.text}
          textClass={this.props.textClass}
          messageListClass={this.props.messageListClass}
          changeSelected={this.props.changeSelected}
          hideMessage={this.props.hideMessage}
          showMessage={this.props.showMessage}
          deleteMessages={this.props.deleteMessages}
          setCheckBoxes={this.props.setCheckBoxes}
          mainChecked={this.props.mainChecked}
          messageOrText={this.props.messageOrText}
          triggerToChange={this.props.triggerToChange}
        />
      </div>
    );
  }
}

export default MainComponent;
