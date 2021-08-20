import React from 'react';
import './Cart.css'
import '../Pages.css'
import CartItem from '../Cart/CartItem'

const Cart = (props) => {

    console.log(props.shoppingCart.length)
    const cartItems = props.shoppingCart.filter(item => item.quantity > 0)
    return (
        <div className='page cart'>

            { props.shoppingCart.length > 0
            ? <>
            <div className="cart-wrapper">
            {cartItems.map(item =>
                <CartItem addToCart={props.addToCart} 
                    cart={props.shoppingCart}
                    decrementItem={props.decrementItem}
                    item={item}
                >

                </CartItem>
                        )}
            </div>
            <div className="checkout-wrapper">
                <div className="cart-total">
                    <p>Subtotal</p>
                    <p className="total-value">99</p>
                </div>
                <div className="cart-total">
                    <p>Shipping</p>
                    <p className="total-value">FREE</p>
                </div>
                <div className="cart-total">
                    <p>Total</p>
                    <p className="total-value">99</p>
                </div>
                <button className="checkout-btn">
                    check out
                </button>
            </div>
            </>
            : <p>your shopping cart is empty</p> }
        </div>
    )
}

export default Cart;