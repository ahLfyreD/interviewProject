import { useState } from 'react';
import { NavMenuData } from './NavMenuData'

import Logo from '../../assets/logo.svg'

import * as BsIcons from "react-icons/bs";
import { MdHeadset } from "react-icons/md";
import { IoGiftOutline } from "react-icons/io5";
import { IoIosLogOut } from "react-icons/io";
import { MdKeyboardArrowRight } from "react-icons/md";
import { NavLink } from "react-router-dom";

import './SideBar.css'



const SideBar = () => {
    const [open, setOpen] = useState(true)

    const activeLink = "active-link";
    const normalLink = "normal-link";



    return (
        <div className='navbar_container'
            style={open ? { width: 296 } : { width: 80 }}>
            <div>
                <div className='nav_header'>
                    <img src={Logo} alt="logo image" />
                    <h3 style={{ fontSize: '20px', color: '#45464E', fontWeight: 700, fontFamily: 'poppins', display: `${open ? '' : 'none'}` }}>Metrix</h3>
                    <div className="arrow"
                        style={!open ? { right: '-10px' } : { right: '10px' }}>
                        <BsIcons.BsArrowLeftCircle
                            style={!open && { transform: 'rotate(180deg)' }}
                            onClick={() => setOpen(!open)}

                        />
                    </div>
                </div>
                <div className='nav_menu'>
                    <ul>
                        {NavMenuData.map((items, index) => {
                            return (
                                <li
                                    key={index}

                                >
                                    <NavLink
                                        to={`${items.path}`}
                                        className={({ isActive }) =>
                                            isActive ? activeLink : normalLink}
                                    >
                                        <span style={{ marginRight: 20 }}>
                                            {items.icon}
                                        </span>
                                        <span style={{ display: `${open ? '' : 'none'}` }}>
                                            {items.title}
                                        </span>
                                    </NavLink>
                                </li>
                            )
                        })}
                    </ul>
                </div>
            </div>
            <div className='nav_menu' style={{ marginBottom: 10 }}>
                <div className="support_container" style={{ color: '#1C1D22', marginBottom: 10, fontSize: 14, fontWeight: 400, fontFamily: 'inter' }}>
                    <MdHeadset style={{ marginRight: 10 }} />
                    <span style={{ display: `${open ? '' : 'none'}` }}>Contact Support</span>
                </div>
                <div className="upgrade_container">
                    <div className="gift" style={{ color: '#1C1D22', marginBottom: 10, fontSize: 14, fontWeight: 400, fontFamily: 'inter' }}>
                        <IoGiftOutline style={{ marginRight: 10 }} />
                        <span style={{ display: `${open ? '' : 'none'}` }}>Free Gift Awaits You!</span>
                    </div>
                    <div className="upgrade" style={{ fontSize: 12, fontFamily: 'inter', color: '#6E7079', alignItems: 'center', display: `${open ? 'flex' : 'none'}` }}>
                        <span style={{ marginRight: 10 }}>Upgrade your account</span>
                        <MdKeyboardArrowRight />
                    </div>
                </div>
                <div className="logout_container">
                    <IoIosLogOut style={{ marginRight: 10 }} />
                    <span style={{ display: `${open ? '' : 'none'}` }}>Logout</span>
                </div>
            </div>
        </div>
    )
}

export default SideBar
