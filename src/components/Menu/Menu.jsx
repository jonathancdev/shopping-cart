import React, { useState, useEffect } from 'react';
import {Link} from 'react-router-dom';
import './Menu.css'

const Menu = (props) => {

    // useEffect(() => {
    //     fetchCats();
    //     console.log('ran effect')
    // }, [])

    // const [cats, setCats] = useState([])


    // const fetchCats = async () => {
    //     const data = await fetch('https://fakestoreapi.com/products/categories')
    //     let cats = await data.json()
    //     setCats(cats)
    // } 

    return (
        <div className={props.showMenu ? 'menu open' : 'menu'}>
            <Link onClick={props.hideMenu} to='/shop'>
                <h2 className="menu-title">SHOP</h2>
            </Link>
            <div className='submenu-header'>
                <h3>CATEGORIES</h3>
            </div>
            {props.cats.map((cat, i) =>
            <div className='menu-cat' key={i}>
               {/* <Link onClick={props.hideMenu} to={`/shop/category/${cat.replace(/\s+|'/g, '-')}`}> */}
               <Link onClick={props.hideMenu} to={`/shop/category/${cat[0]}`}>
                <h4>{cat}</h4>
                </Link>
            </div>
                )}
        </div>
    )
}

export default Menu;

{/* <div className="menu-cat">Category</div>
<div className="menu-cat-children">
    <div className="menu-cat-child">Child 1</div>
    <div className="menu-cat-child">Child 2</div>
    <div className="menu-cat-child">Child 3</div>
</div> */}

// ${cat.replace(/\s+|'/g, '-')}