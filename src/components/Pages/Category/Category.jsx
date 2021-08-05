import React, {useState, useEffect} from 'react';
import {Link} from 'react-router-dom';
import './Category.css';

const Category = (props) => {

    const parseCatParam = () => {
        let passed = props.match.params.cat
        if (passed.includes('-s' && '-c')) {
            passed = passed.replace('-s', '\'s')
            passed = passed.replace('-c', ' c')
        }
        return passed
    }
    const filterItems = () => {
        const category = parseCatParam()
        const filtered = props.items.filter(item => item.category === category)
        return filtered
    }
    const truncate = (str, max = 6) => {
        const array = str.trim().split(' ');
        const ellipsis = array.length > max ? '...' : '';
      
        return array.slice(0, max).join(' ') + ellipsis;
      };

    const catItems = filterItems()

    return (
        <div className='page category'>
            <div className="cat-header">
                <h1>{parseCatParam()}</h1>
                <h3>subheader thing</h3>
                <p>some text about thie description i guess</p>
            </div>

            <div className="cat-items-grid">

                {catItems.map(item => 
                    <Link className="grid-preview-link" to={`/shop/${item.id}`}>
                        <div className='cat-item-wrap' key={item.id}>
                            <div className="grid-preview-img-wrap">
                                <img src={item.image} alt="item-preview" className="grid-preview-img" />
                            </div>                            
                            <p className="grid-preview-title">{truncate(item.title)}</p>
                        </div>
                    </Link>

                    )}

            </div>
        </div>
    )
}

export default Category;