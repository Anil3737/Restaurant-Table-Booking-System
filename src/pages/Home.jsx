import React from 'react';
import Hero from '../components/Hero';
import FeaturedDishes from '../components/FeaturedDishes';
import Testimonials from '../components/Testimonials';
import ContactInfo from '../components/ContactInfo';
import Footer from '../components/Footer';

/**
 * Home Component - DineReserve Landing Page
 * 
 * Assembles all the major sections of the landing page:
 * - Hero: Branding and main CTA
 * - FeaturedDishes: Signature items
 * - Testimonials: Social proof
 * - ContactInfo: Location and hours
 * - Footer: Links and newsletter
 */
const Home = () => {
    return (
        <div className="home-page">
            <Hero />
            <FeaturedDishes />
            <Testimonials />
            <ContactInfo />
            <Footer />
        </div>
    );
};

export default Home;
