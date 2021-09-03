import React from "react";
import { Link } from "react-router-dom";
import CartItem from "../Cart/CartItem";

const Cart = ({ shoppingCart, addToCart, decrementItem }) => {
  const cartItems = shoppingCart.filter((item) => item.quantity > 0);

  const total = shoppingCart.reduce(
    (acc, curr) => parseInt(curr.price * curr.quantity) + parseInt(acc),
    0
  );

  return (
    <div className="page">
      <div className="cart">
        {shoppingCart.length > 0 ? (
          <ul className="cart-list">
            {cartItems.map((item) => (
              <CartItem
                addToCart={addToCart}
                cart={shoppingCart}
                decrementItem={decrementItem}
                item={item}
                key={item.uniqueId}
              ></CartItem>
            ))}
          </ul>
        ) : (
          <div className="fallback cart-list">
            <p className="fallback__text">your shopping cart is empty</p>
          </div>
        )}
        <div className="cart-checkout">
          <div className="cart-checkout--total">
            <p className="cart-checkout--subtotal">Subtotal</p>
            <p className="cart-checkout--price">€{total}.00</p>
          </div>
          <Link to="/checkout">
            <button
              className="cart-checkout__btn btn"
              disabled={!shoppingCart.length > 0}
            >
              check out
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Cart;
