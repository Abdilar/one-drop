import React from "react";
import {withRouter} from "react-router-dom";
import {connect} from "react-redux";
import {getPath} from "../helper/functions";
import {setLogData, setCurrentStep, setTimeSpend} from "../redux/action/general.action";
import {DEFAULT_GOALS, DONE} from "../config/variables";

import style from "./Main.module.scss";

let begin = 0;
let end = 0;

class MainLayout extends React.Component {

  componentDidMount() {
    this.setTimer();
  }

  async shouldComponentUpdate(nextProps, nextState, nextContext) {
    if (this.props.location.pathname !== nextProps.location.pathname) {
      this.setTimer();
      await this.setLog(this.props.location.pathname);
    }
    return true;
  }

  setTimer = () => {
    begin = end;
    end = window.performance.now()
    // isEnd ? end = window.performance.now() : begin = window.performance.now();
  };

  getTimeSpend = () => end - begin;

  setLog = async (path) => {
    const {currentStep, setLogData, general, setCurrentStep, setTimeSpend} = this.props;
    if (currentStep >= DEFAULT_GOALS.length) return;
    const currentGoal = DEFAULT_GOALS[currentStep];
    const paths = getPath(path);
    const page = paths[0] ? paths[0] : "home";
    const data = {page, timeSpend: this.getTimeSpend()};
    await setLogData(currentGoal, data);

    const state = general[currentGoal].state;
    const preTimeSpend = general[currentGoal].timeSpend;
    state === DONE && setTimeSpend(currentGoal, preTimeSpend + this.getTimeSpend());
    state === DONE && setCurrentStep(currentStep + 1);
  };

  render() {
    return (
      <React.Fragment>
        <div className={style.container}>
          <div className={style.container__wrapper} id="canvas-container">
            {this.props.children}
          </div>
        </div>
      </React.Fragment>
    );
  }
}

const mapStateToProps = (state) => ({
  currentStep: state.general.currentStep,
  general: state.general
});

const mapDispatchToProps = (dispatch) => ({
  setLogData: (name, data) => dispatch(setLogData(name, data)),
  setCurrentStep: (step) => dispatch(setCurrentStep(step)),
  setTimeSpend: (name, time) => dispatch(setTimeSpend(name, time)),
});

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(MainLayout));
