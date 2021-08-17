import React, {useState, useEffect} from 'react';
import {Link} from 'react-router-dom';

const Category = (props) => {

    const parse = (param) => {
        if (param === "brands") {
            const parsed = "brand"
            return parsed
        } else if (param === "color") {
            const parsed = "type"
            return parsed
        } else if (param === "black-and-white") {
            const parsed = "black and white"
            return parsed
        } 
        else if (param === "color-negative") {
            const parsed = "color negative"
            return parsed
        }  
        else if (param === "color-all") {
            const parsed = ['color negative', 'slide']
            return parsed
        } else {
            return param
        }
    }
    

    const transformLink = (str) => {
        str = str.replace(/\s+/g, '-').toLowerCase();
        return str
    } 

    const category = parse(props.match.params.category)
    const subcategory = parse(props.match.params.subcategory)

    const filterItems = () => {
        const itemCat = category
        const itemSub = subcategory
        if (typeof itemSub !== 'object') {
            const filtered = props.items.filter(item => item[itemCat].toLowerCase() === itemSub)
            return filtered
        } else {
            const filtered = props.items.filter(item => (item[itemCat].toLowerCase() === itemSub[0] || item[itemCat].toLowerCase() === itemSub[1]))
            return filtered
        }
    }

    const catItems = filterItems()

    console.log(props.match.params)
    return (
        <div className='page category'>
            <div className="cat-header">
                <h1>{category}: {typeof subcategory === 'string' ? subcategory : 'color & slide'}</h1>
            </div>

            <div className="items-grid">
                {catItems.map(item =>
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
                                <span className="item-detail">{item.type.toLowerCase()}</span>
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

export default Category;