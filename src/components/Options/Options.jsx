import React from 'react';
import './Options.css'

const Options = (props) => {
    
    const cats = Object.keys(props.cats)
    
    const handleChange = (e) => {
        let cat = e.target.parentNode.getAttribute('data-cat')
        if (cat === "brands") {
            cat = "brand"
        } else if (cat === "color") {
            cat = "type"
        }
        const subcat = e.target.value.toLowerCase()
        props.setFilterOption([cat, subcat])
        //console.log(e.target.parentNode.getAttribute('data-cat'))
        //console.log(e.target.value.toLowerCase())
    }

    return (
        <div className="options-wrap">
               <div className="sort-div">
                    <p>sort by:</p>
                    <ul className="sort-list">
                        <li className="sort-option" onClick={() => props.setSortOption('priceasc')}>price asc</li>
                        <li className="sort-option" onClick={() => props.setSortOption('pricedesc')}>price desc</li>
                        <li className="sort-option" onClick={() => props.setSortOption('brandasc')}>brand a-z</li>
                        <li className="sort-option" onClick={() => props.setSortOption('branddesc')}>brand z-a</li>
                    </ul>
               </div>

               <div className="filter-div">
                    <p>filter by:</p>
                    <ul className="filter-list">
                        {cats.map((item) => 
                                            <li data-cat={item} className="filter-option">
                                            <p>
                                                {item}
                                            </p>
                                            <select onChange={handleChange} className="filter-select" >
                                                <option value="">-</option>
                                            {props.cats[item].map((x) => 
                                                <option value={x}>{x}</option>
                                            )}
                                            </select>
                                        </li>
                        )}
                    </ul>
               </div>
        </div>
    )
}

export default Options;