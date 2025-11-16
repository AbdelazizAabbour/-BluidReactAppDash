import React from 'react'
import {BsCart3, BsGrid1X2Fill, BsPeopleFill, BsFillGearFill}from 'react-icons/bs'
import Mode from './Mode'


function Sidebar({ openSidebarToggle, OpenSidebar }) {
    return (
        <aside id="sidebar" className={openSidebarToggle ? "sidebar-responsive" : ""}>
            <div className='sidebar-title'>
                <div className='sidebar-brand'>
                    <BsCart3 className='icon_header' /> CreoLab-Web
                </div>
                <span className='icon close_icon' onClick={OpenSidebar}>X</span>
            </div>

            <ul className='sidebar-list'>
                <li className='sidebar-list-item'>
                    <a href="#">
                        <BsGrid1X2Fill className='icon' /> Dashboard
                    </a>
                </li>
                <li className='sidebar-list-item'>
                    <a href="/profile">
                        <BsPeopleFill className='icon' /> Profile
                    </a>
                </li>
                <li className='sidebar-list-item'>
                    <a href="/setting">
                        <BsFillGearFill className='icon' /> Setting
                    </a>
                </li>
                <li className='sidebar-list-item'>
                    <Mode />
                </li>
            </ul>
          
        </aside>
    )
}

export default Sidebar