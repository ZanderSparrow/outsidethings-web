import {
  FETCH_ART,
  FETCH_ART_RECIEVED,
  FETCH_ART_REJECTED
} from '../actions/types';

import { IsJsonString } from '../utils';

const initialState = {
  fetching: false,
  data: []
};

export default (state = initialState, action) => {
  switch (action.type) {
    case FETCH_ART:
      return { ...state, fetching: true, error: null };
    case FETCH_ART_REJECTED:
      return { ...state, fetching: false, error: action.payload };
    case FETCH_ART_RECIEVED:
      const artworks = action.payload.map(art => {
        if(IsJsonString(art.geometry)) {
          let location = JSON.parse(art.geometry);
          if(location.coordinates) {
            return {
              key: art._id_,
              artist: art.artist,
              name: art.title,
              medium: art.medium,
              size: art.display_dimensions,
              location_description: art.location_desctiption,
              lat: location.coordinates[1],
              lng: location.coordinates[0]
            };
          }
        }
      })
      .filter(value => { return value !== undefined });
      return { ...state, fetching: false, error: null, data: artworks };
    default:
      return state;
  }
};
