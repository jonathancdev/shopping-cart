import React, { useState, useEffect } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import './App.css'
import ScrollToTop from './components/Utilities/ScrollToTop';
import Header from './components/Header/Header';
import Menu from './components/Menu/Menu'
import Home from './components/Pages/Home/Home';
import Shop from './components/Pages/Shop/Shop';
import Item from './components/Pages/Item/Item';
import Category from './components/Pages/Category/Category';
import Cart from './components/Pages/Cart/Cart';

const Routes = () => {

    useEffect(() => {
        fetchCats();
        fetchItems()
    }, [])

    const [showMenu, setShowMenu] = useState(false)
    const [cats, setCats] = useState([])
    const [items, setItems] = useState([])
    const [activeMenuItem, setActiveMenuItem] = useState('null')
    const [shoppingCart, setShoppingCart] = useState([])

    const onOpen = (item) => {
        setActiveMenuItem(item)
    }
    const closeActiveMenu = () => {
        setActiveMenuItem(null)
    }

    const fetchCats = async () => {
        const data = await fetch('http://localhost:3500/categories.json')
        let cats = await data.json()
        setCats(cats.categories[0])
    }
    const fetchItems = async () => {
        const data = await fetch('http://localhost:3500/items.json')
        const items = await data.json()
        items.items.map(item => item.uniqueId = (item.brand + item.title + item.format + item.price).replace(/\s/g, ''))
        setItems(items.items.filter((item) => item.brand !== " "))
    }
    const addToCart = (obj) => {
        const prev = shoppingCart
        const item = obj
        if (!checkObj(item)) {
            prev.push(obj)
            setShoppingCart([...prev])
        } else {
            const findId = prev.find(item => item.cartId === obj.cartId)
            const index = prev.indexOf(findId)
            prev[index].increment()
            setShoppingCart([...prev])
        }
    }
    const checkObj = (obj) => {
        const cart = shoppingCart
        const idList = cart.map((item) => item.cartId)
        return idList.includes(obj.cartId)
    }
    const toggleMenu = () => setShowMenu(!showMenu);
    const hideMenu = () => setShowMenu(false)

    return (
        <BrowserRouter>
            <ScrollToTop/>
            <Header 
            toggleMenu={toggleMenu} 
            hideMenu={hideMenu}
            showMenu={showMenu}
            closeActiveMenu={closeActiveMenu}
            shoppingCart={shoppingCart}
            />
            <Menu cats={cats} showMenu={showMenu} hideMenu={hideMenu} activeMenuItem={activeMenuItem} onOpen={onOpen}/>

            <Switch>
                <Route exact path='/' 
                    render={(props) => (
                        <Home {...props} items={items}/>
                    )}
                />
                <Route exact path='/shop' 
                    render={(props) => (
                        <Shop {...props} items={items} cats={cats} />
                    )}
                />
                <Route path='/shop/category/:category/:subcategory' 
                    render={(props) => (
                        <Category {...props} items={items} />
                    )}
                />
                <Route exact path='/shop/item/:format/:title' 
                render={(props) => (
                    <Item {...props} items={items} addToCart={addToCart}/>
                )}
                />

                <Route path='/cart' 
                render={(props) => (
                    <Cart {...props} shoppingCart={shoppingCart}/>
                )}
                />
            </Switch>
        </BrowserRouter>
    ) 
}

export default Routes;