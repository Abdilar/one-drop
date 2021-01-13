import React from 'react';
import {ActivityTheme, Header} from "../../components";
import {errorToast, isEmpty} from "../../helper/functions";
import {PAGE} from "../../config/variables";

import "./Glucose.style.scss";

class Glucose extends React.Component {
  state = {
    inputValue: ""
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
        <Header onAccept={() => this.handleAccept()}/>
        <ActivityTheme description="mg/dL" onChange={this.handleChange} color="red" />
      </section>
    );
  }
}

export default Glucose;
