import React from 'react';
import '../styles/components/Footer.css';

const Footer = () => {
    return (
        <footer className="footer-section">
            <div className="container">
                <div className="row mb-5">
                    <div className="col-lg-4 mb-4 mb-lg-0">
                        <div className="footer-brand mb-3">
                            <div className="brand-icon">🍽️</div>
                            <span>DineReserve</span>
                        </div>
                        <p className="footer-about">
                            Connecting food lovers with the finest dining experiences. Simple, fast, and always gourmet.
                        </p>
                    </div>

                    <div className="col-lg-2 col-md-4 mb-4 mb-md-0">
                        <h4 className="footer-title">Quick Links</h4>
                        <ul className="footer-links">
                            <li><a href="/">Home</a></li>
                            <li><a href="/menu">Our Menu</a></li>
                            <li><a href="/tables">Book a Table</a></li>
                            <li><a href="/events">Private Events</a></li>
                        </ul>
                    </div>

                    <div className="col-lg-2 col-md-4 mb-4 mb-md-0">
                        <h4 className="footer-title">Support</h4>
                        <ul className="footer-links">
                            <li><a href="/help">Help Center</a></li>
                            <li><a href="/privacy">Privacy Policy</a></li>
                            <li><a href="/terms">Terms of Service</a></li>
                            <li><a href="/feedback">Feedback</a></li>
                        </ul>
                    </div>

                    <div className="col-lg-4 col-md-4">
                        <h4 className="footer-title">Join Our Newsletter</h4>
                        <p className="footer-text mb-3">Get updates on seasonal menus and special events.</p>
                        <div className="newsletter-form">
                            <input type="email" placeholder="Email address" className="form-control mb-2" />
                            <button className="btn-primary w-100">Subscribe</button>
                        </div>
                    </div>
                </div>

                <div className="footer-bottom pt-4 border-top">
                    <div className="row align-items-center">
                        <div className="col-md-6 text-center text-md-start mb-3 mb-md-0">
                            <p className="copyright mb-0">© 2024 DineReserve Systems Inc. All rights reserved.</p>
                        </div>
                        <div className="col-md-6 text-center text-md-end">
                            <div className="social-links">
                                <a href="#" className="me-3">Instagram</a>
                                <a href="#" className="me-3">Facebook</a>
                                <a href="#">Twitter</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
