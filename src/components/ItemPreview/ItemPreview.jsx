import React, { useState } from "react";
import { Link } from "react-router-dom";
import createCartObject from "../Utilities/createCartObject";

const ItemPreview = ({ item, addToCart }) => {
  const [added, setAdded] = useState(false);

  const itemAddedCycle = () => {
    //to animate add to cart
    setAdded(true);
    setTimeout(() => setAdded(false), 2000);
  };

  const transformLink = (str) => {
    str = str.replace(/\s+/g, "-").toLowerCase();
    return str;
  };

  const handleClick = () => {
    addToCart(createCartObject(item));
    itemAddedCycle();
  };

  return (
    <div className="preview__box">
      <div className="preview__box--hover">
        <button
          className={!added ? "btn preview__btn" : "btn preview__btn active"}
          onClick={handleClick}
          disabled={added}
        >
          {!added ? (
            <i class="fas fa-plus preview__btn--icon"></i>
          ) : (
            <i class="fas fa-check preview__btn--icon"></i>
          )}
        </button>

        <Link to={`/shop/item/${item.format}/${transformLink(item.title)}`}>
          <h3 className="preview__heading-primary">{item.brand}</h3>

          <img className="preview__img" src={item.image}></img>

          <h4 className="preview__heading-secondary">{item.title}</h4>
          <div className="preview__details">
            <p className="preview__text format">{item.format}</p>
            <p className="preview__text type">{item.type.toLowerCase()}</p>
            <p className="preview__text iso">iso {item.iso}</p>
          </div>
          <p className="preview__price">€{Number(item.price).toFixed(2)}</p>
        </Link>
      </div>
    </div>
  );
};

export default ItemPreview;
