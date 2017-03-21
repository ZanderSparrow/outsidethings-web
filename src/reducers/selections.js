import {
  SELECT_CATEGORY,
  SELECT_ITEM
} from '../actions/types';

// tracks the id of the item and category currently selected
const initialState = {
  item: null,
  category: 0
};

export default (state = initialState, action) => {
  switch(action.type) {
    case SELECT_CATEGORY:
      return { ...state, category: action.payload };
    case SELECT_ITEM:
      return { ...state, item: action.payload };
    default:
      return state;
  }
};
