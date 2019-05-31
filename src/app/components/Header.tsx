import * as React from 'react';
import './header.css';
import yandexLogo from './yandex_mail.png';
const DateRangePicker = require('@wojtekmaj/react-daterange-picker');

import PropTypes, { any } from 'prop-types';
import MainComponent from './MainComponent';

type HeaderProps = {
  filterMessages: (req:any) => void,
  deleteFilter: () => void,
  setFilterByDate:  (s:any, f:any) => void,
  unsetFilterByDate: () => void,
  filtered: boolean,
  lettersCount: number
}

type HeaderState = {
  lettersCount: number
  value: string,
  dateRange: any[]
}

class Header extends React.Component<HeaderProps, HeaderState> {

  state = {
    value: '',
    dateRange: [new Date(), new Date()],
    lettersCount: this.props.lettersCount
  };

  constructor(props:any) {
    super(props);

    this.handleChange = this.handleChange.bind(this);
    this.handleKey = this.handleKey.bind(this);
  }

  handleChange(event:any) {
    this.setState({ value: event.target.value });
  }

  handleKey(event:any) {
    if (event.key === 'Enter') {
      this.props.filterMessages(this.state.value.trim());
    }
  }

  localDeleteFilter() {
    this.setState({
      value: ''
    });
    this.props.deleteFilter();
  }

  onChange = (dateRange:any) => {
    this.setState({ dateRange }, function (this: Header) {
      if (this.state.dateRange == null) {
        this.props.unsetFilterByDate();
      } else {
        this.props.setFilterByDate(this.state.dateRange[0], this.state.dateRange[1]);
      }
    });
  };

  render() {

    const res = (
      <div className={'header'}>
     /*   <div className={'header__three_dashes'}>
          <div className={'dash dash__first-dash'}></div>
          <div className={'dash dash__second-dash'}></div>
          <div className={'dash dash__third-dash'}></div>
        </div>
        <img src={yandexLogo} className={'header__logo'}/>
        <label className="header__search">
          <input
            className="search__input-text"
            type="text"
            value={this.state.value}
            onChange={this.handleChange}
            onKeyDown={this.handleKey}
          />
          <input className="search__input-button" type="button"></input>
          <span className="search__cross" onClick={this.localDeleteFilter.bind(this)}> X </span>
        </label>
        <div className="header__dates">
          <DateRangePicker onChange={this.onChange} value={this.state.dateRange}/>
        </div>
        <div className="header__letters-count">{this.props.filtered ? 'Найдено писем: ' + this.props.lettersCount : ''}
        </div>
*/
      </div>
    );
    console.log(res);
    return res;
  }
}

export default Header;
