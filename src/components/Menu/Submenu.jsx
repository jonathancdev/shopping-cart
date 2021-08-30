import React from 'react';
import {Link} from 'react-router-dom';

const Submenu = ( {cat, submenuItems, hideMenu, hideSubmenu, showSubmenu} ) => {

    const handleClick = () => {
        hideMenu()
        hideSubmenu()
    }
    const transformLink = (str) => {
        return str.replace(/\s+/g, '-').toLowerCase();
    } 

    return (
        <div className={!showSubmenu ? `submenu submenu--${cat}` : `submenu open submenu--${cat}`}>

            {submenuItems.map((item, i) => 
                <Link
                    key={i}
                    className="submenu__link" 
                    onClick={handleClick} 
                    to={`/shop/category/${cat}/${transformLink(item).toLowerCase()}`} 
                    >
                        {item.toLowerCase()}
                </Link>
            )}

        </div>
    )
}

export default Submenu;