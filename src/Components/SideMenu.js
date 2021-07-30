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

        </div>
    )
}

export default SideMenu
