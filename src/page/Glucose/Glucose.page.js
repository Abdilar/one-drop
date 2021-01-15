import React from 'react';
import {withRouter} from "react-router-dom";
import {connect} from "react-redux";
import {ActivityTheme, Header} from "../../components";
import {errorToast, isEmpty} from "../../helper/functions";
import {GLUCOSE, DEFAULT_GOALS, DONE, PAGE} from "../../config/variables";
import {setStateData} from "../../redux/action/general.action";

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

  handleAccept = async () => {
    const isValid = Object.keys(this.state).every(state => !isEmpty(this.state[state]));
    if (isValid) {
      const currentGoal = DEFAULT_GOALS[this.props.currentStep];
      currentGoal === GLUCOSE && await this.props.setState(currentGoal, DONE);
      this.props.history.push(PAGE.HOME.VALUE);
    } else {
      errorToast('اطلاعات را کامل وارد کنید.');
    }
    console.log('Is valid: ', isValid)
  };

  render() {
    return (
      <section className="flex__column height__expand">
        <Header onAccept={() => this.handleAccept()} title="افزودن گلوکز"/>
        <ActivityTheme description="mg/dL" onChange={this.handleChange} color="red" />
      </section>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  setState: (name, state) => dispatch(setStateData(name, state)),
});
const mapStateToProps = (state) => ({
  currentStep: state.general.currentStep,
});

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(Glucose));
