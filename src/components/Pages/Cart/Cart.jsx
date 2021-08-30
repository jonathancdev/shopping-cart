import React from 'react';
import { Link } from 'react-router-dom'
import './Cart.css'
import CartItem from '../Cart/CartItem'

const Cart = (props) => {

    console.log(props.shoppingCart)
    const cartItems = props.shoppingCart.filter(item => item.quantity > 0)

    const total = props.shoppingCart.reduce((acc, curr) => parseInt(curr.price * curr.quantity) + parseInt(acc), 0)

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
                    <p className="total-value">€{total}.00</p>
                </div>
                <Link to="/checkout">
                    <button className="checkout-btn">check out</button>
                </Link>
            </div>
            </>
            : <p>your shopping cart is empty</p> }
        </div>
    )
}

export default Cart;