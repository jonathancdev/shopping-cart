import React, {useState, useEffect} from 'react';
import {Link} from 'react-router-dom';

const Submenu = (props) => {


    const handleClick = () => {
        props.hideMenu()
        props.hideSubmenu()
    }
    const transformLink = (str) => {
        str = str.replace(/\s+/g, '-').toLowerCase();
        return str
    } 
    return (
        <div className={props.showSubmenu ? `submenu open ${props.cat}-submenu` : `submenu ${props.cat}-submenu`}>
            {props.subMenuItems.map((item, i) => 
                <Link className="submenu-link" onClick={handleClick} to={`/shop/category/${props.cat}/${transformLink(item).toLowerCase()}`} key={i}>
                    <h5>{item.toLowerCase()}</h5>
                </Link>
            )}
        </div>
    )
}

export default Submenu;