import * as React from 'react';
import styles from './header.module.css';
import yandexLogo from '../yandex_mail.png';

type HeaderProps = {
  filterMessages: (req:any) => void,
  deleteFilter: () => void,
  setFilterByDate:  (s:any, f:any) => void,
  unsetFilterByDate: () => void,
  filtered: boolean,
  lettersCount: number,
  changeTheme: () => void
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
      <div className={styles.header}>
           <div className={styles.header__three_dashes}>
          <div className={[styles.dash, styles.dash__first].join(' ')}></div>
          <div className={[styles.dash, styles.dash__second].join(' ')}></div>
          <div className={[styles.dash, styles.dash__third].join(' ')}></div>
        </div>
        <img src={yandexLogo} className={styles.header__logo}/>
        <label className={styles.header__search}>
          <input
            className={styles.search__input_text}
            type="text"
            value={this.state.value}
            onChange={this.handleChange}
            onKeyDown={this.handleKey}
          />
          <input className={styles.search__input_button} type="button"></input>
          <span className={styles.search__cross} onClick={this.localDeleteFilter.bind(this)}> X </span>
        </label>
        {/*<div className="header__dates">
          <DateRangePicker onChange={this.onChange} value={this.state.dateRange}/>
        </div>*/}
        <div className={styles.header__letters_count}>{this.props.filtered ? 'Найдено писем: ' + this.props.lettersCount : ''}
        </div>
        <button onClick={this.props.changeTheme} className={styles.header__change_theme_btn}>Сменить тему</button>
      </div>
    );
    console.log(res);
    return res;
  }
}

export default Header;
