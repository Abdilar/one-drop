import {DEFAULT_GOALS, FAILED} from '../../config/variables';
import {
  SET_LOG,
  SET_TIME_SPEND,
  SET_STATE,
  SET_CURRENT_STEP,
} from '../types';

const initialState = {
  goals: DEFAULT_GOALS,
  weight: {
    logs: [],
    state: FAILED,
    timeSpend: 0
  },
  blood: {
    logs: [],
    state: FAILED,
    timeSpend: 0
  },
  glucose: {
    logs: [],
    state: FAILED,
    timeSpend: 0
  },
  activity: {
    logs: [],
    state: FAILED,
    timeSpend: 0
  },
  currentStep: 0
};

export default (state = initialState, action) => {
  switch (action.type) {
    case SET_CURRENT_STEP:
      return {...state, currentStep: action.data};
    case SET_STATE:
      return {...state, [action.name]: {...state[action.name], state: action.data}};
    case SET_TIME_SPEND:
      return {...state, [action.name]: {...state[action.name], timeSpend: action.data}};
    case SET_LOG:
      const logs = [...state[action.name].logs];
      logs.push(action.data);
      return {...state, [action.name]: {...state[action.name], logs}};
    default:
      return state;
  }
}

