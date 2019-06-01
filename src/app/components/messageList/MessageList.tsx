import React, { Component } from 'react';
import PropTypes from 'prop-types';
import MessageItem from '../messageItem/MessageItem';
//import { AutoSizer, List} from 'react-virtualized';
import styles from './messageList.module.css';



type MessageListProps = {
  messageListClass: string,
  messages: any[],
  changeSelected: (id: any) => void,
  showMessage: (id: any) => void,
  triggerToChange: any
}

class MessageList extends React.Component<MessageListProps> {
  state = {
    messageList: this.props.messages,
    triggerToChange: this.props.triggerToChange
  };


  constructor(props:any) {
    super(props);

    this.state = {
      messageList: this.props.messages,
      triggerToChange: this.props.triggerToChange
    };
  }

  renderRow = (index:any, key:any) => {
    const message = this.state.messageList[index];
    console.log(this.state.messageList.length);
    return (
      <MessageItem
        id={message.id}
        key={key}
        author={message.author}
        theme={message.theme}
        text={message.text}
        date={message.date}
        selected={message.checked}
        changeSelected={this.props.changeSelected}
        showMessage={this.props.showMessage}
        deleted={message.deleted}
        animBefore={message.animBefore}
        read={message.read}
      />
    );
  };

  render() {

    //console.log("render message-list");

    return (
      <div className={styles.message_block__message_list}>
        {this.props.messages.map(message => {
          return (
            <MessageItem
              id={message.id}
              key={message.id}
              author={message.author}
              theme={message.theme}
              text={message.text}
              date={message.date}
              selected={message.checked}
              changeSelected={this.props.changeSelected}
              showMessage={this.props.showMessage}
              deleted={message.deleted}
              animBefore={message.animBefore}
              read={message.read}
            />
          );
        })}
      </div>
    );
/*
    this.state.messageList = this.props.messages.slice(0).reverse();
    const rowCount = Math.min(30, this.props.messages.length);
    return (
      //<div className="message-block__message-list-container">
        //<AutoSizer className="qwed">
          //{({ height, width }) => (
            <List
              renderProps={{messages:this.props.messages}}
              height={500}
              width={900}
              rowCount={rowCount}
              rowHeight={41}
              className="styles.virtualizedListhghg"
              rowRenderer={this.renderRow}
            />
          //)}
        //</AutoSizer>
      //</div>
    );*/
  }
}


export default MessageList;
