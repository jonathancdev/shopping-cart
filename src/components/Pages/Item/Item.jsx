import React, {useState, useEffect} from 'react';
import './Item.css';

const Item = (props) => {
    console.log(props.match.params.title)

    const transformLink = (str) => {
        if (str === "fujicolor-superia-x-tra400") {
            str = "fujicolor superia x-tra400"
            return str
        } else {
            str = str.replace(/-/g, ' ').toLowerCase();
            return str
        }
    }

    const filter = props.items.filter((item) => item.title.toLowerCase() == transformLink(props.match.params.title))
    const item = filter[0]
    console.log(item)
    console.log(props.items)

    return (
        <div className='page item'>
            <div className='item-page-wrap'>
                <h3 className="item-page-brand">{item.brand.toUpperCase()}</h3>
                <h4 className="item-page-title">{item.title}</h4>
                <div className="item-page-img-wrap">
                    <img className="item-page-img" src={item.image}></img>
                </div>
                <div className="item-page-details">
                    <span className="item-page-detail">iso: {item.iso}</span>
                    <span className="item-page-detail">{item.format}</span>
                    <span className="item-page-detail">{item.type.replace(/ .*/,'').toLowerCase()}</span>
                </div>
                <p className="item-page-desc">{item.description}</p>
                <div className="price-div">
                    <p className="item-page-price">€{Number(item.price).toFixed(2)}</p>
                    <button className="cart-btn">add to cart</button>
                </div>
            </div>
            {/* <p>{item.brand}</p>
            <p>{item.title}</p>
            <p>{item.description}</p>
            <p>{item.iso}</p>
            <p>{item.format}</p>
            <p>{item.type}</p>
            <p>{item.price}</p>
            <p>{item.title}</p>
            <img src={item.image}></img> */}
        </div>
    )
}

export default Item;