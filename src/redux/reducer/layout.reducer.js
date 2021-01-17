import {
  SET_IS_BEST
} from '../types';

const initialState = {
  isBest: false
};

export default (state = initialState, action) => {
  switch (action.type) {
    case SET_IS_BEST:
      return {...state, isBest: action.data};
    default:
      return state;
  }
}

