import React from 'react';
import {Link} from 'react-router-dom';

const NavBar = () => {
    return(
        <header>

        <ul>

            <li className="navBarItem">
            <Link to="/">Home</Link>
            </li>

            <li className="navBarItem">
            <Link to="/plots">Plots</Link>
            </li>

            <li className="navBarItem">
            <Link to="/knowhows">Know Hows</Link>
            </li>

            <li className="navBarItem">
            <Link to="/community">Community</Link>
            </li>

        </ul>

        </header>
    )
}

export default NavBar
