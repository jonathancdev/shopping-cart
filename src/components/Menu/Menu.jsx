import React from 'react';
import { Link } from 'react-router-dom';
import MenuItem from './MenuItem'

const Menu = ( {cats, activeMenuItem, menuActive, hideMenu, onOpen} ) => {

    const catKeys = Object.keys(cats)

    return (
        <div className={!menuActive ? 'menu' : 'menu open'}>

            {catKeys.map((cat, i) =>
            <>
                <MenuItem 
                    key={i} 
                    cat={cat} 
                    cats={cats} 
                    hideMenu={hideMenu} 
                    activeMenuItem={activeMenuItem} 
                    onOpen={onOpen}
                />
            </>
                )}

            <Link onClick={hideMenu} to='/shop' className="menu__item menu__link">
                <button className="btn btn--menu">
                    shop all film
                </button>
            </Link>

        </div>
    )
}

export default Menu;