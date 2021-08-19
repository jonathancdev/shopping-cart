import React, { useRef } from 'react';
import './Options.css'

const Options = (props) => {
    
    const filterUl = useRef()
    const refs = useRef([React.createRef(), React.createRef(), React.createRef(), React.createRef(),])
    const cats = Object.keys(props.cats)
    
    //filter select
    const handleChange = (e) => {

        //set filter arguments in routes
        let cat = e.target.parentElement.getAttribute('data-cat')
        if (cat === "brands") {
            cat = "brand"
        } else if (cat === "color") {
            cat = "type"
        }
        const subcat = e.target.value.toLowerCase()
        props.setFilterOption([cat, subcat])

        //set active and reset unselected
        refs.current.forEach((select) => select.current.className.includes('active') ? select.current.classList.remove('active') : null )
        e.target.classList.add('active')
        refs.current.forEach((select) => !select.current.className.includes('active') ? select.current.selectedIndex = 0 : null )
    }
    //sort buttons
    const handleClick = (e) => {
        const childrenArray = Array.from(e.target.parentElement.children)
        childrenArray.forEach((li) =>  li.className.includes('active') ? li.classList.remove('active') : null )
        e.target.classList.add('active')
        const sortBy = e.target.getAttribute('data-sort')
        props.setSortOption(sortBy)
    }

    return (
        <div className="options-wrap">

               <div className="filter-div">
                    <ul ref={filterUl} className="filter-list">
                        {cats.map((item, i) => 
                            <li className="filter-option">

                                <label for="filter-select">{item}</label>
                                <div data-cat={item} className="select-div">
                                    <select ref={refs.current[i]} id="filter-select" onChange={handleChange} className="filter-select" >
                                        <option value=""> </option>
                                    {props.cats[item].map((x) => 
                                        <option value={x}>{x.toLowerCase()}</option>
                                    )}
                                    </select>
                                    <span class="focus"></span>
                                </div>

                            </li>
                        )}
                    </ul>
               </div>

               <div className="sort-div">
                    <h3>sort</h3>
                    <ul className="sort-list">
                        <li className="sort-option active" data-sort="priceasc" onClick={handleClick}>
                            <div 
                            className="euro-symbol-div" 
                            >
                                <i class="fas fa-euro-sign"></i>
                                <i class="fas fa-arrow-up"></i>
                            </div>
                        </li>
                        <li className="sort-option" data-sort="pricedesc" onClick={handleClick}>
                            <div className="euro-symbol-div">
                                <i class="fas fa-euro-sign"></i>
                                <i class="fas fa-arrow-down"></i>
                            </div>
                        </li>                        
                        <li className="sort-option" data-sort="brandasc" onClick={handleClick}><i class="fas fa-sort-alpha-down"></i></li>
                        <li className="sort-option" data-sort="branddesc" onClick={handleClick}><i class="fas fa-sort-alpha-down-alt"></i></li>
                    </ul>
               </div>
        </div>
    )
}

export default Options;