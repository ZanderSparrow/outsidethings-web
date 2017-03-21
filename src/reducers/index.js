import { combineReducers } from "redux";
import { routerReducer } from "react-router-redux";
import { reducer as formReducer } from "redux-form";

import art from './art';
import categories from './categories';
import selections from './selections';

// main reducers
export const reducers = combineReducers({
  routing: routerReducer,
  form: formReducer,
  art,
  categories,
  selections
});
