import React from 'react';
import {withRouter} from "react-router-dom";
import {connect} from "react-redux";
import {ActivityTheme, Footer, Header, WeightTheme} from "../../components";
import {errorAlert, errorToast, isEmpty} from "../../helper/functions";
import {ACTIVITY, BLOOD, DEFAULT_GOALS, DONE, PAGE, PAGE_MAP} from "../../config/variables";
import {setStateData} from "../../redux/action/general.action";

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

  handleAccept = async () => {
    const isValid = Object.keys(this.state).every(state => !isEmpty(this.state[state]));
    if (isValid) {
      const currentGoal = DEFAULT_GOALS[this.props.currentStep];
      currentGoal === ACTIVITY && await this.props.setState(currentGoal, DONE);
      if (currentGoal !== ACTIVITY) {
        const alertText = `با وارد کردن میزان فعالیت، تسک ${PAGE_MAP[currentGoal]} را به پایان نرسانده اید. لذا به صفحه ${PAGE_MAP[currentGoal]} مراجعه کنید و مقدار آن را ثبت کنید.`;
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
    const title = this.props.isBest ? "میزاان فعالیت خود را وارد کنید" : "افزودن فعالعیت";

    return (
      <React.Fragment>
        <section className={`flex__column ${this.props.isBest ? "padding__horizontal__20 flex-1 overflow-aut" : "height__expand"}`}>
          <Header isBest={this.props.isBest} onAccept={this.handleAccept} onBack={this.handleBack} title={title} />
          <ActivityTheme ref={this.themRef} isBest={this.props.isBest} description="دقیقه" onChange={this.handleChange} color="orange">
            <div className="padding__horizontal__20 padding__vertical__20">
              <button className={`activity-button ${this.state.activeButton === 'low' ? 'activity-button--active' : ''}`} onClick={() => this.handleClick('low')}>کم</button>
              <button className={`activity-button ${this.state.activeButton === 'med' ? 'activity-button--active' : ''}`} onClick={() => this.handleClick('med')}>نرمال</button>
              <button className={`activity-button ${this.state.activeButton === 'hrd' ? 'activity-button--active' : ''}`} onClick={() => this.handleClick('hrd')}>زیاد</button>
            </div>
          </ActivityTheme>
        </section>
        {
          this.props.isBest && <Footer onAccept={this.handleAccept} onBack={this.handleBack}/>
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
  isBest: state.layout.isBest
});

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(Activity));
