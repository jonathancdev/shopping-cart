import React, { useState } from "react";
import PaymentForm from "./PaymentForm";

const Checkout = ({ shoppingCart }) => {
  const [pay, setPay] = useState(false);
  const total = shoppingCart.reduce(
    (acc, curr) => parseInt(curr.price * curr.quantity) + parseInt(acc),
    0
  );

  const handleClick = () => {
    setPay(true);
  };
  const hidePay = () => {
    setPay(false);
  };
  return (
    <div className="page">
      <div className="checkout">
        {pay ? <PaymentForm hidePay={hidePay} /> : null}
        <h1 className="checkout__heading">Order summary</h1>
        <div className="order">
          <div className="order__heading">
            <p className="order__heading--text">item</p>
            <p className="order__heading--text">price</p>
            <p className="order__heading--text">#</p>
          </div>

          <div className="order__list">
            {shoppingCart.map((item) => (
              <div className="order-item">
                <div className="order-item__heading">
                  <h3 className="order-item__heading--primary">
                    {item.brand.toUpperCase()}
                  </h3>
                  <h4 className="order-item__heading--secondary">
                    {item.title}
                  </h4>
                </div>
                <p className="order-item--text">€{item.price}.00</p>
                <p className="order-item--text">{item.quantity}</p>
              </div>
            ))}
          </div>
        </div>
        <div className="checkout-submit">
          <div className="checkout-submit--total">
            <p className="checkout-submit--subtotal">total</p>
            <p className="checkout-submit--price">€{total}.00</p>
          </div>

          <button onClick={handleClick} className="checkout-submit__btn btn">
            submit order
          </button>
        </div>
      </div>
    </div>
  );
};

export default Checkout;
