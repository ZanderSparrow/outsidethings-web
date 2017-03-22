import {
  FETCH_TREES,
  FETCH_TREES_RECIEVED,
  FETCH_TREES_REJECTED
} from '../actions/types';

const initialState = {
  fetching: false,
  error: null,
  data: []
};

export default (state = initialState, action) => {
  switch(action.type) {
    case FETCH_TREES:
      return { ...state, fetching: true, error: null };
    case FETCH_TREES_RECIEVED:
      console.log(action.payload);
      const data = action.payload.map(tree => {
        if(tree.latitude && tree.longitude) {
          return {
            id: tree.treeid,
            key: tree.treeid,
            name: tree.qspecies ,
            species: tree.qspecies,
            siteType: tree.qsiteinfo,
            caretaker: tree.qcaretaker,
            careassist: tree.qcareAssistant,
            lat: Number.parseFloat(tree.latitude),
            lng: Number.parseFloat(tree.longitude)
          };
        }
      })
      .filter(value => { return value !== undefined });
      console.log(data);
      return { ...state, fetching: false, data, error: null };
    case FETCH_TREES_REJECTED:
      return { ...state, fetching: false, error: action.payload };
    default:
      return state;
  }
};
