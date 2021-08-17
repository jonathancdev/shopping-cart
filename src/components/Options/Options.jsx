import React from 'react';
import './Options.css'

const Options = (props) => {
    
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
                <p>sort by:</p>
                <ul className="filter-list">
                    <li className="filter-option">
                        <select className="filter-select">
                            <option value=""></option>
                            <option value=""></option>
                            <option value=""></option>
                        </select>
                    </li>

                </ul>
               </div>
        </div>
    )
}

export default Options;