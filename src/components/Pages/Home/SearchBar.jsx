import React, { useState, useRef } from "react";
import { Link } from "react-router-dom";

const SearchBar = ({ items, updateSearchList }) => {
  const [searchValue, setSearchValue] = useState("");
  const [active, setActive] = useState(false);

  const searchField = useRef();

  const stringifyItems = items.map((item, i) => {
    return {
      string: (item.brand + " " + item.title).toLowerCase(),
      index: i,
      uniqueId: item.uniqueId,
    };
  });

  const searchItems = (array, search) => {
    if (search !== "") {
      const filtered = array.filter((item) =>
        item.string.includes(search.toLowerCase())
      );
      // return filtered.map((item) => items[item.index]);
      updateSearchList(filtered.map((item) => items[item.index]));
    } else {
      // return [];
      updateSearchList([]);
    }
  };

  // const filteredItems = searchItems(stringifyItems, searchValue);

  const searchListen = () => {
    //setSearchValue(searchField.current.value);
    searchItems(stringifyItems, searchField.current.value);
  };

  const searchFocus = (e) => {
    setActive(true);
    e.target.select();
  };

  const searchBlur = () => {
    setActive(false);
    searchField.current.value = "";
    setTimeout(() => {
      setSearchValue("");
    }, 75); //stop ul from disappearing before click event on link is registered
  };

  const transformLink = (str) => {
    str = str.replace(/\s+/g, "-").toLowerCase();
    return str;
  };

  return (
    <div className="home__item searchbar">
      <label className="search__label"></label>
      <input
        className={!active ? "search__input" : "search__input active"}
        onFocus={searchFocus}
        onChange={searchListen}
        onBlur={searchBlur}
        ref={searchField}
        type="text"
        placeholder={!active ? "search" : ""}
      />

      <div className="search__icon">
        {!active ? (
          <i className="fas fa-search search__icon--inactive"></i>
        ) : (
          <i class="fas fa-times search__icon--active"></i>
        )}
      </div>
      {/* !active && searchValue conditional is to stop ul from disappearing before click event on link is registered */}
      <ul
        className={
          !active && searchValue == ""
            ? "search-results__list"
            : "search-results__list active"
        }
      >
        {/* {filteredItems.length > 0
          ? filteredItems.map((item) => (
              <Link
                className="search__item"
                to={`/shop/item/${item.format}/${transformLink(item.title)}`}
              >
                <div className="search__text">
                  <h3 className="search__text--brand text">{item.brand}</h3>
                  <h4 className="search__text--title text">{item.title}</h4>
                </div>
                <div className="search__text">
                  <p className="search__text--format text">
                    format: {item.format}
                  </p>
                  <p className="search__text--type text">
                    {item.type.toLowerCase()}
                  </p>
                  <p className="search__text--iso text">{item.iso} iso</p>
                </div>
              </Link>
            ))
          : null} */}
      </ul>
    </div>
  );
};

export default SearchBar;
