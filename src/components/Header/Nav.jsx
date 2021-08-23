import React, {useState, useEffect} from 'react';
import {Link} from 'react-router-dom'
import logo from '../../img/logo.png'
import cartIcon from '../../img/cart.png'

const Nav = (props) => {

    const [newAnimation, setNewAnimation] = useState(false)

    useEffect(() => {
        setNewAnimation(true)
        setTimeout(() => setNewAnimation(false), 400)
    }, [props.shoppingCart])

    const cart = props.shoppingCart
    const cartCount = cart.reduce(
        (acc, currItem) => {
            return acc + currItem.quantity
        }, 0
    );
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
                <Link to='/cart'>
                    <div className="cart-wrap">
                        <img className="cart" src={cartIcon} alt="cart icon"></img>
                        <>
                        {cartCount > 0
                        ? <div className={!newAnimation ? "cart-item-count" : "cart-item-count active"}>{cartCount}</div>
                        : null}
                        </>
                    </div>
                </Link>
            </div>
        </nav>
    )
}

export default Nav;