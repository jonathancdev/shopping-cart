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
        } else if (param === "black-and-white-negative") {
            const parsed = "black-and-white negative"
            return parsed
        } 
        else if (param === "color-negative") {
            const parsed = "color negative"
            return parsed
        }  else {
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
        const filtered = props.items.filter(item => item[itemCat].toLowerCase() === subcategory)
        return filtered
    }
    // const truncate = (str, max = 6) => {
    //     const array = str.trim().split(' ');
    //     const ellipsis = array.length > max ? '...' : '';
      
    //     return array.slice(0, max).join(' ') + ellipsis;
    //   };

    const catItems = filterItems()

    return (
        <div className='page category'>
            <div className="cat-header">
                <h1>{category}: {subcategory}</h1>
            </div>

            <div className="items-grid">
                {catItems.map(item =>
                    <div className='item-wrap' key={item.id}>
                        <Link to={`/shop/item/${transformLink(item.title)}`}>
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

export default Category;