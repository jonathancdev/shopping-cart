import React, { useState, useEffect } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import './App.css'
import ScrollToTop from './components/Utilities/ScrollToTop';
import Header from './components/Header/Header';
import Menu from './components/Menu/Menu'
import Home from './components/Pages/Home/Home';
import Shop from './components/Pages/Shop/Shop';
import About from './components/Pages/About/About';
import Item from './components/Pages/Item/Item';
import Category from './components/Pages/Category/Category';

const Routes = () => {

    useEffect(() => {
        fetchCats();
        fetchItems()
    }, [])

    const [showMenu, setShowMenu] = useState(false)
    const [cats, setCats] = useState([])
    const [items, setItems] = useState([])

    const fetchCats = async () => {
        //const data = await fetch('https://fakestoreapi.com/products/categories')
        const data = await fetch('http://localhost:3500/categories.json')
        let cats = await data.json()
        console.log(cats.categories)
        setCats(cats.categories)
    }
    const fetchItems = async () => {
        const data = await fetch('http://localhost:3500/items.json')
        const items = await data.json()
        setItems(items.items)
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
            />

            <Menu cats={cats} showMenu={showMenu} hideMenu={hideMenu}/>

            <Switch>
                <Route exact path='/' 
                    component={Home}
                />
                <Route exact path='/shop' 
                    render={(props) => (
                        <Shop {...props} items={items} />
                    )}
                />
                <Route path='/shop/category/:cat' 
                    render={(props) => (
                        <Category {...props} items={items} />
                    )}
                />
                <Route exact path='/shop/:id' 
                component={Item}
                />
                <Route path='/about' 
                component={About}
                />
            </Switch>
        </BrowserRouter>
    ) 
}

export default Routes;