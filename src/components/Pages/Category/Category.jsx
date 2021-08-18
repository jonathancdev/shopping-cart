import React, {useState, useEffect} from 'react';
import {Link} from 'react-router-dom';
import './Category.css'
import Options from '../../Options/Options'
import Sort from '../../Utilities/Sort'

const Category = (props) => {

    // useEffect( async () => {
    //     fetchItems()
    // }, [])

    const [items, setItems] = useState([])
    // const [sortBy, setSortBy] = useState('priceasc')

    // useEffect(() => {
    //     const sorted = Sort(items, sortBy)
    //     setItems([...sorted])
    // }, [sortBy])

    // const fetchItems = async () => {
    //     const data = await fetch('http://localhost:3500/items.json')
    //     const items = await data.json()
    //     items.items.map(item => item.uniqueId = (item.brand + item.title + item.format + item.price).replace(/\s/g, ''))
    //     setItems(items.items.filter((item) => item.brand !== " "))
    // }

    // const setSortOption = (value) => {
    //     setSortBy(value)
    // }

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
    
    return (
        
        <div className='page category'>
            <Options 
                cats={props.cats}
                setSortOption={props.setSortOption}
                setFilterOption={props.setFilterOption}
            />
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