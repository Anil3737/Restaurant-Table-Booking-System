import React from 'react';
import '../styles/components/Testimonials.css';

const testimonials = [
    {
        id: 1,
        name: "Sarah Collins",
        role: "Food Critic",
        initials: "SC",
        text: "The easiest booking experience I've ever had. The Truffle Risotto was simply out of this world. Highly recommend DineReserve!"
    },
    {
        id: 2,
        name: "James Richardson",
        role: "Verified Diner",
        initials: "JR",
        text: "Perfect for our anniversary dinner. We got the best window seat just as requested in the booking notes. Impeccable service."
    },
    {
        id: 3,
        name: "Elena Martinez",
        role: "Local Guide",
        initials: "EM",
        text: "Love the interface! Very clean and fast. Makes planning dinner dates so much less stressful. Will definitely use it again."
    }
];

const Testimonials = () => {
    return (
        <section className="testimonials-section">
            <div className="container text-center">
                <span className="section-tag">Testimonials</span>
                <h2 className="section-title">What Our Guests Say</h2>
                <div className="row mt-5">
                    {testimonials.map(t => (
                        <div key={t.id} className="col-md-4 mb-4">
                            <div className="testimonial-card">
                                <div className="quote-icon">“</div>
                                <div className="stars">★★★★★</div>
                                <p className="testimonial-text">"{t.text}"</p>
                                <div className="user-info d-flex align-items-center justify-content-center">
                                    <div className="user-avatar">{t.initials}</div>
                                    <div className="text-start ms-3">
                                        <h4 className="user-name">{t.name}</h4>
                                        <span className="user-role">{t.role}</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Testimonials;
