import React, { useState, useEffect } from 'react';
import {Link} from 'react-router-dom';
import './Menu.css'
import Submenu from './Submenu'
import MenuItem from './MenuItem'

const Menu = (props) => {

    const cats = Object.keys(props.cats)
    console.log(props.cats)
    return (
        <div className={props.showMenu ? 'menu open' : 'menu'}>
            <Link onClick={props.hideMenu} to='/shop'>
                <h2 className="menu-title">SHOP</h2>
            </Link>
            <div className='submenu-header'>
                <h3>CATEGORIES</h3>
            </div>


            {cats.map((cat, i) =>
            <div className='menu-cat' key={i}>
                <MenuItem cat={cat} cats={props.cats} hideMenu={props.hideMenu}/>
            </div>


                )}
        </div>
    )
}

export default Menu;


            //    {/* <Link onClick={props.hideMenu} to={`/shop/category/${cat.replace(/\s+|'/g, '-')}`}> */}
            //    <Link onClick={props.hideMenu} to={`/shop/category/${cat[0]}`}>
            //     <h4>{cat}</h4>
            //     </Link>