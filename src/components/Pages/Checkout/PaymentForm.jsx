import React, { useState, useRef } from "react";

const PaymentForm = ({ hidePay }) => {
  const cardHolder = useRef();
  const cardNumber = useRef();
  const expiration = useRef();
  const cvv = useRef();
  const handleClick = () => {
    hidePay();
  };

  const [valid, setValid] = useState(false);

  const validateForm = () => {
    if (
      cardHolder.current.value.length > 0 &&
      cardNumber.current.value.length === 16 &&
      expiration.current.value != "" &&
      cvv.current.value.length === 3
    ) {
      setValid(true);
    }
  };

  return (
    <div className="payment">
      <div className="payment__heading">
        <h3 className="payment__heading--primary">Payment</h3>
        <div className="payment__icons">
          <i className="fa fa-credit-card payment__icon"></i>
          <i className="fa fa-cc-visa payment__icon"></i>
          <i className="fa fa-cc-mastercard payment__icon"></i>
          <i className="fa fa-cc-discover payment__icon"></i>
          <i className="fa fa-cc-amex payment__icon"></i>
        </div>
      </div>
      <div className="form">
        <label className="form__label">Cardholder's name:</label>
        <input
          className="form__input"
          type="text"
          ref={cardHolder}
          onBlur={validateForm}
        />

        <label className="form__label">Card number:</label>
        <input
          className="form__input"
          maxLength="16"
          type="text"
          ref={cardNumber}
          onBlur={validateForm}
        />

        <div className="form--row">
          <label className="form__label">Expiration:</label>
          <input
            className="form__input exp"
            type="date"
            ref={expiration}
            onBlur={validateForm}
          />

          <label className="form__label">CVV:</label>
          <input
            className="form__input cvv"
            maxLength="3"
            type="text"
            ref={cvv}
            onBlur={validateForm}
          />
        </div>
      </div>
      <button onClick={handleClick} className="form__btn" disabled={!valid}>
        submit
      </button>
    </div>
  );
};

export default PaymentForm;
