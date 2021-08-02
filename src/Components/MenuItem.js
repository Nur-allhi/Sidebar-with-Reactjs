import React, { useState } from 'react';

function MenuItem(props) {
    const { name, subMenus,iconClassName, to} = props;
    const [expandSubMenu, setExpandSubMenu] = useState(false)
    return (
        <li >

            <button onClick={() => setExpandSubMenu(!expandSubMenu)} className="menu-item">
                <div className="menu-icon"> <i className={iconClassName}></i> </div>
                <span> {name}</span>
            </button>
            {
                subMenus && subMenus.length > 0 ? <ul className={`sub-menu ${expandSubMenu ? "sub-menu-active" : ""}`}>
                    {
                        subMenus.map((menu, index) =>
                            <li key={index} >
                                <button className="sub-menu-items">{menu.name}</button>
                            </li>)
                    }
                </ul> : null
            }

        </li>
    )
}

export default MenuItem
