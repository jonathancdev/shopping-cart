import React, {useState, useEffect} from 'react';
import './Item.css';

const Item = ( { match }) => {
    useEffect(() => {
        fetchItem()
    }, [])

    const [item, setItem] = useState([])

    const fetchItem = async () => {
        const data = await fetch(`https://fakestoreapi.com/products/${match.params.id}`)

        const item = await data.json()
        setItem(item)

    } 

    return (
        <div className='page item'>
            <img className='item-image' src={item.image} alt={item.title}></img>
            <h2>{item.title}</h2>
            <h3>{item.price}</h3>
            <p>{item.description}</p>
        </div>
    )
}

export default Item;