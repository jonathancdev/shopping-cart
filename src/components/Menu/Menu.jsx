import React, { useState, useEffect } from 'react';
import {Link} from 'react-router-dom';
import './Menu.css'
import MenuItem from './MenuItem'

const Menu = (props) => {

    const cats = Object.keys(props.cats)
 
    return (
        <div className={props.showMenu ? 'menu open' : 'menu'}>
            <div className="menu-wrapper">

                {cats.map((cat, i) =>
                <div className='menu-cat' key={i}>
                    <MenuItem cat={cat} cats={props.cats} hideMenu={props.hideMenu}/>
                </div>
                    )}

                <Link onClick={props.hideMenu} to='/shop'>
                    <div className="menu-cat">
                        <h4>browse all film</h4>
                    </div>
                </Link>
            </div>
        </div>
    )
}

export default Menu;


            //    {/* <Link onClick={props.hideMenu} to={`/shop/category/${cat.replace(/\s+|'/g, '-')}`}> */}
            //    <Link onClick={props.hideMenu} to={`/shop/category/${cat[0]}`}>
            //     <h4>{cat}</h4>
            //     </Link>