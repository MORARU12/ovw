import React from "react";
import FeedItem from "../../components/FeedItem";

const SearchPage = () => {
  return (
    <>
      <div className="search-play-icon"></div>
      <div className="search-hashtag-icon"></div>
      <h1 className="searched-text">Polymer earrings</h1>
      <h2 className="searched-result-numbers">
        <span>456</span> items
      </h2>

      <div className="feed-items">
        <FeedItem />
      </div>
    </>
  );
};

export default SearchPage;
