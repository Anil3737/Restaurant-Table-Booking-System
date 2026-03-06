import React from 'react';

/**
 * About Component
 * 
 * Migrated from wcu_responsive.html.
 * Showcases why choosing this restaurant using Bootstrap grid and custom cards.
 */
const About = () => {
    return (
        <div className="wcu_section pt-5 pb-5">
            <div className="container">
                <div className="row">
                    {/* Header Section */}
                    <div className="col-12">
                        <h1 className="wcu_head">Why Choose US</h1>
                        <p className="wcu_discription">
                            We are giving the customer priority first what they are excepting for us and also comfortable
                        </p>
                    </div>

                    {/* Service Cards */}
                    <div className="col-12 col-md-4 col-lg-4">
                        <div className="wcu_card1 mb-3">
                            <img
                                src="https://cdn-icons-png.freepik.com/256/11644/11644980.png?ga=GA1.1.1910768974.1722428793&semt=ais_hybrid"
                                className="wcu_image"
                                alt="Food Service"
                            />
                            <h1 className="wuc_card_head pt-3">Food Service</h1>
                            <p className="muc_discription">
                                we are preparing both organic food and classic recipes of famous food items with better taste
                            </p>
                        </div>
                    </div>

                    <div className="col-12 col-md-4 col-lg-4">
                        <div className="wcu_card1 mb-3">
                            <img
                                src="https://cdn-icons-png.freepik.com/128/2427/2427890.png"
                                className="wcu_image"
                                alt="Fresh fruits"
                            />
                            <h1 className="wuc_card_head pt-3">Fresh fruits</h1>
                            <p className="muc_discription">
                                Fresh Fruits are also available to provide for you with sufficient cost and also your preferred way like juice
                            </p>
                        </div>
                    </div>

                    <div className="col-12 col-md-4 col-lg-4">
                        <div className="wcu_card1 mb-3">
                            <img
                                src="https://cdn-icons-png.freepik.com/256/12312/12312666.png?uid=R157583499&ga=GA1.1.1910768974.1722428793&semt=ais_hybrid"
                                className="wcu_image"
                                alt="Special Offer"
                            />
                            <h1 className="wuc_card_head pt-3">Special Offer</h1>
                            <p className="muc_discription">
                                restaurant are provide the special offer on specific items above 1999/- get flat on each <span className="offers">50%-oFF</span> on the food items
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;
