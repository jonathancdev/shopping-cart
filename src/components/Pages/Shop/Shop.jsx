import React, {useState, useEffect} from 'react';
import {Link} from 'react-router-dom';
import './Shop.css';

const Shop = (props) => {

    const transformLink = (str) => {
        str = str.replace(/\s+/g, '-').toLowerCase();
        return str
    } 

    return (
        <div className='page shop'>
            <h1>Shopping page is here</h1>
            <div className="items-grid">
                {props.items.map(item =>
                    <div className='item-wrap' key={item.id}>
                         <Link to={`/shop/item/${item.format}/${transformLink(item.title)}`}>
                        <h3 className="item-brand">{item.brand.toUpperCase()}</h3>
                        <div className="item-img-wrap">
                            <img className="item-img" src={item.image}></img>
                        </div>
                        <div className="item-info">
                            <h4 className="item-title">{item.title}</h4>
                            <div className="item-details">
                                <span className="item-detail">iso: {item.iso}</span>
                                <span className="item-detail">{item.format}</span>
                                <span className="item-detail">{item.type.replace(/ .*/,'').toLowerCase()}</span>
                            </div>
                            <p className="item-price">€{Number(item.price).toFixed(2)}</p>
                        </div>
                        </Link>
                    </div>
                        )}
            </div>
        </div>
    )
}

export default Shop;