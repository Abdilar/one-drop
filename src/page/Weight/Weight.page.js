import React from 'react';
import {Header, WeightTheme} from "../../components";
import {errorToast, isEmpty} from "../../helper/functions";
import {PAGE} from "../../config/variables";

import "./Weight.style.scss";

class Weight extends React.Component {
  state = {
    weightValue: ""
  };

  handleChange = (value) => {
    this.setState({weightValue: value})
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
        <Header onAccept={() => this.handleAccept()} title="افزودن وزن" />
        <WeightTheme firstDescription="Ib" onChangeFirst={this.handleChange} />
      </section>
    );
  }
}

export default Weight;
