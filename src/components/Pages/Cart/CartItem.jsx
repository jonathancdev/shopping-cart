import React from "react";

const CartItem = ({ item, addToCart, decrementItem }) => {
  const handleIncrement = () => {
    addToCart(item);
  };

  const handleDecrement = () => {
    if (item.quantity > 0) {
      decrementItem(item);
    }
  };

  return (
    <div className="cart-item" key={item.uniqueId}>
      <img className="cart-item__img" src={item.image} alt={item.title}></img>
      <div className="cart-item--inner">
        <div className="cart-item__top">
          <div className="cart-item__heading">
            <h5 className="cart-item__heading--primary">
              {item.brand.toUpperCase()}
            </h5>
          </div>
          <div className="cart-item__quantity">
            <button className="cart-item__btn btn" onClick={handleDecrement}>
              <i class="fas fa-minus cart-item__btn--icon btn--icon"></i>
            </button>
            <p className="cart-item__counter">{item.quantity}</p>
            <button className="cart-item__btn btn" onClick={handleIncrement}>
              <i class="fas fa-plus cart-item__btn--icon btn--icon"></i>
            </button>
          </div>
        </div>
        <h6 className="cart-item__heading--secondary">{item.title}</h6>

        <div className="cart-item__details">
          <p className="cart-item__text">{item.format}</p>
          <p className="cart-item__text">{item.type.toLowerCase()}</p>
          <p className="cart-item__text">iso {item.iso}</p>
        </div>
        <p className="cart-item__price">€{item.price}.00</p>
      </div>
    </div>
  );
};

export default CartItem;
