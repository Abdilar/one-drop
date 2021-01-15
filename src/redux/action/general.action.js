import * as types from "../types";

export const setState = (name, data) => ({type: types.SET_STATE, name, data});
export const setTimeSpend = (name, data) => ({type: types.SET_TIME_SPEND, name, data});
export const setLog = (name, data) => ({type: types.SET_LOG, name, data});
export const setCurrentStep = (data) => ({type: types.SET_CURRENT_STEP, data});

