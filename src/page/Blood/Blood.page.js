import React from 'react';
import {withRouter} from "react-router-dom";
import {connect} from "react-redux";
import {setStateData} from "../../redux/action/general.action";
import {Header, WeightTheme} from "../../components";
import {errorAlert, errorToast, isEmpty} from "../../helper/functions";
import {DEFAULT_GOALS, DONE, PAGE, BLOOD, PAGE_MAP, WEIGHT} from "../../config/variables";

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

  handleAccept = async () => {
    const isValid = Object.keys(this.state).every(state => !isEmpty(this.state[state]));
    if (isValid) {
      const currentGoal = DEFAULT_GOALS[this.props.currentStep];
      currentGoal === BLOOD && await this.props.setState(currentGoal, DONE);
      if (currentGoal !== BLOOD) {
        const alertText = `با وارد کردن فشارخون، تسک ${PAGE_MAP[currentGoal]} را به پایان نرسانده اید. لذا به صفحه ${PAGE_MAP[currentGoal]} مراجعه کنید و مقدار آن را ثبت کنید.`;
        errorAlert('توجه', alertText, "باشه");
      }
      this.props.history.push(PAGE.HOME.VALUE);
    } else {
      errorToast('اطلاعات را کامل وارد کنید.');
    }
  };

  handleBack = () => {
    const isValid = Object.keys(this.state).every(state => !isEmpty(this.state[state]));
    let alertText = "مقدار وارد شده نیازمند ثبت هست.";
    isValid && errorAlert('توجه', alertText, "باشه");
    !isValid && this.props.history.push(PAGE.HOME.VALUE);
  };

  render() {
    return (
      <section className="flex__column height__expand">
        <Header onAccept={this.handleAccept} onBack={this.handleBack}  title="افزودن فشار خون" />
        <WeightTheme firstDescription="سیستولیک" secondDescription="دیاستولیک" onChangeFirst={this.handleChange} onChangeSecond={this.handleChangeSecond} />
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

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(Blood));
