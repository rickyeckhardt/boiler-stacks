import React from 'react'

import { NavLink } from 'react-router-dom'



const Navbar = () => {
    return (
        <nav>
            <ul>
                <li>
                    <NavLink to="/items">
                        Items
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/items/create">
                        Create Item
                    </NavLink>
                </li>
            </ul>
        </nav>
    );
}

export default Navbar;