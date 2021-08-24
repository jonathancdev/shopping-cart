import React, { useState } from 'react';
import { Link } from 'react-router-dom'
import createCartObject from '../components/Utilities/createCartObject'

const ItemPreview = ( {item, addToCart} ) => {

    const [added, setAdded] = useState(false)

    const itemAddedCycle = () => {
        setAdded(true)
        setTimeout(() => setAdded(false), 2000)
    }

    const transformLink = (str) => {
        str = str.replace(/\s+/g, '-').toLowerCase();
        return str
    }
    const handleClick = () => {
        addToCart(createCartObject(item))
        itemAddedCycle()
    }   
    return (
        <div className='item-wrap' key={item.id}>

                <button className={added ? "preview-add-btn-wrap active" : "preview-add-btn-wrap"} onClick={handleClick} disabled={added}>
                    {!added
                    ?<p className="preview-item-plus"><i class="fas fa-plus"></i></p>
                    : <p className="preview-item-text"><i class="fas fa-check"></i></p>}
                </button>

            <Link to={`/shop/item/${item.format}/${transformLink(item.title)}`}>
                <h3 className="item-brand">{item.brand.toUpperCase()}</h3>
                <div className="item-img-wrap">
                    <img className="item-img" src={item.image}></img>
                </div>
                <div className="item-info">
                    <h4 className="item-title">{item.title}</h4>
                    <div className="item-details">
                        <p>{item.format}</p>
                        <p>{item.type.toLowerCase()}</p>
                        <p>{item.iso} iso</p>
                    </div>
                    <p className="item-price">€{Number(item.price).toFixed(2)}</p>
                </div>
            </Link>
        </div>
    )
}

export default ItemPreview;