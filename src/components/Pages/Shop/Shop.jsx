import React, {useState, useEffect} from 'react';
import {Link} from 'react-router-dom';
import './Shop.css';
import Options from '../../Options/Options'
import Sort from '../../Utilities/Sort'

const Shop = (props) => {

    const [items, setItems] = useState(props.items)
    const [sortBy, setSortBy] = useState('priceasc')

    useEffect(() => {
        const sorted = Sort(items, sortBy)
        setItems([...sorted])
    }, [sortBy])

    const transformLink = (str) => {
        str = str.replace(/\s+/g, '-').toLowerCase();
        return str
    }

    const setSortOption = (value) => {
        setSortBy(value)
    }
    // const selectSort = (value) => {
    //     if (value === 'brandasc') {
    //         sortByBrandAsc()
    //     } else if (value === 'branddesc') {
    //         sortByBrandDesc()
    //     } else if (value === 'priceasc') {
    //         sortByPriceAsc()
    //     } else if (value === 'pricedesc') {
    //         sortByPriceDesc()
    //     }
    // }
    // const sortByBrandAsc = () => {
    //     const array = props.items;
    //     array.sort(function(a,b) {
    //         const itemA = a.brand.toUpperCase()
    //         const itemB = b.brand.toUpperCase()
    //         return (itemA < itemB) ? -1 : (itemA > itemB) ? 1 : 0;
    //     })
    //     setItems([...array])
    // }
    // const sortByBrandDesc = () => {
    //     const array = props.items;
    //     array.sort(function(a,b) {
    //         const itemA = a.brand.toUpperCase()
    //         const itemB = b.brand.toUpperCase()
    //         return (itemB < itemA) ? -1 : (itemB > itemA) ? 1 : 0;
    //     })
    //     setItems([...array])
    // }
    // const sortByPriceAsc = () => {
    //     const array = props.items;
    //     array.sort(function(a,b) {
    //         return a.price - b.price;
    //     })
    //     setItems([...array])
    // }
    // const sortByPriceDesc = () => {
    //     const array = props.items;
    //     array.sort(function(a,b) {
    //         return b.price - a.price;
    //     })
    //     setItems([...array])
    // }
console.log('check')
    return (
        <div className='page shop'>
            <Options 
                setSortOption={setSortOption}
            />
            <div className="items-grid">
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
        </div>
    )
}

export default Shop;