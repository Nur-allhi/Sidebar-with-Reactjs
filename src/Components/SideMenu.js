import React from 'react'
import logo from '../assets/logo.png'


function SideMenu() {
    return (
        <div className="side-menu">
            <div className="top-section">
                <div className="logo">
                    <img src={logo} alt="logo" />
                </div>
                <div className="toggle-menu-btn">
                    <i class="bi bi-arrow-left-square-fill"></i>
                </div>
            </div>
            <div className="search-controller">
                <button className="search-btn">
                    <i class="bi bi-search"></i>
                </button>
                <input type="text" placeholder="search" />
            </div>
            <div className="divider"></div>

        </div>
    )
}

export default SideMenu
