import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom'
import './SearchBar.css'

const SearchBar = (props) => {

    const [userInput, setUserInput] = useState('')
    const [searchValue, setSearchValue] = useState('')
    const [active, setActive] = useState(false)

    const searchField = useRef()
    const stringifyItems = props.items.map((item, i) => {
        return {string: (item.brand + ' ' + item.title).toLowerCase(),
                index: i,
                uniqueId: item.uniqueId}
        })

    const searchItems = (array, search) => {
        if (search !== '') {
            const filtered = array.filter((item) => item.string.includes(search.toLowerCase()))
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
        searchField.current.value = ''
        setTimeout(() => { setSearchValue('')}, 500)
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

        <div className={active && searchValue !== '' ? "search-results active" : "search-results"}>
            <ul className="search-results-list">

                {filteredItems.length > 0  ? 
                filteredItems.map((item) => 
                <Link to={`/shop/item/${item.format}/${transformLink(item.title)}`}>
                    <div className="search-results-item">
                        <div className="search-title">
                            <h3>{item.brand}</h3>
                            <h4>{item.title}</h4>
                        </div>
                        <div className="search-details">
                            <p className="search-format">format: {item.format}</p>
                            <p>{item.type.toLowerCase()}</p>
                            <p>{item.iso} iso</p>
                        </div>
                    </div>
                </Link>)
                : null}

            </ul>
        </div>
        </>
    )
}

export default SearchBar;