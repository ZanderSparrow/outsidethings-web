import {
  FETCH_TREES,
  FETCH_TREES_RECIEVED,
  FETCH_TREES_REJECTED
} from './types';

var url = 'https://data.sfgov.org/resource/2zah-tuvt.json';

export function getTrees() {
  return dispatch => {
    dispatch({ type: FETCH_TREES });
    fetch(url_root, options).then(r => r.json()).then(console.log);
  }
}
