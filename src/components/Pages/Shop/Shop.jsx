import React, {useState, useEffect} from 'react';
import {Link} from 'react-router-dom';
import './Shop.css';
import Options from '../../Options/Options'
import Sort from '../../Utilities/Sort'
import Filter from '../../Utilities/Filter'


const Shop = (props) => {

    
    useEffect(() => { //set filter and sort to original values when unmounted
        console.log('mount')
        return () => {
            console.log('unmount')
          props.setSortOption(null)
          props.setFilterOption(null)
        };
      }, []);
    // useEffect( async () => {
    //     console.log('useeffect 1')
    //     fetchItems()
    // }, [])


    // const [filteredItems, setFilteredItems] = useState([])
    // const [items, setItems] = useState([])
    // const [sortBy, setSortBy] = useState('priceasc')
    // const [filterBy, setFilterBy] = useState(null)

    // let renderItems = filteredItems.length > 0 ? filteredItems : items;

    // useEffect(() => {
    //     console.log('useeffect 2')
    //     const sorted = Sort(renderItems, sortBy)
    //     renderItems = sorted
    //     //setItems([...sorted])
    // }, [sortBy, filteredItems])

    // useEffect(() => {
    //     console.log('useeffect 3')
    //     if (filterBy !== null) {
    //         const filtered = Filter(items, filterBy[0], filterBy[1])
    //         console.log(filtered)
    //         setFilteredItems([...filtered])
    //     }
    // }, [filterBy])

    // const fetchItems = async () => { //sort alphabeticlly here?
    //     const data = await fetch('http://localhost:3500/items.json')
    //     const fetchedItems = await data.json()
    //     fetchedItems.items.map(item => item.uniqueId = (item.brand + item.title + item.format + item.price).replace(/\s/g, ''))
    //     setItems(fetchedItems.items.filter((item) => item.brand !== " "))
    // }

    const transformLink = (str) => {
        str = str.replace(/\s+/g, '-').toLowerCase();
        return str
    }

    // const setSortOption = (value) => {
    //     console.log(value)
    //     setSortBy(value)
    // }

    // const setFilterOption = (array) => {
    //     console.log(array)
    //     setFilterBy([...array])
    // }
    return (
        <div className='page shop'>
            <Options 
                cats={props.cats}
                setSortOption={props.setSortOption}
                setFilterOption={props.setFilterOption}
            />
            { props.items.length > 0
            ? <div className="items-grid">
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
                                <span className="item-detail">{item.type.toLowerCase()}</span>
                            </div>
                            <p className="item-price">€{Number(item.price).toFixed(2)}</p>
                        </div>
                        </Link>
                    </div>
                        )}
            </div>
            : 'loading.........' }
        </div>
    )
}

export default Shop;