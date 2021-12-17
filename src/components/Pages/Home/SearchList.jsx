import React from "react";
import { Link } from "react-router-dom";

export default function SearchList({ searchList, updateSearchList }) {
  const transformLink = (str) => {
    str = str.replace(/\s+/g, "-").toLowerCase();
    return str;
  };
  const handleClose = () => {
    updateSearchList([]);
  };
  return (
    <ul className="search-list">
      {searchList.map((item) => (
        <Link
          className="search__item"
          to={`/shop/item/${item.format}/${transformLink(item.title)}`}
        >
          <div className="search__text">
            <h3 className="search__text--brand text">{item.brand}</h3>
            <h4 className="search__text--title text">{item.title}</h4>
          </div>
          <div className="search__text">
            <p className="search__text--format text">format: {item.format}</p>
            <p className="search__text--type text">{item.type.toLowerCase()}</p>
            <p className="search__text--iso text">{item.iso} iso</p>
          </div>
        </Link>
      ))}
      <span className="search-list__title">search</span>
      <button onClick={handleClose} className="search-list__close">
        x
      </button>
    </ul>
  );
}
