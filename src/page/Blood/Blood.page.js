import React from 'react';
import {Header, WeightTheme} from "../../components";
import {errorToast, isEmpty} from "../../helper/functions";
import {PAGE} from "../../config/variables";

import "./Blood.style.scss";

class Blood extends React.Component {
  state = {
    bloodValue: "",
    bloodValue2: "",
  };

  handleChange = (value) => {
    this.setState({bloodValue: value})
  };

  handleChangeSecond = (value) => {
    this.setState({bloodValue2: value})
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
        <Header onAccept={() => this.handleAccept()} title="افزودن فشار خون" />
        <WeightTheme firstDescription="سیستولیک" secondDescription="دیاستولیک" onChangeFirst={this.handleChange} onChangeSecond={this.handleChangeSecond} />
      </section>
    );
  }
}

export default Blood;
