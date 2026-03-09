import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import '../styles/components/Navbar.css';

/**
 * Navbar Component
 * 
 * This navbar has been updated with "LUXE DINING" branding to match
 * the premium reservation system requirements.
 */
const Navbar = () => {
    return (
        <nav className="navbar navbar-expand-lg custom-navbar sticky-top bg-white">
            <div className="container">
                {/* Branding: Featuring a unique icon and bold typography */}
                <Link className="navbar-brand d-flex align-items-center" to="/">
                    <div className="brand-icon mr-2" style={{ background: '#F7C331', padding: '8px', borderRadius: '8px', fontSize: '1.2rem' }}>🍴</div>
                    <span style={{ fontWeight: 800, color: '#121826', letterSpacing: '1px' }}>LUXE DINING</span>
                </Link>

                {/* Mobile Menu Toggle */}
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

                {/* Navigation Links: Highlighting the Reservations section */}
                <div className="collapse navbar-collapse" id="navbarNav">
                    <div className="navbar-nav ml-auto align-items-center">
                        <NavLink className="nav-item nav-link" to="/" end>Menu</NavLink>
                        <NavLink className="nav-item nav-link" to="/tables" style={{ borderBottom: '2px solid #F7C331', color: '#F7C331' }}>Reservations</NavLink>
                        <NavLink className="nav-item nav-link" to="/contact">Contact</NavLink>

                        {/* User Profile Avatar: Provides a premium feel */}
                        <NavLink className="nav-item nav-link ml-lg-3" to="/login">
                            <div className="user-avatar" style={{ width: '40px', height: '40px', borderRadius: '50%', background: '#eee', overflow: 'hidden', border: '2px solid #F7C331' }}>
                                <img src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png" alt="user" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                            </div>
                        </NavLink>
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;

