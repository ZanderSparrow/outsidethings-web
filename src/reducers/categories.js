import {
  FETCH_CATEGORIES,
  FETCH_CATEGORIES_RECIEVED,
  FETCH_CATEGORIES_REJECTED
} from '../actions/types';

const initialState = [
  {name: 'art', id: 0},
  {name: 'trees', id: 1}
];

export default (state = initialState, action) => {
  switch(action.type) {
    default:
      return state;
  }
};
