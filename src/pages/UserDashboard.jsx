import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/pages/UserDashboard.css';

/**
 * User Dashboard Component
 * 
 * Provides a personalized overview for logged-in users:
 * - Quick Actions: Easy access to core features
 * - Upcoming Reservation: Prominent card showing next booking
 * - Recent Orders: Scrollable list of past culinary experiences
 * 
 * Each section is carefully styled to match the premium brand aesthetic.
 */
const UserDashboard = () => {
    // Mock user data - in a real app, this would come from a global state or API
    const user = {
        name: "John",
        profileImg: "https://api.dicebear.com/7.x/avataaars/svg?seed=John"
    };

    // Quick action configuration
    const quickActions = [
        { title: "Book Table", desc: "Reserve your spot at our best locations.", icon: "🪑", link: "/tables" },
        { title: "View Menu", desc: "Explore our seasonal and chef specials.", icon: "📖", link: "/menu" },
        { title: "My Bookings", desc: "Manage your upcoming and past visits.", icon: "🕙", link: "/history" }
    ];

    // Recent orders configuration
    const recentOrders = [
        { id: 1, name: "Grilled Salmon Salad", date: "Oct 24, 2023", method: "Takeaway", price: "$24.50", status: "DELIVERED", img: "/images/grilled_salmon.png" },
        { id: 2, name: "Margherita Pizza", date: "Oct 22, 2023", method: "Dine-in", price: "$18.00", status: "PAID", img: "/images/margherita_pizza.png" },
        { id: 3, name: "Chocolate Lava Cake", date: "Oct 18, 2023", method: "Dine-in", price: "$12.00", status: "PAID", img: "/images/beef_wellington.png" }
    ];

    return (
        <div className="dashboard-wrapper">
            {/* Header: User contextual navigation */}
            <header className="dashboard-header">
                <div className="navbar-brand">
                    <div className="brand-icon">🍽️</div>
                    <span>DineReserve</span>
                </div>
                <div className="header-actions">
                    <button className="header-icon-btn">🔔</button>
                    <button className="header-icon-btn">👤</button>
                    <img src={user.profileImg} alt="User Profile" className="user-profile-img" />
                </div>
            </header>

            <div className="dashboard-content">
                {/* Greeting Section */}
                <div className="welcome-section">
                    <h1>Welcome, {user.name}</h1>
                    <p className="text-muted">Your next culinary experience is just a click away.</p>
                </div>

                {/* Quick Actions Grid */}
                <h3 className="section-label">Quick Actions</h3>
                <div className="quick-actions-grid">
                    {quickActions.map((action, index) => (
                        <Link to={action.link} key={index} className="action-card">
                            <div className="action-icon">{action.icon}</div>
                            <h3>{action.title}</h3>
                            <p>{action.desc}</p>
                        </Link>
                    ))}
                </div>

                {/* Main Insight Section */}
                <div className="dashboard-lower-grid">
                    {/* Left: Prominent Reservation Summary */}
                    <div className="reservation-column">
                        <h3 className="section-label mt-0">Upcoming Reservation</h3>
                        <div className="reservation-card">
                            <span className="res-status">Confirmed</span>
                            <span className="res-calendar-icon">📅</span>

                            <div className="res-date-info">
                                <span style={{ opacity: 0.7, fontWeight: 700, textTransform: 'uppercase', fontSize: '0.8rem' }}>Today</span>
                                <div className="res-time-large">7:00 PM</div>
                            </div>

                            <div className="res-details-row">
                                <div className="res-detail-item">
                                    <label>Table Number</label>
                                    <span>Table 5</span>
                                </div>
                                <div className="res-detail-item text-end">
                                    <label>Guests</label>
                                    <span>2 People</span>
                                </div>
                            </div>

                            <button className="btn-dark-custom">View Details</button>
                        </div>
                    </div>

                    {/* Right: History Summary */}
                    <div className="orders-column">
                        <div className="d-flex justify-content-between align-items-center">
                            <h3 className="section-label mt-0">Recent Orders</h3>
                            <Link to="/history" className="view-all-link">View All</Link>
                        </div>

                        <div className="orders-list">
                            {recentOrders.map(order => (
                                <div key={order.id} className="order-item">
                                    <div className="d-flex align-items-center">
                                        <img src={order.img} alt={order.name} className="order-img" />
                                        <div className="order-info">
                                            <h4>{order.name}</h4>
                                            <span className="meta">{order.date} • {order.method}</span>
                                        </div>
                                    </div>
                                    <div className="order-status">
                                        <span className="order-price">{order.price}</span>
                                        <span className={`status-badge ${order.status === 'PAID' ? 'status-paid' : 'status-delivered'}`}>
                                            {order.status}
                                        </span>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>

            {/* Global Dashboard Footer */}
            <footer className="text-center mt-5 py-4 border-top" style={{ fontSize: '0.85rem', color: '#71717A' }}>
                <div className="container d-flex justify-content-center gap-4">
                    <span>© 2024 DineReserve. All culinary rights reserved.</span>
                    <a href="#" className="text-decoration-none text-muted">Privacy Policy</a>
                    <a href="#" className="text-decoration-none text-muted">Terms of Service</a>
                </div>
            </footer>
        </div>
    );
};

export default UserDashboard;
