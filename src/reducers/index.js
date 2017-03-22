import { combineReducers } from "redux";
import { routerReducer } from "react-router-redux";
import { reducer as formReducer } from "redux-form";

import arts from './arts';
import trees from './trees';
import categories from './categories';
import selections from './selections';

// main reducers
export const reducers = combineReducers({
  routing: routerReducer,
  form: formReducer,
  arts,
  trees,
  categories,
  selections
});
