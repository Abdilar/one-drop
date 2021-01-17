import React from 'react';
import {withRouter} from "react-router-dom";
import {connect} from "react-redux";
import {ActivityTheme, Footer, Header, WeightTheme} from "../../components";
import {errorAlert, errorToast, isEmpty} from "../../helper/functions";
import {ACTIVITY, BLOOD, DEFAULT_GOALS, DONE, PAGE, PAGE_MAP} from "../../config/variables";
import {setStateData} from "../../redux/action/general.action";

import "./Activity.style.scss";

class Activity extends React.Component {
  themRef = React.createRef();
  state = {
    inputValue: "",
    activeButton: ""
  };

  componentDidMount() {
    this.props.isBest && this.themRef.current.focus();
    this.props.isBest && (this.themRef.current.value = "");
  }

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
    const {isBest} = this.props;
    const {activeButton} = this.state;
    const title = isBest ? "میزاان فعالیت را وارد کنید" : "افزودن فعالعیت";

    return (
      <React.Fragment>
        <section className={`flex__column ${isBest ? "padding__horizontal__20 flex-1 overflow-aut" : "height__expand"}`}>
          <Header isBest={isBest} onAccept={this.handleAccept} onBack={this.handleBack} title={title} />
          <ActivityTheme ref={this.themRef} isBest={isBest} description="دقیقه" onChange={this.handleChange} color="orange">
            {isBest && <h4 className="margin__remove padding__right__10 width__expand text__right">شدت فعالیت را انتخاب کنید</h4>}
            <div className={`padding__vertical__20 ${isBest ? "width__expand box__border display__flex" : "padding__horizontal__20"}`}>
              <button className={`activity-button ${isBest ? "best-button" : ""} ${activeButton === 'low' ? 'activity-button--active' : ''}`} onClick={() => this.handleClick('low')}>کم</button>
              <button className={`activity-button ${isBest ? "best-button" : ""} ${activeButton === 'med' ? 'activity-button--active' : ''}`} onClick={() => this.handleClick('med')}>نرمال</button>
              <button className={`activity-button ${isBest ? "best-button" : ""} ${activeButton === 'hrd' ? 'activity-button--active' : ''}`} onClick={() => this.handleClick('hrd')}>زیاد</button>
            </div>
          </ActivityTheme>
        </section>
        {
          isBest && <Footer onAccept={this.handleAccept} onBack={this.handleBack}/>
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
