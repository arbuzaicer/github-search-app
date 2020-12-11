import { AnyAction } from "redux";

import { ActionSuffix } from "store/store.models";

import { SearchResultItem } from "./models";
import { FETCH_SEARCH_DATA } from "./search.actions";

export const STATE_KEY = "search";

type SearchState = {
  searchResults: null | SearchResultItem[];
};

const initialState: SearchState = {
  searchResults: null,
};

const SearchReducer = (state = initialState, action: AnyAction) => {
  switch (action.type) {
    case `${FETCH_SEARCH_DATA}${ActionSuffix.SUCCESS}`: {
      const searchResults = action.payload.data.items;

      return { ...state, searchResults };
    }
    default: {
      return state;
    }
  }
};

export const getSearchResultsData = (
  state: Record<string, any>
): SearchResultItem[] => state[STATE_KEY].searchResults;

export default SearchReducer;
