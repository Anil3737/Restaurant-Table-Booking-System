import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import '../styles/pages/Login.css';

/**
 * Premium Login Component
 * 
 * Features a split-screen design:
 * - Left Panel: Marketing highlights and feature cards
 * - Right Panel: Interactive login form with tabbed navigation
 * 
 * This implementation strictly follows the provided design aesthetic.
 */
const Login = () => {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState('login');
  const [showPassword, setShowPassword] = useState(false);

  // Common navigation handler
  const handleLogin = (e) => {
    e.preventDefault();
    // Simulate login success - in real apps, this would call an API
    navigate('/');
  };

  return (
    <div className="login-page-wrapper">
      {/* Header: Logo and Help Center */}
      <header className="login-header">
        <div className="navbar-brand">
          <div className="brand-icon">🍽️</div>
          <span>TableReserve</span>
        </div>
        <button className="btn-primary" style={{ padding: '8px 20px', fontSize: '0.9rem' }}>
          Help Center
        </button>
      </header>

      <main className="login-card-container">
        <div className="login-split-card">
          {/* Left Panel: Feature Highlights */}
          <div className="login-left-panel">
            <h1>Book your perfect <br /> table in seconds.</h1>
            <p>Join thousands of foodies discovering the best dining experiences.</p>

            <div className="feature-cards pt-4">
              <div className="feature-box">
                <div className="feature-icon">🍴</div>
                <div className="feature-info">
                  <h4>1,200+ Restaurants</h4>
                  <span>Across the finest cities</span>
                </div>
              </div>

              <div className="feature-box">
                <div className="feature-icon">✅</div>
                <div className="feature-info">
                  <h4>Instant Confirmation</h4>
                  <span>No waiting, just dining</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Panel: Form Section */}
          <div className="login-right-panel">
            <div className="mb-4">
              <h2 style={{ fontWeight: 800 }}>Welcome Back</h2>
              <p className="text-muted">Please enter your details to continue.</p>
            </div>

            {/* Tabs for Login / Register */}
            <div className="login-tabs">
              <button
                className={`tab-btn ${activeTab === 'login' ? 'active' : ''}`}
                onClick={() => setActiveTab('login')}
              >
                Login
              </button>
              <button
                className={`tab-btn ${activeTab === 'register' ? 'active' : ''}`}
                onClick={() => setActiveTab('register')}
              >
                Register
              </button>
            </div>

            {/* Form Body */}
            <form onSubmit={handleLogin}>
              <div className="login-form-group">
                <label className="login-label">Email Address</label>
                <div className="input-with-icon">
                  <span className="input-icon">✉️</span>
                  <input type="email" placeholder="name@company.com" className="login-input" required />
                </div>
              </div>

              <div className="login-form-group">
                <div className="d-flex justify-content-between align-items-center mb-2">
                  <label className="login-label mb-0">Password</label>
                  <a href="#" style={{ fontSize: '0.8rem', color: 'var(--primary)', fontWeight: 700, textDecoration: 'none' }}>
                    Forgot password?
                  </a>
                </div>
                <div className="input-with-icon">
                  <span className="input-icon">🔒</span>
                  <input
                    type={showPassword ? 'text' : 'password'}
                    placeholder="••••••••"
                    className="login-input"
                    required
                  />
                  <span
                    className="password-toggle"
                    onClick={() => setShowPassword(!showPassword)}
                  >
                    {showPassword ? '👁️' : '👁️‍🗨️'}
                  </span>
                </div>
              </div>

              {/* Checkbox */}
              <div className="d-flex align-items-center mb-4">
                <input type="checkbox" id="stay-signed" className="me-2" />
                <label htmlFor="stay-signed" style={{ fontSize: '0.85rem', color: '#6B7280', cursor: 'pointer' }}>
                  Stay signed in for 30 days
                </label>
              </div>

              <button type="submit" className="btn-primary w-100 py-3 d-flex align-items-center justify-content-center gap-2">
                Sign In <span>→</span>
              </button>
            </form>

            {/* Divider */}
            <div className="text-center my-4" style={{ position: 'relative' }}>
              <hr />
              <span style={{
                position: 'absolute',
                top: '50%',
                left: '50%',
                transform: 'translate(-50%, -50%)',
                background: 'white',
                padding: '0 15px',
                fontSize: '0.75rem',
                color: '#9CA3AF',
                fontWeight: 600
              }}>
                OR CONTINUE WITH
              </span>
            </div>

            {/* Social Buttons */}
            <div className="social-login-row">
              <button className="btn-social">
                <span>G</span> Google
              </button>
              <button className="btn-social">
                <span>f</span> Facebook
              </button>
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="login-footer">
        <div className="container d-flex justify-content-center gap-4">
          <span>© 2024 TableReserve Inc. All rights reserved.</span>
          <a href="#" style={{ color: 'inherit', textDecoration: 'none' }}>Privacy Policy</a>
          <a href="#" style={{ color: 'inherit', textDecoration: 'none' }}>Terms of Service</a>
        </div>
      </footer>
    </div>
  );
};

export default Login;
