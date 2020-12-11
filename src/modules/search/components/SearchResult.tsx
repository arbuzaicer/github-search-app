import React from "react";

type SearchResultProps = {
  title: string;
  language: string;
  description: string;
  avatar: string;
  username: string;
  gitLink: string;
};

const SearchResult = ({
  title,
  language,
  description,
  avatar,
  username,
  gitLink,
}: SearchResultProps) => {
  const cutValue = window.innerWidth > 480 ? 35 : 15;

  const cutContent = (value: string): string =>
    value && value.length > cutValue
      ? value.substr(0, cutValue) + "..."
      : value;

  return (
    <div className="search-result">
      <div className="search-result-content">
        <p className="search-result-item search-result-title">
          {cutContent(title)}
        </p>
        <p className="search-result-item">
          Language: <span>{cutContent(language)}</span>
        </p>
        <p className="search-result-item">
          Description: <span>{cutContent(description)}</span>
        </p>
      </div>
      <div className="owner-section">
        <img width={70} height={70} src={avatar} alt={username} />
        <p>{username}</p>
        <a href={gitLink} target="_blank" rel="noreferrer">
          User Link
        </a>
      </div>
    </div>
  );
};

export default SearchResult;
