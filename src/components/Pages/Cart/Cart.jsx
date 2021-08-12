import React from 'react';
import './Cart.css'
import '../Pages.css'

const Cart = (props) => {
    return (
        <div className='page cart'>
            <h1>shooping curt</h1>
            <p>shopping cart contains:</p>
            <p>{props.shoppingCart[0].title}: {props.shoppingCart[0].quantity}</p>
        </div>
    )
}

export default Cart;