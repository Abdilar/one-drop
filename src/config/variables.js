/*
* Name of constant variables are defined here
* */

export const PAGE = {
  HOME: {
    VALUE: '',
  }
};

export const TOAST = {
  AUTO_CLOSE_TIME: Number(process.env.REACT_APP_TOAST_AUTO_CLOSE) || 5000,
  LIMIT: process.env.REACT_APP_TOAST_LIMIT || 3
};