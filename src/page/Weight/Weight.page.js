import React from 'react';
import {withRouter} from "react-router-dom";
import {connect} from "react-redux";
import {Footer, Header, WeightTheme} from "../../components";
import {errorToast, isEmpty, errorAlert} from "../../helper/functions";
import {setStateData} from "../../redux/action/general.action";
import {PAGE, DONE, DEFAULT_GOALS, WEIGHT, PAGE_MAP} from "../../config/variables";

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
      if (currentGoal !== WEIGHT) {
        const alertText = `با وارد کردن مقدار وزن، تسک ${PAGE_MAP[currentGoal]} را به پایان نرسانده اید. لذا به صفحه ${PAGE_MAP[currentGoal]} مراجعه کنید و مقدار آن را ثبت کنید.`;
        errorAlert('توجه', alertText, "باشه");
      }
      this.props.history.push(PAGE.HOME.VALUE);
    } else {
      errorToast('اطلاعات را کامل وارد کنید.');
    }
    console.log('Is valid: ', isValid)
  };

  handleBack = () => {
    const isValid = Object.keys(this.state).every(state => !isEmpty(this.state[state]));
    let alertText = "مقدار وارد شده نیازمند ثبت هست.";
    isValid && errorAlert('توجه', alertText, "باشه");
    !isValid && this.props.history.push(PAGE.HOME.VALUE);
  };

  render() {
    const title = this.props.isBest ? "وزن خود را وارد کنید" : "افزودن وزن";
    const description = this.props.isBest ? "کیلوگرم" : "Ib";
    return (
      <React.Fragment>
        <section className={`flex__column ${this.props.isBest ? "padding__horizontal__20 flex-1 overflow-aut" : "height__expand"}`}>
          <Header isBest={this.props.isBest} onAccept={this.handleAccept} onBack={this.handleBack} title={title} />
          <WeightTheme isBest={this.props.isBest} firstDescription={description} onChangeFirst={this.handleChange} />
        </section>
        {
          this.props.isBest && <Footer onAccept={this.handleAccept} onBack={this.handleBack} />
        }
      </React.Fragment>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  setState: (name, state) => dispatch(setStateData(name, state)),
});
const mapStateToProps = (state) => ({
  currentStep: state.general.currentStep,
  isBest: state.layout.isBest,
});

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(Weight));
