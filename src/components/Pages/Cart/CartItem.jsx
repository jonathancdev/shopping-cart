import React, { useState } from 'react';

const CartItem = ({ item, cart, addToCart, decrementItem }) => {

    const handleIncrement = () => {
        addToCart(item)
    }

    const handleDecrement = () => {
        if (item.quantity > 0) {
            decrementItem(item)
        }
    }

    return (
        <div className="cart-item" key={item.uniqueId}>
            <img className="cart-item-image" src={item.image} alt={item.title}></img>
            <div className="cart-item-info">
                <div className="cart-title-div">
                    <p className="cart-item-brand">{item.brand.toUpperCase()}</p>
                    <p className="cart-item-title">{item.title}</p>
                </div>
                <div className="cart-item-details">
                    <span className="cart-item-detail">{item.format}</span>
                    <span className="cart-item-detail">{item.type.toLowerCase()}</span>
                    <span className="cart-item-detail">{item.iso} iso</span>
                </div>
                <p className="cart-item-price">€{item.price}.00</p>
            </div>
            <div className="cart-item-quantity">
                <div className="cart-item-plusminus" onClick={handleDecrement}><p className="minus">-</p></div>
                <p className="quant">{item.quantity}</p>
                <div className="cart-item-plusminus" onClick={handleIncrement}><p className="plus">+</p></div>
            </div>
        </div>
    )
}

export default CartItem;