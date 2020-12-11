import React, { useCallback, useEffect, useState } from "react";
import { DebounceInput } from "react-debounce-input";
import { useDispatch, useSelector } from "react-redux";

import Loader from "../../../components/Loader/Loader";
import { ActionSuffix } from "../../../store/store.models";

import SearchHistory from "../components/SearchHistory";
import SearchResult from "../components/SearchResult";
import { SearchResultItem } from "../models";
import { fetchSearchData } from "../search.actions";
import { getSearchResultsData } from "../search.reducer";

import "./Search.scss";

const Search = () => {
  const dispatch = useDispatch();
  const resultsData = useSelector(getSearchResultsData);

  const [searchValue, setSearchValue] = useState<string>("");
  const [searchHistoryResults, setHistoryResults] = useState<Array<string>>([]);
  const [isContentLoaded, setIsContentLoaded] = useState<boolean>(false);

  const handleLoad = useCallback(async () => {
    setIsContentLoaded(false);
    const loadedData = await dispatch(fetchSearchData(searchValue));

    if (loadedData.type.includes(ActionSuffix.SUCCESS)) {
      setIsContentLoaded(true);
    }
  }, [dispatch, searchValue]);

  // checking result data existing
  useEffect(() => {
    const historyResults = JSON.parse(localStorage.getItem("search_results"));
    if (historyResults) {
      setHistoryResults(historyResults);
    }
  }, []);

  useEffect(() => {
    if (searchValue) {
      handleLoad();

      if (!searchHistoryResults.includes(searchValue)) {
        const results = [...searchHistoryResults];
        setHistoryResults([...results, searchValue]);

        if (results.length >= 5) {
          results.shift();
          setHistoryResults([...results, searchValue]);
        }
      }
    }
  }, [handleLoad, searchHistoryResults, searchValue]);

  // writing data into local storage
  useEffect(() => {
    if (searchHistoryResults.length) {
      localStorage.setItem(
        "search_results",
        JSON.stringify(searchHistoryResults)
      );
    }
  }, [searchHistoryResults]);

  return (
    <section className="search-page">
      <div>
        <DebounceInput
          className="debounce-input"
          minLength={1}
          value={searchValue}
          debounceTimeout={500}
          onChange={(event) => setSearchValue(event.target.value)}
        />

        <SearchHistory
          searchResults={searchHistoryResults}
          setResultValue={setSearchValue}
        />
      </div>

      {resultsData && isContentLoaded && (
        <div className="search-results">
          {resultsData.map((el: SearchResultItem) => (
            <SearchResult
              key={el.id}
              description={el.description}
              title={el.name}
              language={el.language}
              avatar={el.owner.avatar_url}
              username={el.owner.login}
              gitLink={el.owner.html_url}
            />
          ))}
          {searchValue && !resultsData.length && (
            <h1 className="no-results">No results found!</h1>
          )}
        </div>
      )}
      {searchValue && !isContentLoaded && <Loader />}
    </section>
  );
};

export default Search;
