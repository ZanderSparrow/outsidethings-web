import 'whatwg-fetch';

import {
  FETCH_ART,
  FETCH_ART_RECIEVED,
  FETCH_ART_REJECTED
} from './types';

var url_root = 'https://jsonplaceholder.typicode.com';

export function getArt() {
  return dispatch => {
    dispatch({ type: FETCH_ART });
    fetch(url_root + '/posts/1').then(r => r.json()).then(console.log);
  }
}
