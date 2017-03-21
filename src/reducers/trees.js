import {
  FETCH_TREES,
  FETCH_TREES_RECEIVED,
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
    case FETCH_TREES_RECEIVED:
      const trees = action.payload.map(tree => {
        if(tree.latitude && tree.longitude) {
          return {
            id: tree.treeid,
            species: tree.qSpecies,
            siteType: tree.qSiteInfo,
            caretaker: tree.qCaretaker,
            careassist: tree.qCareAssistant
          };
        }
      })
      .filter(value => { return value !== undefined });
      return { ...state, fetching: false, data: trees, error: null };
    case FETCH_TREES_REJECTED:
      return { ...state, fetching: false, error: action.payload };
    default:
      return state;
  }
};
