import React from 'react'
import { Link } from 'react-router-dom';


const NavBar = () => {
    return (
        <div className="navbar-container">
            <div className="left-side-nav">
                <Link className="nav-links" to="/">Gods Index</Link>
                <Link className="nav-links" to="/new">Create</Link>
            </div>
            <div className="right-side-nav">

            </div>
        </div>
    )
}

export default NavBar;