import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import '../styles/components/Navbar.css';

/**
 * Navbar Component
 * 
 * Migrated from index.html navbar. 
 * Uses React Router's Link and NavLink for client-side navigation.
 */
const Navbar = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark">
            <div className="container">
                {/* Logo and Brand Link */}
                <Link className="navbar-brand" to="/">
                    <img
                        src="https://img.freepik.com/premium-photo/minimalistic-letter-r-logo-brand_1054941-10959.jpg?w=740"
                        alt="Logo"
                        width="40"
                        className="d-inline-block align-top"
                    />
                </Link>

                {/* Mobile Toggle Button */}
                <button
                    className="navbar-toggler"
                    type="button"
                    data-toggle="collapse"
                    data-target="#navbarNavAltMarkup"
                    aria-controls="navbarNavAltMarkup"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                >
                    <span className="navbar-toggler-icon"></span>
                </button>

                {/* Navigation Links */}
                <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                    <div className="navbar-nav ml-auto">
                        {/* Bootstrap 4 active class handling */}
                        <NavLink className="nav-item nav-link" to="/" end activeClassName="active">Home</NavLink>
                        <NavLink className="nav-item nav-link" to="/admin" activeClassName="active">Admin</NavLink>
                        <NavLink className="nav-item nav-link" to="/login" activeClassName="active">Login</NavLink>
                        <NavLink className="nav-item nav-link" to="/register" activeClassName="active">Register</NavLink>
                        <NavLink className="nav-item nav-link" to="/about" activeClassName="active">About</NavLink>
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
