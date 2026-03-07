import React from 'react';
import '../styles/components/ContactInfo.css';

const ContactInfo = () => {
    return (
        <section className="contact-section">
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-lg-6 mb-5 mb-lg-0">
                        <span className="section-tag">Get In Touch</span>
                        <h2 className="section-title">Contact Information</h2>

                        <div className="contact-details mt-4">
                            <div className="contact-item d-flex align-items-start mb-4">
                                <div className="contact-icon">📍</div>
                                <div>
                                    <h4 className="contact-label">Location</h4>
                                    <p className="contact-text">123 Culinary Ave, Midtown Manhattan, New York, NY 10001</p>
                                </div>
                            </div>

                            <div className="contact-item d-flex align-items-start mb-4">
                                <div className="contact-icon">📞</div>
                                <div>
                                    <h4 className="contact-label">Phone</h4>
                                    <p className="contact-text">+1 (555) 123-4567</p>
                                </div>
                            </div>

                            <div className="contact-item d-flex align-items-start mb-4">
                                <div className="contact-icon">✉️</div>
                                <div>
                                    <h4 className="contact-label">Email</h4>
                                    <p className="contact-text">reservations@dinereserve.com</p>
                                </div>
                            </div>

                            <div className="contact-item d-flex align-items-start">
                                <div className="contact-icon">🕒</div>
                                <div>
                                    <h4 className="contact-label">Operating Hours</h4>
                                    <p className="contact-text">Mon - Fri: 11am - 10pm<br />Sat-Sun: 10am - 11pm</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="col-lg-6">
                        <div className="map-wrapper">
                            <img src="/images/map_location.png" alt="Our Location" className="map-img img-fluid" />
                            <div className="map-overlay">
                                <button className="btn-primary">Find Us Here</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ContactInfo;
