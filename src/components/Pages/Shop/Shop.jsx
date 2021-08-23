import React, {useState, useEffect} from 'react';
import {Link} from 'react-router-dom';
import './Shop.css';
import Options from '../../Options/Options'
import ItemPreview from '../../ItemPreview'

const Shop = (props) => {
    
    useEffect(() => { //set filter and sort to original values when unmounted
        console.log('mount')
        return () => {
            console.log('unmount')
          props.setSortOption(null)
          props.setFilterOption(null)
        };
      }, []);


    return (
        <div className='page shop'>
            <Options 
                cats={props.cats}
                setSortOption={props.setSortOption}
                setFilterOption={props.setFilterOption}
                >
                <div className="shop-path">
                shop / all film
                </div>
            </Options>

            { props.items.length > 0
            ? <div className="items-grid">
                 {props.items.map(item =>
                    <ItemPreview
                        addToCart={props.addToCart}
                        item={item}
                    />
                        )}
            </div>
            : 'loading.........' }
        </div>
    )
}

export default Shop;