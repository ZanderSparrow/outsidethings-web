import {
  FETCH_ART,
  FETCH_ART_RECIEVED,
  FETCH_ART_REJECTED
} from '../actions/types';

const initialState = {
  fetching: false
};

export default (state = initialState, action) => {
  switch (action.type) {
    case FETCH_ART:
      return { ...state, fetching: true, error: null };
    case FETCH_ART_REJECTED:
      return { ...state, fetching: false, error: action.payload };
    case FETCH_ART_RECIEVED:
      return { ...state, fetching: false, error: null, data: action.payload };
    default:
      return state;
  }
};
