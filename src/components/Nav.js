import React from 'react';
import {Link} from 'react-router-dom';

const Nav = function (props) {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <a className="navbar-brand" href="www.northcoders.com">NC</a>
            <div className="collapse navbar-collapse" id="navbarNavDropdown">
                <ul className="navbar-nav">
                    <li className="nav-item">
                        <Link to='/' className="nav-link" >Home</Link>
                    </li>
                    <li className="nav-item">
                        <Link to='/topics' className="nav-link">Topics</Link>
                    </li>
                    <li className="nav-item">
                        <Link to='/users' className="nav-link">Users</Link>
                    </li>
                </ul>p-
            </div>
        </nav>
    );
};

export default Nav;
