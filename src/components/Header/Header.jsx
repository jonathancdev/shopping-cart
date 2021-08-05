import React from 'react';
import './Header.css'
import Nav from './Nav'

const Header = (props) => {
    return (
        <div className='header'>
            <Nav 
            hideMenu={props.hideMenu}
            toggleMenu={props.toggleMenu}
            showMenu={props.showMenu}
            />
        </div>
    )
}

export default Header;