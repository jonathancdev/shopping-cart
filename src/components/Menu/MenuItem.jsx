import React, {useState} from 'react';
import Submenu from './Submenu'

const MenuItem = ( {activeMenuItem, cat, cats, hideMenu, onOpen} ) => {

    const [showSubmenu, setShowSubmenu] = useState(false)

    const toggleSubmenu = () => setShowSubmenu(!showSubmenu);
    const hideSubmenu = () => setShowSubmenu(false)

    if (activeMenuItem !== cat && showSubmenu === true) {
            hideSubmenu()
    }

    const handleClick = () => {
        toggleSubmenu()
        onOpen(cat)
    }

    return (
        <div className='menu__item'>

            <button onClick={handleClick} className="btn btn--menu">
                {cat}
                <i class={!showSubmenu ? "fas fa-angle-down menu--arrow" : "fas fa-angle-up menu--arrow"}></i>
            </button>

            <Submenu
                submenuItems={cats[cat]}
                cat={cat}
                hideMenu={hideMenu}
                hideSubmenu={hideSubmenu}
                showSubmenu={showSubmenu}
            />

        </div>
    )
}

export default MenuItem;