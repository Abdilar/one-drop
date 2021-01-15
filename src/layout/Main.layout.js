import React from "react";
import {withRouter} from "react-router-dom";
import {connect} from "react-redux";
import {getPath} from "../helper/functions";
import {setLog} from "../redux/action/general.action";
import {DEFAULT_GOALS} from "../config/variables";

import style from "./Main.module.scss";

let begin = 0;
let end = 0;

class MainLayout extends React.Component {

  componentDidMount() {
    this.setTimer();
  }

  shouldComponentUpdate(nextProps, nextState, nextContext) {
    if (this.props.location.pathname !== nextProps.location.pathname) {
      this.setTimer(true);
      this.setLog();
    }
    return true;
  }

  setTimer = (isEnd = false) => {
    begin = end;
    end = window.performance.now()
    // isEnd ? end = window.performance.now() : begin = window.performance.now();
  };

  getTimeSpend = () => end - begin;

  setLog = () => {
    const {currentStep, setLog} = this.props;
    const currentGoal = DEFAULT_GOALS[currentStep];
    const paths = getPath();
    const page = paths[0] ? paths[0] : "home";
    const data = {page, timeSpend: this.getTimeSpend()};
    setLog(currentGoal, data)
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
  currentStep: state.general.currentStep
});

const mapDispatchToProps = (dispatch) => ({
  setLog: (name, data) => dispatch(setLog(name, data))
});

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(MainLayout));
