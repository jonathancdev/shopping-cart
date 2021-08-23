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
import Sort from './components/Utilities/Sort'
import Filter from './components/Utilities/Filter'

const Routes = () => {


    const [sortBy, setSortBy] = useState(null)
    const [filterBy, setFilterBy] = useState(null)

    useEffect(() => {
        fetchCats();
        fetchItems()
    }, [sortBy, filterBy])

    const [showMenu, setShowMenu] = useState(false)

    const [cats, setCats] = useState([])
    const [items, setItems] = useState([])


    const [activeMenuItem, setActiveMenuItem] = useState('null')

    const [shoppingCart, setShoppingCart] = useState([])

    const fetchCats = async () => {
        const data = await fetch('http://localhost:3500/categories.json')
        let cats = await data.json()
        setCats(cats.categories[0])
    }
    const fetchItems = async () => {
        const data = await fetch('http://localhost:3500/items.json')
        const obj = await data.json()
        let items = obj.items.filter((item) => item.brand !== " ")
        // items.items.sort(function(a,b) {
        //     const itemA = a.brand.toUpperCase()
        //     const itemB = b.brand.toUpperCase()
        //     return (itemA < itemB) ? -1 : (itemA > itemB) ? 1 : 0;
        // })
        //items = Sort(items, sortBy)
        sortBy !== null ? Sort(items, sortBy) : Sort(items, 'brandasc')
        filterBy !== null ? items = Filter(items, filterBy[0], filterBy[1]) : console.log('null')
        items.map(item => item.uniqueId = (item.brand + item.title + item.format + item.price).replace(/\s/g, ''))
        setItems(items)
    }

    //sort & filter functions to pass through to Options (shop and category)
    const setSortOption = (value) => {
        setSortBy(value)
    }
    const setFilterOption = (array) => {
        if (array !== null) {
        setFilterBy([...array])
        } else {
            setFilterBy(array)
        } 
    }

    //shopping cart functions
    const addToCart = (obj) => {
        console.log('add to cart')
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
    const decrementItem = (obj) => {
        const prev = shoppingCart
        const findId = prev.find(item => item.cartId === obj.cartId)
        const index = prev.indexOf(findId)
        if (obj.quantity > 1) {
            prev[index].decrement()
            setShoppingCart([...prev])
        } else if (obj.quantity <= 1) {
            prev.splice(index, 1)
            setShoppingCart([...prev])
        }
    }
    const checkObj = (obj) => {
        const cart = shoppingCart
        const idList = cart.map((item) => item.cartId)
        return idList.includes(obj.cartId)
    }
    //menu functions
    const onOpen = (item) => {
        setActiveMenuItem(item)
    }
    const closeActiveMenu = () => {
        setActiveMenuItem(null)
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
                        <Shop {...props} 
                            items={items} 
                            cats={cats} 
                            setSortOption={setSortOption}
                            setFilterOption={setFilterOption}
                            addToCart={addToCart}
                            />
                    )}
                />
                <Route path='/shop/category/:category/:subcategory' 
                    render={(props) => (
                        <Category {...props} 
                            items={items} 
                            cats={cats} 
                            setSortOption={setSortOption}
                            setFilterOption={setFilterOption}
                            addToCart={addToCart}
                            />
                    )}
                />
                <Route exact path='/shop/item/:format/:title' 
                render={(props) => (
                    <Item {...props} items={items} addToCart={addToCart}/>
                )}
                />

                <Route path='/cart' 
                render={(props) => (
                    <Cart {...props} addToCart={addToCart} decrementItem={decrementItem} shoppingCart={shoppingCart}/>
                )}
                />
            </Switch>
        </BrowserRouter>
    ) 
}

export default Routes;