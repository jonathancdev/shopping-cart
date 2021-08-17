import React, {useState, useEffect} from 'react';
import './Item.css';

const Item = (props) => {

    const transformLink = (str) => {
        const conditions = ['i-', 't-', 'x-t']
        if(conditions.some((cond) => str.includes(cond))) {
            const filter = conditions.filter(cond => str.includes(cond))
            const index = str.search(filter[0])
            const match = str.slice(index, index + filter[0].length)
            const replace1 = match.replace(/-/g, '!')
            str = str.replace(filter[0], replace1)
            str = str.replace(/-/g, ' ');
            str = str.replace(/!/g, '-').toLowerCase()
            return str
        } else {
            str = str.replace(/-/g, ' ');
            return str
        }
    }

    const filter = props.items
                    .filter((item) => item.title.toLowerCase() == transformLink(props.match.params.title))
                    .filter((item) => item.format === props.match.params.format)

    const item = filter[0]

    const [added, setAdded] = useState(false)
    const [currItem, setCurrItem] = useState(item)

    useEffect(() => {

        setCurrItem(item)
    })

    const handleClick = () => {
        props.addToCart(createObject())
        itemAddedCycle()
    }

    const createObject = () => {
        const obj = {
            cartId: item.uniqueId,
            brand: item.brand,
            title: item.title,
            price: item.price,
            image: item.image,
            quantity: 1,
            increment() { this.quantity += 1},
            decrement() { this.quantity -= 1}
        }
        return obj
    }

    const itemAddedCycle = () => {
        setAdded(true)
        setTimeout(() => setAdded(false), 4000)
    }

    return (
        <div className='page item'>
            {currItem
            ?<div className='item-page-wrap'>
                <h3 className="item-page-brand">{currItem.brand.toUpperCase()}</h3>
                <h4 className="item-page-title">{item.title}</h4>
                <div className="item-page-img-wrap">
                    <img className="item-page-img" src={item.image}></img>
                </div>
                <div className="item-page-details">
                    <span className="item-page-detail">iso: {item.iso}</span>
                    <span className="item-page-detail">{item.format}</span>
                    <span className="item-page-detail">{item.type.toLowerCase()}</span>
                </div>
                <p className="item-page-desc">{item.description}</p>
                <div className="price-div">
                    <p className="item-page-price">€{Number(item.price).toFixed(2)}</p>

                    <div onClick={handleClick} className="cart-btn-div">

                        <div className={added ? "added-icon-div active" : "added-icon-div"}>
                            <div className="added-icon"><i class="far fa-check-square"></i></div>
                        </div>

                        <button className={added ? "cart-btn active" : "cart-btn"} 
                            disabled={added}
                            >
                            {added ? 'added to cart!' : 'add to cart'} 
                        </button>

                    </div>
                </div>
            </div>
            : null}
        </div>
    )
}

export default Item;