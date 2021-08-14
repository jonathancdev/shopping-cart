import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom'
import './SearchBar.css'

const SearchBar = (props) => {

    const [userInput, setUserInput] = useState('')
    const [searchValue, setSearchValue] = useState(null)
    const [active, setActive] = useState(false)

    const searchField = useRef()
    const stringifyItems = props.items.map((item, i) => {
        return {string: (item.brand + ' ' + item.title).toLowerCase(),
                index: i,
                uniqueId: item.uniqueId}
        })

    const searchItems = (array, search) => {
        if (searchValue !== null && searchValue !== '') {
            const items = stringifyItems
            const filtered = items.filter((item) => item.string.includes(search.toLowerCase()))
            return filtered.map((item) => props.items[item.index])
        } else {
            return [];
        }
    }
    const filteredItems = searchItems(stringifyItems, searchValue)

    const searchListen = () => {
        setSearchValue(searchField.current.value)
    }

    const searchFocus = (e) => {
        setActive(true)
        e.target.select()
    }

    const searchBlur = () => {
        setActive(false)
    }

    const transformLink = (str) => {
        str = str.replace(/\s+/g, '-').toLowerCase();
        return str
    } 

console.log(filteredItems)


    return (
        <>
        <label></label>
        <input onFocus={searchFocus} onChange={searchListen} onBlur={searchBlur} ref={searchField} className="input-search" type="text" placeholder="search"/>
        
        <>
        {!active ?
        <i className="home-banner-search-icon fas fa-search"></i>
        : <i class="home-banner-search-icon fas fa-times"></i>
         }
        </>

        <div className={active ? "search-results active" : "search-results"}>
            <ul className="search-results-list">

                {filteredItems.length > 0  ? 
                filteredItems.map((item) => 
                <Link className="search-results-item" to={`/shop/item/${transformLink(item.title)}`}>{item.brand} {item.title}
                </Link>)
                : null}

            </ul>
        </div>
        </>
    )
}

export default SearchBar;