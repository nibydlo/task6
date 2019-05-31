import React, { Component } from 'react';
import './main.css'
import PropTypes from 'prop-types';
import MessageBlock from './MessageBlock';

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
      <div className={'main'}>
        <div className="main__left-column">
          <form>
            <button className="left-column__btn_write">Написать</button>
          </form>
          <div className="left-column__btn-group">
            <button className={'btn-group__control-button'}>Входящие</button>
            <button className={'btn-group__control-button'}>Отправленные</button>
            <button className={'btn-group__control-button'}>Удалённые</button>
            <button className={'btn-group__control-button'}>Спам</button>
            <button className={'btn-group__control-button'}>Черновики</button>
            <button className={'btn-group__control-button'}>Создать папку</button>
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
