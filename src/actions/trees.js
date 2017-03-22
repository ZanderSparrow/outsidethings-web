import config from '../config';
import {
  FETCH_TREES,
  FETCH_TREES_RECIEVED,
  FETCH_TREES_REJECTED
} from './types';

var url_root = 'https://data.sfgov.org/resource/2zah-tuvt.json';
var myHeaders = new Headers();
myHeaders.append('X-App-Token', config.openDataToken);
var options = {
  method: 'GET',
  headers: myHeaders
};

export function getTrees() {
  return dispatch => {
    dispatch({ type: FETCH_TREES });
    fetch(url_root, options).then(r => r.json()).then(trees => {
      console.log("got trees in actions");
      dispatch({ type: FETCH_TREES_RECIEVED, payload: trees });
    })
    .catch(error => {
      dispatch({ type: FETCH_TREES_REJECTED, payload: error });
    });
  };
};
