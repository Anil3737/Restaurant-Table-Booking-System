import React from 'react';
import '../styles/components/FeaturedDishes.css';

const dishes = [
    {
        id: 1,
        name: "Truffle Risotto",
        price: "$24.00",
        description: "Creamy arborio rice infused with black truffle essence, topped with aged parmesan.",
        image: "/images/truffle_risotto.png"
    },
    {
        id: 2,
        name: "Grilled Salmon",
        price: "$28.00",
        description: "Fresh Atlantic salmon seared to perfection, served with seasonal glazed vegetables.",
        image: "/images/grilled_salmon.png"
    },
    {
        id: 3,
        name: "Beef Wellington",
        price: "$34.00",
        description: "Prime fillet wrapped in puff pastry with mushroom duxelles and prosciutto.",
        image: "/images/beef_wellington.png"
    }
];

const FeaturedDishes = () => {
    return (
        <section className="dishes-section">
            <div className="container">
                <div className="d-flex justify-content-between align-items-end mb-5">
                    <div>
                        <span className="section-tag">Our Specialties</span>
                        <h2 className="section-title mb-0">Featured Dishes</h2>
                    </div>
                    <a href="/menu" className="view-all-link">See All Menu</a>
                </div>
                <div className="row">
                    {dishes.map(dish => (
                        <div key={dish.id} className="col-md-4 mb-4">
                            <div className="dish-card">
                                <div className="dish-image-wrapper">
                                    <img src={dish.image} alt={dish.name} className="dish-img" />
                                </div>
                                <div className="dish-info">
                                    <div className="d-flex justify-content-between align-items-center mb-2">
                                        <h3 className="dish-name">{dish.name}</h3>
                                        <span className="dish-price">{dish.price}</span>
                                    </div>
                                    <p className="dish-desc">{dish.description}</p>
                                    <button className="btn-add-favorites">Add to Favorites</button>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default FeaturedDishes;
