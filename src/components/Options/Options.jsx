import React, { useRef } from 'react';

const Options = ( { children, cats, setFilterOption, setSortOption} ) => {
    
    const filterUl = useRef()
    const refs = useRef([React.createRef(), React.createRef(), React.createRef(), React.createRef(),])
    const catKeys = Object.keys(cats)
    
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
        setFilterOption([cat, subcat])

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
        setSortOption(sortBy)
    }

    return (
        <div className="options">

               <div className="filter">
                    <ul ref={filterUl} className="filter__list">

                        {catKeys.map((item, i) => 
                            <li key={i} className="filter__item">

                                <label className="filter__label" for="filter-select">{item}</label>
                                {/* need div to use for data-cat */}
                                <div data-cat={item} className="filter-data">
                                    <select ref={refs.current[i]} onChange={handleChange} className="filter__select">
                                        {/* blank first option */}
                                        <option className="filter__option" value=""> </option>
                                    {cats[item].map((x) => 
                                        <option className="filter__option" value={x}>{x.toLowerCase()}</option>
                                    )}
                                    </select>
                                    <span class="focus"></span>
                                </div>

                            </li>
                        )}

                    </ul>
               </div>

               <div className="sort">
                    <h3>sort</h3>
                    <ul className="sort__list">
                        <li className="sort__item active" data-sort="priceasc" key={"priceasc"} onClick={handleClick}>
                                <i class="fas fa-arrow-up sort--arrow"></i>
                        </li>
                        <li className="sort__item" data-sort="pricedesc" key={"pricedesc"} onClick={handleClick}>
                                <i class="fas fa-arrow-down sort--arrow"></i>
                        </li>                        
                        <li className="sort__item" data-sort="brandasc" key={"brandasc"} onClick={handleClick}><i class="fas fa-sort-alpha-down sort--arrow"></i></li>
                        <li className="sort__item" data-sort="branddesc" key={"branddesc"} onClick={handleClick}><i class="fas fa-sort-alpha-down-alt sort--arrow"></i></li>
                    </ul>
               </div>
               {children}
        </div>
    )
}

export default Options;