import React from 'react'
import { Settings } from '../assets/svgs'
import { NavLink } from 'react-router-dom'
const Header = () => {
    return (
        <>
            <div className="container p-0">
                <div className="todo-header">
                    <h1>TO-DO</h1>
                    <NavLink >
                        <img src={Settings} alt="" />
                    </NavLink>
                </div>
            </div>
        </>
    )
}

export default Header