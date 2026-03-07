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
        <nav className="navbar navbar-expand-lg custom-navbar sticky-top">
            <div className="container">
                <Link className="navbar-brand" to="/">
                    <div className="brand-icon">🍽️</div>
                    <span>DineReserve</span>
                </Link>

                <button
                    className="navbar-toggler"
                    type="button"
                    data-toggle="collapse"
                    data-target="#navbarNav"
                    aria-controls="navbarNav"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                >
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarNav">
                    <div className="navbar-nav ml-auto align-items-center">
                        <NavLink className="nav-item nav-link" to="/" end>Home</NavLink>
                        <NavLink className="nav-item nav-link" to="/menu">Menu</NavLink>
                        <NavLink className="nav-item nav-link" to="/tables">Book Table</NavLink>
                        <NavLink className="nav-item nav-link nav-btn-login ml-lg-3" to="/login">Login</NavLink>
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
