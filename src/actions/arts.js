import 'whatwg-fetch';
import config from '../config';

import {
  FETCH_ART,
  FETCH_ART_RECIEVED,
  FETCH_ART_REJECTED
} from './types';

var url_root =  'https://data.sfgov.org/resource/bm46-8iwk.json';
var myHeaders = new Headers();
myHeaders.append('X-App-Token', config.openDataToken);
var options = {
  method: 'GET',
  headers: myHeaders
};

export function getArt() {
  return dispatch => {
    dispatch({ type: FETCH_ART });
    fetch(url_root, options).then(r => r.json()).then(arts => {
      dispatch({ type: FETCH_ART_RECIEVED, payload: arts });
    })
    .catch(error => {
      dispatch({ type: FETCH_ART_REJECTED, payload: error });
    });
  }
};
