import React, {useState, useEffect} from 'react';
import {Link} from 'react-router-dom';
import './Shop.css';
import Options from '../../Options/Options'
import Sort from '../../Utilities/Sort'

const Shop = () => {

    useEffect( async () => {
        fetchItems()
    }, [])

    const [items, setItems] = useState([])
    const [sortBy, setSortBy] = useState('priceasc')

    useEffect(() => {
        const sorted = Sort(items, sortBy)
        setItems([...sorted])
    }, [sortBy])

    const fetchItems = async () => {
        const data = await fetch('http://localhost:3500/items.json')
        const items = await data.json()
        items.items.map(item => item.uniqueId = (item.brand + item.title + item.format + item.price).replace(/\s/g, ''))
        setItems(items.items.filter((item) => item.brand !== " "))
    }

    const transformLink = (str) => {
        str = str.replace(/\s+/g, '-').toLowerCase();
        return str
    }

    const setSortOption = (value) => {
        console.log(value)
        setSortBy(value)
    }
    
    return (
        <div className='page shop'>
            <Options 
                setSortOption={setSortOption}
            />
            { items.length > 0
            ? <div className="items-grid">
                 {items.map(item =>
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
            : null }
        </div>
    )
}

export default Shop;