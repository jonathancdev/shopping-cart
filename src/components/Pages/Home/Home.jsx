import React from "react";
import { Link } from "react-router-dom";
import home1 from "../../../img/rect-home/home1.png";
import home2 from "../../../img/rect-home/home2.png";
import home3 from "../../../img/rect-home/home3.png";
import home4 from "../../../img/rect-home/home4.png";
import SearchBar from "./SearchBar";

const Home = ({ items }) => {
  return (
    <div className="page">
      <div className="home">
        <Link className="home__item home__item--shop" to="/shop">
          shop all film
          <i className="far fa-arrow-alt-circle-right home__item--arrow"></i>
        </Link>

        <Link className="home__item" to="/shop/category/color/black-and-white">
          <img
            src={home1}
            className="home__item--img"
            alt="black and white film"
          />
          <p className="home__item--title">black and white</p>
        </Link>

        <Link className="home__item" to="/shop/category/color/color-all">
          <img src={home2} className="home__item--img" alt="color film" />
          <p className="home__item--title">color & slide</p>
        </Link>

        <Link className="home__item" to="/shop/category/format/35mm">
          <img src={home3} className="home__item--img" alt="35mm film" />
          <p className="home__item--title">35mm</p>
        </Link>

        <Link className="home__item" to="/shop/category/format/120">
          <img src={home4} className="home__item--img" alt="120 film" />
          <p className="home__item--title">medium format</p>
        </Link>

        <div className="home__item">
          <SearchBar items={items} />
        </div>
      </div>
    </div>
  );
};

export default Home;
