import React from 'react';
import {withRouter} from "react-router-dom";
import {ActivityTheme, Header} from "../../components";
import {errorToast, isEmpty} from "../../helper/functions";
import {PAGE} from "../../config/variables";

import "./Activity.style.scss";

class Activity extends React.Component {
  state = {
    inputValue: "",
    activeButton: ""
  };

  handleClick = (type) => {
    this.setState({activeButton: type})
  };
  handleChange = (value) => {
    this.setState({inputValue: value})
  };

  handleAccept = () => {
    const isValid = Object.keys(this.state).every(state => !isEmpty(this.state[state]));
    !isValid && errorToast('اطلاعات را کامل وارد کنید.');
    isValid && this.props.history.push(PAGE.HOME.VALUE);
    console.log('Is valid: ', isValid)
  };

  render() {
    return (
      <section className="flex__column height__expand">
        <Header onAccept={() => this.handleAccept()} title="افزودن فعالیت"/>
        <ActivityTheme description="دقیقه" onChange={this.handleChange} color="orange">
          <div className="padding__horizontal__20 padding__vertical__20">
            <button className={`activity-button ${this.state.activeButton === 'low' ? 'activity-button--active' : ''}`} onClick={() => this.handleClick('low')}>کم</button>
            <button className={`activity-button ${this.state.activeButton === 'med' ? 'activity-button--active' : ''}`} onClick={() => this.handleClick('med')}>نرمال</button>
            <button className={`activity-button ${this.state.activeButton === 'hrd' ? 'activity-button--active' : ''}`} onClick={() => this.handleClick('hrd')}>زیاد</button>
          </div>
        </ActivityTheme>
      </section>
    );
  }
}

export default withRouter(Activity);
