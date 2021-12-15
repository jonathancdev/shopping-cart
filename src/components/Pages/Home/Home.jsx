import React, { useState } from "react";
import { Link } from "react-router-dom";
import SearchBar from "./SearchBar";
import SearchList from "./SearchList";

const Home = ({ items }) => {
  const [searchList, setSearchList] = useState([]);
  const updateSearchList = (arr) => {
    setSearchList(arr);
  };

  console.log(searchList);
  return (
    <div className="page">
      <div className="home">
        <Link className="home__item home__item--shop" to="/shop">
          shop all film
          <i className="far fa-arrow-alt-circle-right home__item--arrow"></i>
        </Link>
        <div className="home__main">
          {searchList.length > 0 && <SearchList searchList={searchList} />}
          {/* <Link className="home__item" to="/shop/category/color/black-and-white">
          <img src={{}} className="home__item--img" />
          <p className="home__item--title">black and white</p>
        </Link>

        <Link className="home__item" to="/shop/category/color/color-all">
          <img src={{}} className="home__item--img" />
          <p className="home__item--title">color & slide</p>
        </Link>

        <Link className="home__item" to="/shop/category/format/35mm">
          <img src={{}} className="home__item--img" />
          <p className="home__item--title">35mm</p>
        </Link>

        <Link className="home__item" to="/shop/category/format/120">
          <img src={{}} className="home__item--img" />
          <p className="home__item--title">medium format</p>
        </Link> */}
        </div>
        <SearchBar items={items} updateSearchList={updateSearchList} />
      </div>
    </div>
  );
};

export default Home;
