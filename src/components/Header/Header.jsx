import React, {useState, useEffect} from 'react';
import {Link} from 'react-router-dom'
import './_header.scss'
import logo from '../../img/logo.png'
import cartIcon from '../../img/cart.png'

const Header = ( {shoppingCart, toggleMenu, closeActiveMenu, hideMenu, menuActive} ) => {

    const [animate, setAnimate] = useState(false)

    useEffect(() => {
        setAnimate(true)
        setTimeout(() => setAnimate(false), 400)
    }, [shoppingCart])

    const cart = shoppingCart
    const cartCount = cart.reduce(
        (acc, currItem) => {
            return acc + currItem.quantity
        }, 0
    );

    const handleToggle = () => {
        toggleMenu()
        closeActiveMenu()
    }

    const closeMenu = () => {
        hideMenu()
    }

    return (
        <div className={!menuActive ? 'header' : 'header open'}>

                <div onClick={handleToggle} className={!menuActive ? 'hamburger' : 'hamburger open'}>
                    <div className="hamburger__line"></div>
                    <div className="hamburger__line"></div>
                    <div className="hamburger__line"></div>
                </div>

                <Link className="logo" onClick={closeMenu} to='/'>
                    <img className="logo__img" src={logo} alt="logo"></img>
                </Link>

                <Link className="cart-icon" to='/cart'>
                    <img className="cart-icon__img" src={cartIcon} alt="cart icon"></img>
                    <>
                        {cartCount > 0
                        ? 
                        <div className={!animate ? "cart-icon__counter" : "cart-icon__counter active"}>
                            {cartCount}
                        </div>
                        : 
                        null}
                    </>
                </Link>
        </div>
    )
}

export default Header;