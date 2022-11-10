import React from 'react'
import { NavLink } from 'react-router-dom'
import './Menulist.css'

function Menulist() {
    return (
        <div className='Menulist'>
            <ul>
                <li>
                    <NavLink to='/Home'>Home</NavLink>
                </li>
                <li>
                    <NavLink to='/Blog'>Blog</NavLink>
                </li>
                <li>
                    <NavLink to='/Contact'>Contact</NavLink>
                </li>
                <li>
                    <NavLink to='/About'>About</NavLink>
                </li>

            </ul>
        </div>
    )
}

export default Menulist
