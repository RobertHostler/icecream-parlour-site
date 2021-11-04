import React from 'react';
import {MenuList} from '../MenuList'
import MenuItem from '../components/MenuItem'
import '../styles/Menu.css'

function Menu(){
    return(
        <div className="menu">
            <h1 className="menuTitle"></h1>
            <div className="menuList">
                {MenuList.map( (menuItem, key) => {
                    return(
                        <MenuItem
                            key={key}
                            name={menuItem.name}
                            image={menuItem.image}
                            price={menuItem.price}
                        />
                    )
                } )}
            </div>
        </div>
    )
}

export default Menu