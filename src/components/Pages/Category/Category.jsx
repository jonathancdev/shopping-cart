import React, {useState, useEffect} from 'react';
import {Link} from 'react-router-dom';
import './Category.css'
import Options from '../../Options/Options'
import ItemPreview from '../../ItemPreview'


const Category = (props) => {

    useEffect(() => { //set filter and sort to original values when unmounted
        console.log('mount')
        return () => {
            console.log('unmount')
          props.setSortOption(null)
          props.setFilterOption(null)
        };
      }, []);

    const [items, setItems] = useState([])

    const parse = (param) => {
        if (param === "brands") {
            const parsed = "brand"
            return parsed
        } else if (param === "color") {
            const parsed = "type"
            return parsed
        } else if (param === "black-and-white") {
            const parsed = "black and white"
            return parsed
        } 
        else if (param === "color-negative") {
            const parsed = "color negative"
            return parsed
        }  
        else if (param === "color-all") {
            const parsed = ['color negative', 'slide']
            return parsed
        } else {
            return param
        }
    }

    const category = parse(props.match.params.category)
    const subcategory = parse(props.match.params.subcategory)

    const filterItems = () => {
        const itemCat = category
        const itemSub = subcategory
        if (typeof itemSub !== 'object') {
            const filtered = props.items.filter(item => item[itemCat].toLowerCase() === itemSub)
            return filtered
        } else {
            const filtered = props.items.filter(item => (item[itemCat].toLowerCase() === itemSub[0] || item[itemCat].toLowerCase() === itemSub[1]))
            return filtered
        }
    }

    const catItems = filterItems()
    

    console.log(catItems)
    return (
        
        <div className='page category'>
            <Options 
                cats={props.cats}
                setSortOption={props.setSortOption}
                setFilterOption={props.setFilterOption}
                >
                <div className="shop-path">
                shop / {category != 'type' ? category : 'color'} / {typeof subcategory === 'string' ? subcategory : 'color & slide'}
                </div>
            </Options>

            <div className="items-grid">
                {catItems.length > 0
                ?  <> {catItems.map(item =>
                    <ItemPreview
                    item={item}
                    addToCart={props.addToCart}
                />
                        )}
                </>: 'no items match' }
            </div>
        </div>
    )
}

export default Category;