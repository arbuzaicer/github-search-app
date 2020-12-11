import { Method } from "store/store.models";

const namespace = "search";

export const FETCH_SEARCH_DATA = `${namespace}/FETCH_SEARCH_DATA`;

export const fetchSearchData = (searchResult: string) => {
  return {
    type: FETCH_SEARCH_DATA,
    payload: {
      request: {
        method: Method.GET,
        url: `/search/repositories?q=${searchResult}`,
      },
    },
  };
};
