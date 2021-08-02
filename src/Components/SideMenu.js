import React, { useState } from 'react';
import logo from '../assets/logo.png';
import userIcon from '../assets/user.png';
import MenuItem from './MenuItem';

const menuItems = [
    { name: "Dashboard", to: "/", iconClassName: "bi bi-speedometer2" },
    {
        name: "Content", to: "/content", iconClassName: "bi bi-box",
        subMenus: [{ name: "Courses" }, { name: "Videos" }]
    },
    { name: "Blog", to: "/Blog", iconClassName: "bi bi-pencil-square" },
]

function SideMenu() {
    const [inactive, setInactive] = useState(false)

    return (
        <div className={`side-menu ${inactive ? "inactive" : ""}`}>
            <div className="top-section">
                <div className="logo">
                    <img src={logo} alt="logo" />
                </div>
                <div onClick={() => setInactive(!inactive)} className="toggle-menu-btn">
                    {
                        inactive ? <i className="bi bi-arrow-right-square-fill"></i> : <i className="bi bi-arrow-left-square-fill"></i>
                    }
                </div>
            </div>
            <div className="search-controller">
                <button className="search-btn">
                    <i className="bi bi-search"></i>
                </button>
                <input type="text" placeholder="search" />
            </div>
            <div className="divider"></div>

            <div className="main-menu">
                <ul>
                    {
                        menuItems.map((menuItem, index) =>
                            <MenuItem
                                key={index}
                                name={menuItem.name}
                                iconClassName={menuItem.iconClassName}
                                to={menuItem.to}
                                subMenus={menuItem.subMenus || []}
                            />
                        )
                    }

                    {/* <li >
                        <a className="menu-item" href="Dashboard">
                            <div className="menu-icon"> <i class="bi bi-speedometer2"></i> </div>
                            <span>Dashboard</span>
                        </a>
                    </li>
                    <MenuItem name={"content"} />
                    <li >
                        <a className="menu-item" href="Blog">
                            <div className="menu-icon"> <i class="bi bi-pencil-square"></i> </div>
                            <span>Blog</span>
                        </a>
                    </li> */}
                    {/* <li className="menu-item">
                        <div className="menu-icon"><img src={dasboardIcon} alt="" /></div>
                        Dashboard</li>
                        <li className="menu-item">
                        <div className="menu-icon"><img src={dasboardIcon} alt="" /></div>
                        Dashboard</li><li className="menu-item">
                        <div className="menu-icon"><img src={dasboardIcon} alt="" /></div>
                        Dashboard</li> */}
                </ul>
            </div>
            <div className="side-menu-footer">
                <div className="user-avatar">
                    <img src={userIcon} alt="UserImage" />
                </div>
                <div className="user-info">
                    <h5>Nur E Allhi</h5>
                    <p>noorefty1@gmail.com</p>
                </div>
            </div>
        </div>
    )
}

export default SideMenu
