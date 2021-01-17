import React from 'react';
import {withRouter} from "react-router-dom";
import {connect} from "react-redux";
import {ActivityTheme, Footer, Header} from "../../components";
import {errorAlert, errorToast, isEmpty} from "../../helper/functions";
import {GLUCOSE, DEFAULT_GOALS, DONE, PAGE, ACTIVITY, PAGE_MAP} from "../../config/variables";
import {setStateData} from "../../redux/action/general.action";

import "./Glucose.style.scss";

class Glucose extends React.Component {
  themRef = React.createRef();
  state = {
    inputValue: ""
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
      currentGoal === GLUCOSE && await this.props.setState(currentGoal, DONE);
      if (currentGoal !== GLUCOSE) {
        const alertText = `با وارد کردن میزان گلوکز، تسک ${PAGE_MAP[currentGoal]} را به پایان نرسانده اید. لذا به صفحه ${PAGE_MAP[currentGoal]} مراجعه کنید و مقدار آن را ثبت کنید.`;
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
    const title = isBest ? "میزاان گلوکز را وارد کنید" : "افزودن گلوکز";

    return (
      <React.Fragment>
        <section className={`flex__column ${isBest ? "padding__horizontal__20 flex-1 overflow-aut" : "height__expand"}`}>
          <Header isBest={isBest} onAccept={this.handleAccept} onBack={this.handleBack} title={title} />
          <ActivityTheme ref={this.themRef} isBest={isBest} description="mg/dL" onChange={this.handleChange} color="red" />
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

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(Glucose));
