import React, {useState, useEffect} from 'react';
import {Link} from 'react-router-dom';
import Submenu from './Submenu'

const MenuItem = (props) => {

    const [showSubmenu, setShowSubmenu] = useState(false)

    const toggleSubmenu = () => setShowSubmenu(!showSubmenu);
    const hideSubmenu = () => setShowSubmenu(false)

    return (
        <div className='menu-item'>
            <button onClick={toggleSubmenu} className="menu-cat-btn">
                <h4>{props.cat}</h4>
                <i class={!showSubmenu ? "fas fa-angle-down" : "fas fa-angle-up"}></i>
            </button>

            <div className="submenu-cont">
                        <Submenu
                            subMenuItems={props.cats[props.cat]}
                            cat={props.cat}
                            hideMenu={props.hideMenu}
                            hideSubmenu={hideSubmenu}
                            showSubmenu={showSubmenu}
                        />
            </div> 
        </div>
    )
}

export default MenuItem;