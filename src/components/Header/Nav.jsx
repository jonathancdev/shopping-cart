import React, {useState} from 'react';
import {Link} from 'react-router-dom'

const Nav = (props) => {

    const [menuClosed, setMenuClosed] = useState(true)

    const handleToggle = () => {
        props.toggleMenu()
    }
    const closeMenu = () => {
        props.hideMenu()
    }

    return (
        <nav className='nav-header'>

        <div onClick={handleToggle} className='menu-toggle'>
            <div className={!props.showMenu ? 'hamburger' : 'hamburger open'}>
                <span className="toggle-line"></span>
                <span className="toggle-line"></span>
                <span className="toggle-line"></span>
            </div>
        </div>


            <Link onClick={closeMenu} to='/'><h2>LOGO</h2></Link>
            <ul className='nav-links'>
                <Link onClick={closeMenu} to='/about'><li>About</li></Link>
                <Link onClick={closeMenu} to='/shop'><li>Shop</li></Link>
            </ul>
        </nav>
    )
}

export default Nav;