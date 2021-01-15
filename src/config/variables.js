/*
* Name of constant variables are defined here
* */

export const PAGE = {
  HOME: {
    VALUE: '',
  },
  ACTIVITY: {
    VALUE: 'activity',
  },
  BLOOD: {
    VALUE: 'blood',
  },
  GLUCOSE: {
    VALUE: 'glucose',
  },
  WEIGHT: {
    VALUE: 'weight',
  }
};

export const WEIGHT = PAGE.WEIGHT.VALUE;
export const BLOOD = PAGE.BLOOD.VALUE;
export const GLUCOSE = PAGE.GLUCOSE.VALUE;
export const ACTIVITY = PAGE.ACTIVITY.VALUE;
export const DONE = 'done';
export const FAILED = 'failed';

export const DEFAULT_GOALS = [WEIGHT, BLOOD, GLUCOSE, ACTIVITY];

export const TOAST = {
  AUTO_CLOSE_TIME: Number(process.env.REACT_APP_TOAST_AUTO_CLOSE) || 5000,
  LIMIT: process.env.REACT_APP_TOAST_LIMIT || 3
};
