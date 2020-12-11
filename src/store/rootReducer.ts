import { combineReducers } from 'redux';

import SearchReducer, {
  STATE_KEY as SEARCH_STATE_KEY,
} from 'modules/search/search.reducer';

const rootReducer = combineReducers({
  [SEARCH_STATE_KEY]: SearchReducer,
});

export default rootReducer;
