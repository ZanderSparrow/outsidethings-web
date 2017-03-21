import { combineReducers } from "redux";
import { routerReducer } from "react-router-redux";
import { reducer as formReducer } from "redux-form";

import art from './art';
import trees from './trees';
import categories from './categories';
import selections from './selections';

// main reducers
export const reducers = combineReducers({
  routing: routerReducer,
  form: formReducer,
  art,
  trees,
  categories,
  selections
});
