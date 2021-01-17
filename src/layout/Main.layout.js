import React from "react";
import {withRouter} from "react-router-dom";
import {connect} from "react-redux";
import {getPath, errorAlert, successAlert} from "../helper/functions";
import {setLogData, setCurrentStep, setTimeSpend, resetLogs} from "../redux/action/general.action";
import {DEFAULT_GOALS, DONE, LIMIT, PAGE_MAP, PAGE} from "../config/variables";
import BestCase from './BestCase.component';

import style from "./Main.module.scss";

let begin = 0;
let end = 0;

class MainLayout extends React.Component {

  componentDidMount() {
    this.props.history.push(PAGE.HOME.VALUE);
    this.setTimer();
  }

  shouldComponentUpdate(nextProps, nextState, nextContext) {
    if (this.props.location.pathname !== nextProps.location.pathname) {
      this.setTimer();
      this.setLog(this.props.location.pathname);
    }

    const lastGoal = DEFAULT_GOALS[DEFAULT_GOALS.length - 1];
    if (this.props.general[lastGoal].state !== nextProps.general[lastGoal].state) {
      setTimeout(() => this.props.history.push(PAGE.REPORT.VALUE), 500);
    }
    return true;
  }

  setTimer = () => {
    begin = end;
    end = window.performance.now();
  };

  getTimeSpend = () => end - begin;

  showReport = () => {
    successAlert("سپاس", "از این که زمان ارزشمندتان را در اختیار بنده قرار دادید سپاس گذارم. لطفا فایل گزارش را دانلود کرده و در اختیار بنده قرار دهید.");
  };

  setLog = async (path) => {
    const {currentStep, setLogData, general, setCurrentStep, setTimeSpend} = this.props;

    if (this.props.currentStep >= DEFAULT_GOALS.length) {
      this.showReport();
      this.props.history.push(PAGE.REPORT.VALUE);
      return;
    }
    const currentGoal = DEFAULT_GOALS[currentStep];
    const paths = getPath(path);
    const page = paths[0] ? paths[0] : "home";
    const data = {page, timeSpend: this.getTimeSpend()};
    if (data.timeSpend < 500) return;
    await setLogData(currentGoal, data);

    const state = this.props.general[currentGoal].state;
    const preTimeSpend = this.props.general[currentGoal].timeSpend;
    const limited = this.props.general[currentGoal].logs.length >= LIMIT && this.props.general[currentGoal].state !== DONE;
    (state === DONE || limited) && setTimeSpend(currentGoal, preTimeSpend + this.getTimeSpend());
    (state === DONE || limited) && setCurrentStep(currentStep + 1);
    limited && errorAlert("ناموفق", `متاسفانه نتوانستید تسک ${PAGE_MAP[DEFAULT_GOALS[currentStep]]} را به اتمام رسانید. لطفا تسک ${PAGE_MAP[DEFAULT_GOALS[currentStep + 1]]} را انجام دهید`);
    // limited && resetLogs(currentGoal);
    limited && this.props.history.push(PAGE.HOME.VALUE);
  };

  render() {
    return (
      <React.Fragment>
        <div className={style.container}>
          <div className={style.container__wrapper} id="canvas-container">
            {this.props.isBest ? <BestCase>{this.props.children}</BestCase> : this.props.children}
          </div>
        </div>
      </React.Fragment>
    );
  }
}

const mapStateToProps = (state) => ({
  currentStep: state.general.currentStep,
  general: state.general,
  isBest: state.layout.isBest
});

const mapDispatchToProps = (dispatch) => ({
  setLogData: (name, data) => dispatch(setLogData(name, data)),
  resetLogs: (name) => dispatch(resetLogs(name)),
  setCurrentStep: (step) => dispatch(setCurrentStep(step)),
  setTimeSpend: (name, time) => dispatch(setTimeSpend(name, time))
});

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(MainLayout));
