import React, {useEffect} from 'react';
import Options from '../../Options/Options'
import ItemPreview from '../../ItemPreview'

const Shop = ( {cats, items, addToCart, setSortOption, setFilterOption} ) => {
    
    useEffect(() => { //set filter and sort to original values when unmounted
        return () => {
          setSortOption(null)
          setFilterOption(null)
        };
      }, []);

    return (
        <div className='page'>
            <div className="shop">

                <Options 
                    cats={cats}
                    setSortOption={setSortOption}
                    setFilterOption={setFilterOption}
                    >
                    <div className="shop-path">
                    shop / all film
                    </div>
                </Options>

                { items.length > 0
                ? 
                <div className="grid">
                    {items.map(item =>
                        <ItemPreview
                            addToCart={addToCart}
                            item={item}
                        />
                            )}
                </div>
                : 
                'loading.........' }

            </div>
        </div>
    )
}

export default Shop;