import React, {useState} from 'react';
import {Link} from 'react-router-dom'
import logo from '../../img/logo.png'

const Nav = (props) => {

    const [menuClosed, setMenuClosed] = useState(true)

    const handleToggle = () => {
        props.toggleMenu()
        props.closeActiveMenu()
    }
    const closeMenu = () => {
        props.hideMenu()
    }

    return (
        <nav className={!props.showMenu ? '' : 'open'}>
            <div className="nav-header">

            <div onClick={handleToggle} className='menu-toggle'>
                <div className={!props.showMenu ? 'hamburger' : 'hamburger open'}>
                    <span className="toggle-line"></span>
                    <span className="toggle-line"></span>
                    <span className="toggle-line"></span>
                </div>
            </div>


                <Link onClick={closeMenu} to='/'>
                    <div className="logo-wrap">
                        <img className="logo" src={logo} alt="logo"></img>
                    </div>
                </Link>
                <ul className='nav-links'>
                    <Link onClick={closeMenu} to='/about'><li>About</li></Link>
                    <Link onClick={closeMenu} to='/shop'><li>Shop</li></Link>
                </ul>
            </div>
        </nav>
    )
}

export default Nav;