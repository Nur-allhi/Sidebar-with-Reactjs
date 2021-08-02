import React, { useState } from 'react';
import logo from '../assets/logo.png';
import userIcon from '../assets/user.png';



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
                        inactive ? <i class="bi bi-arrow-right-square-fill"></i> : <i class="bi bi-arrow-left-square-fill"></i>
                    }
                </div>
            </div>
            <div className="search-controller">
                <button className="search-btn">
                    <i class="bi bi-search"></i>
                </button>
                <input type="text" placeholder="search" />
            </div>
            <div className="divider"></div>

            <div className="main-menu">
                <ul>
                    <li >
                        <a className="menu-item" href="Dashboard">
                            <div className="menu-icon"> <i class="bi bi-speedometer2"></i> </div>
                            <span>Dashboard</span>
                        </a>
                    </li>
                    <li >
                        <a className="menu-item" href="content">
                            <div className="menu-icon"> <i class="bi bi-card-checklist"></i> </div>
                            <span> Content</span>
                        </a>
                        <ul className="sub-menu">
                            <li>
                                <a className="sub-menu-items" href="Coureses">Courses</a>
                            </li>
                            <li>
                                <a className="sub-menu-items" href="Videos">Videos</a>
                            </li>
                        </ul>

                    </li>
                    <li >
                        <a className="menu-item" href="Blog">
                            <div className="menu-icon"> <i class="bi bi-pencil-square"></i> </div>
                            <span>Blog</span>
                        </a>
                    </li>
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
