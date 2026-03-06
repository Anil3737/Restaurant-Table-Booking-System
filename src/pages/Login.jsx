import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

/**
 * Login Component
 * 
 * Migrated from p1.html and p2.html.
 * Handles user and admin login simulation.
 */
const Login = () => {
  const navigate = useNavigate();
  const [isAdmin, setIsAdmin] = useState(false);
  const [formData, setFormData] = useState({
    username: '',
    password: ''
  });

  /**
   * Handles input changes
   */
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  /**
   * Handles login submission
   */
  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Logging in as ${isAdmin ? 'Admin' : 'User'}: ${formData.username}`);
    // Simulate successful login
    if (isAdmin) {
      navigate('/admin');
    } else {
      navigate('/');
    }
  };

  return (
    <div className="login-container d-flex justify-content-center align-items-center" style={{ minHeight: '100vh' }}>
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-12 col-md-6 col-lg-4">
            <div className="card p-4 shadow-lg border-warning" style={{ background: 'rgba(0,0,0,0.85)', color: 'gold', borderRadius: '15px' }}>
        <h2 className="text-center mb-4">{isAdmin ? 'Admin Login' : 'User Login'}</h2>
        
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="username">Username</label>
            <input 
              type="text" 
              name="username" 
              id="username" 
              className="form-control"
              value={formData.username}
              onChange={handleChange}
              required 
            />
          </div>
          
          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input 
              type="password" 
              name="password" 
              id="password" 
              className="form-control"
              value={formData.password}
              onChange={handleChange}
              required 
            />
          </div>
          
          <button type="submit" className="btn btn-warning btn-block font-weight-bold">Login</button>
        </form>
        
        <div className="text-center mt-3">
          <button 
            className="btn btn-link text-warning p-0" 
            onClick={() => setIsAdmin(!isAdmin)}
          >
            Switch to {isAdmin ? 'User' : 'Admin'} Login
          </button>
        </div>
          </div>
        </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
