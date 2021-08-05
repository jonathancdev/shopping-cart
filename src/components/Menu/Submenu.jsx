import React, {useState, useEffect} from 'react';
import {Link} from 'react-router-dom';

const Submenu = (props) => {


    const handleClick = () => {
        props.hideMenu()
        props.hideSubmenu()
    }

    return (
        <div className='submenu'>
            {props.subMenuItems.map((item, i) => 
                <Link onClick={handleClick} to={`/shop/category/${props.cat}/${item.toLowerCase()}`} key={i}>
                    <h5>{item.toLowerCase()}</h5>
                </Link>
            )}
        </div>
    )
}

export default Submenu;