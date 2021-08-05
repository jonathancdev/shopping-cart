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
            </button>

            {showSubmenu
            ? <div className="submenu-cont">
                        <Submenu
                            subMenuItems={props.cats[props.cat]}
                            cat={props.cat}
                            hideMenu={props.hideMenu}
                            hideSubmenu={hideSubmenu}
                        />
            </div> 
            : null}

        </div>
    )
}

export default MenuItem;