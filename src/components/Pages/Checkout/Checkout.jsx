import React, { useState } from 'react';
import './Checkout.css'
import PaymentForm from './PaymentForm'

const Checkout = ( {shoppingCart}) => {

    const [pay, setPay] = useState(false)
    const total = shoppingCart.reduce((acc, curr) => parseInt(curr.price * curr.quantity) + parseInt(acc), 0)

    const handleClick = () => {
        setPay(true)
    }
    const hidePay = () => {
        setPay(false)
    }
    return (
        <div className='page checkout'>
            {pay
            ? <PaymentForm
                hidePay={hidePay}
                />
            : null }
            <div className="order-summary">
                <h1>Order summary</h1>
                    <div className="checkout-header">
                        <p className="header-item">item</p>
                        <p className="header-quantity">quantity</p>
                        <p className="header-price">price</p>
                    </div>

                {shoppingCart.map(item => 
                <div className="checkout-item">
                            <div>
                                <p className="checkout-item-brand">{item.brand.toUpperCase()}</p>
                                <p className="checkout-item-title">{item.title}</p>
                            </div>
                            <p className="checkout-item-quantity">{item.quantity}</p>
                                <p className="checkout-item-price">€{item.price}.00</p>
                </div>
                )}
            </div>
                <div className="checkout-wrapper">
                    <div className="cart-total">
                        <p>Subtotal</p>
                        <p className="total-value">€{total}.00</p>
                    </div>

                    <button onClick={handleClick} className="pay-btn">submit order</button>

                </div>
        </div>
    )
}

export default Checkout;

