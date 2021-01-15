import * as types from "../types";

export const setState = (name, data) => ({type: types.SET_STATE, name, data});
export const setTimeSpend = (name, data) => ({type: types.SET_TIME_SPEND, name, data});
export const setLog = (name, data) => ({type: types.SET_LOG, name, data});
export const setCurrentStep = (data) => ({type: types.SET_CURRENT_STEP, data});

export const setLogData = (name, log) => {
  return dispatch => {
    return new Promise(resolve => {
      dispatch(setLog(name, log));
      resolve();
    });
  }
};

export const setStateData = (name, state) => {
  return (dispatch, getState) => {
    return new Promise(resolve => {
      const goal = getState().general[name];
      const totalTimeSpend = goal.logs.reduce((accmulator, currentValue) => accmulator + currentValue.timeSpend, 0);
      dispatch(setState(name, state));
      dispatch(setTimeSpend(name, totalTimeSpend));
      resolve();
    });
  }
};

