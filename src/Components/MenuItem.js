import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';

function MenuItem(props) {
    const { name, subMenus, iconClassName, to, onClick, exact } = props;
    const [expandSubMenu, setExpandSubMenu] = useState(false)
    return (
        <li onClick={onClick}>
            <NavLink exact={exact} activeClassName="selected-main-menu" to={to} onClick={() => setExpandSubMenu(!expandSubMenu)} className="menu-item">
                <div className="menu-icon"> <i className={iconClassName}></i> </div>
                <span> {name}</span>
            </NavLink >
            {
                subMenus && subMenus.length > 0 ? <ul className={`sub-menu ${expandSubMenu ? "sub-menu-active" : ""}`}>
                    {
                        subMenus.map((menu, index) =>
                            <li key={index} >
                                <NavLink exact={exact} activeClassName="selected-sub-menu" to={menu.to} className="sub-menu-items">{menu.name}</NavLink >
                            </li>)
                    }
                </ul> : null
            }

        </li>
    )
}

export default MenuItem
