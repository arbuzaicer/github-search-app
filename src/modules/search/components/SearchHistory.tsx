import React from "react";

type SearchHistoryProps = {
  searchResults: string[];
  setResultValue: (value: string) => void;
};

const SearchHistory = ({
  searchResults,
  setResultValue,
}: SearchHistoryProps) => {
  const resultsCopy = [...searchResults];
  const resultsContentRender = resultsCopy
    .reverse()
    .map((el: string, index: number) => (
      <div
        className="search-history-result"
        key={index}
        onClick={() => setResultValue(el)}
      >
        <p>{el}</p>
      </div>
    ));

  return (
    <div className="search-history">
      <p className="search-history-title">Search history</p>
      {resultsContentRender}
    </div>
  );
};

export default SearchHistory;
