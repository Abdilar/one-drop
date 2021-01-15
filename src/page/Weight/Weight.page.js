import React from 'react';
import {withRouter} from "react-router-dom";
import {connect} from "react-redux";
import {Header, WeightTheme} from "../../components";
import {errorToast, isEmpty} from "../../helper/functions";
import {setStateData} from "../../redux/action/general.action";
import {PAGE, DONE, DEFAULT_GOALS, WEIGHT} from "../../config/variables";

import "./Weight.style.scss";

class Weight extends React.Component {
  state = {
    weightValue: ""
  };

  handleChange = (value) => {
    this.setState({weightValue: value})
  };

  handleAccept = async () => {
    const isValid = Object.keys(this.state).every(state => !isEmpty(this.state[state]));
    if (isValid) {
      const currentGoal = DEFAULT_GOALS[this.props.currentStep];
      currentGoal === WEIGHT && await this.props.setState(currentGoal, DONE);
      this.props.history.push(PAGE.HOME.VALUE);
    } else {
      errorToast('اطلاعات را کامل وارد کنید.');
    }
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

const mapDispatchToProps = (dispatch) => ({
  setState: (name, state) => dispatch(setStateData(name, state)),
});
const mapStateToProps = (state) => ({
  currentStep: state.general.currentStep,
});

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(Weight));
