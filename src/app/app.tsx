import React, { Component } from 'react';
import Header from './components/header/Header';
import styles from './app.module.css';
import MainComponent from './components/mainComponent/MainComponent';
import json from '../letter.json';
import { isNull } from 'util';
import './components/main.css';



type MyState = {
  k: number,
  letterMap: object,
  lettersGlobal: any,
  messages: object[],
  textM: string,
  textClass: string,
  messageListClass: string,
  mainChecked: boolean,
  smthToChange: boolean,
  messageOrText: boolean,
  filter: string,
  filterByDateActive: boolean,
  dateStart: Date,
  dateFinish: Date,
  dark: boolean
}

function isDefined<T>(a: T | null | undefined): a is T {
  return a !== null && a !== undefined;
}

export class App extends Component<{}, MyState> {
  state = {
    k: 0,
    letterMap: new Map(),
    lettersGlobal: [],
    messages: [],
    textM: '',
    textClass: 'message-block__message-text_visible',
    messageListClass: 'message-block__message-list',
    mainChecked: false,
    smthToChange: false,
    messageOrText: true,
    filter: '',
    filterByDateActive: false,
    dateStart: new Date(),
    dateFinish: new Date(),
    dark: true
  };



  componentDidMount() {
    this.setState({
      lettersGlobal: json
    });
    setTimeout(this.sender.bind(this), 1000);
  }

  addMessage = () => {
    const letterNum = Math.floor(Math.random() * 29);
    const year = '2019';
    const month = Math.floor(Math.random() * 11) + 1;
    const day = Math.floor(Math.random() * 27) + 1;
    const date = new Date(year + '-' + month + '-' + day);
    this.addMessageToState(
      this.state.k - 1,
      'Фридрих Ницше',
      `Глава ${letterNum + 1}`,
      json[letterNum],
      date
    );
    this.state.letterMap.set(this.state.k - 1, letterNum);
    this.setState(prevState => {return {k: prevState.k + 1 }});
    const oldSmthToChange = this.state.smthToChange;
    this.setState({
      smthToChange: !oldSmthToChange
    });
    setTimeout(this.markAsAnimated, 500);
  };

  addMessageToState = (id1: any, author1: any, theme1:any, text1:any, date1:any) => {

    this.setState(prevState => {
      const newMessages = prevState.messages;
      newMessages.unshift({
        id: id1,
        author: author1,
        theme: theme1,
        text: text1,
        date: date1,
        checked: false,
        deleted: false,
        animBefore: false,
        read: false
      });
      return {
        messages: newMessages
      };
    });
  };

  sender = () => {
    this.addMessage();

    setTimeout(this.sender.bind(this), 15000);
  };

  markAsAnimated = () => {
    this.state.messages.forEach((mes:any) => {
      // change "-2" to "-1" for work without list
      if (mes.id === (this.state.k - 2)) {
        mes.animBefore = true;
      }
    });
  };

  showMessage = (id:any) => {

    const newText = this.state.lettersGlobal[this.state.letterMap.get(id)];
    this.state.messages.forEach((mes:any) => {
      if (mes.id === id) {
        mes.read = true;
      }
    });
    this.setState({
      messageOrText: false,
      textM: newText
    });
  };

  hideMessage = () => {
    this.setState({
      messageOrText: true
    });
  };

  deleteMessages = () => {
    const oldMessages = this.state.messages;
    this.state.messages.forEach(function(mes:any) {
      if (mes.checked) {
        mes.deleted = true;
      }
    });
    const oldSmthToChange = this.state.smthToChange;
    this.setState({
      smthToChange: !oldSmthToChange
    });
    if (this.state.mainChecked) this.setMainChecked();
    setTimeout(this.deleteMessagesFromState, 1000)
  };

  deleteMessagesFromState = () => {
    const oldMessages = this.state.messages;
    this.setState({
      messages: oldMessages.filter((message:any) => !message.checked)
    });
  };

  changeSelected = (id:any) => {
    this.state.messages.forEach((mes: any) => {
      if (mes.id === id) {
        mes.checked = !mes.checked;
      }
    });
    const oldSmthToChange = this.state.smthToChange;
    this.setState({
      smthToChange: !oldSmthToChange
    });

  };

  setMainChecked = () => {
    this.setState(prevState => {return {
      mainChecked: !prevState.mainChecked
    }});
  };

  setCheckBoxes = () => {
    let i = 0;
    this.setMainChecked();
    const l = this.state.messages.filter((mes:any) => mes.text.includes(this.state.filter)).filter(this.filterByDate).length;
    for (
      i = l - 1;
      i >= Math.max(0, l - 30 - 1);
      i--) {
        let filtered:any  = this.state.messages.filter((mes:any) => mes.text.includes(this.state.filter)).filter(this.filterByDate)[i];
        if (filtered !== null) {
          filtered.checked = !this.state.mainChecked;
        }
    }
  };

  filterMessages = (req:any) => {
    this.setState({
      filter: req
    });
  };

  deleteFilter = () => {
    this.setState({
      filter: ''
    });
  };

  setFilterByDate = (s:any, f:any) => {
    this.setState({
      filterByDateActive: true,
      dateStart: s,
      dateFinish: f
    });
  };

  unsetFilterByDate = () => {
    this.setState({
      filterByDateActive: false
    });
  };

  filterByDate = (mes: any) => {
    return (!this.state.filterByDateActive) || mes.date.getTime() >= this.state.dateStart && mes.date.getTime() <= this.state.dateFinish;
  };

  changeTheme = () => {
    this.setState(prevState => {return {dark : !prevState.dark}})
  };

  render() {

    let passedMessages:any[] = this.state.messages.filter((mes:any) => mes.text.includes(this.state.filter)).filter(this.filterByDate);
    return (
      <body className={this.state.dark ? styles.mail_body_dark : styles.mail_body}>
      <Header
        filterMessages = {this.filterMessages}
        deleteFilter={this.deleteFilter}
        setFilterByDate={this.setFilterByDate}
        unsetFilterByDate={this.unsetFilterByDate}
        filtered={this.state.filter != "" || this.state.filterByDateActive}
        lettersCount={this.state.messages.filter((mes:any) => mes.text.includes(this.state.filter)).filter(this.filterByDate).length}
        changeTheme={this.changeTheme}
      />
      <MainComponent
        messages={passedMessages}
        changeSelected={this.changeSelected}
        hideMessage={this.hideMessage}
        text={this.state.textM}
        textClass={this.state.textClass}
        messageListClass={this.state.messageListClass}
        showMessage={this.showMessage}
        deleteMessages={this.deleteMessages}
        setCheckBoxes={this.setCheckBoxes}
        mainChecked={this.state.mainChecked}
        messageOrText={this.state.messageOrText}
        triggerToChange={this.state.smthToChange}
        dark={this.state.dark}
      />
      </body>
    );
  }
}
