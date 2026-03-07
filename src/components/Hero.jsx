import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/components/Hero.css';

const Hero = () => {
    return (
        <section className="hero-section">
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-lg-6 mb-5 mb-lg-0">
                        <div className="hero-image-wrapper">
                            <img src="/images/hero_restaurant.png" alt="Fine Dining" className="hero-img img-fluid" />
                        </div>
                    </div>
                    <div className="col-lg-6 ps-lg-5">
                        <span className="section-tag">Exquisite Dining</span>
                        <h1 className="hero-title">
                            Reserve Your <br />
                            <span className="text-primary">Table Easily</span>
                        </h1>
                        <p className="hero-description">
                            Experience fine dining without the wait. Book your preferred spot in seconds and enjoy curated culinary masterpieces.
                        </p>
                        <div className="hero-actions">
                            <Link to="/tables" className="btn-primary me-3">Book Now</Link>
                            <Link to="/menu" className="btn-outline">View Menu</Link>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;
