import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

/**
 * Register Component
 * 
 * Migrated from projectreg.html.
 * Handles user registration with client-side validation using state and regex.
 */
const Register = () => {
  const navigate = useNavigate();
  // Form state to manage input values
  const [formData, setFormData] = useState({
    username: '',
    uniq_id: '',
    email: '',
    password: '',
    phone: '',
    state: 'AP'
  });

  // Error state for validation messages
  const [errors, setErrors] = useState({});

  /**
   * Handles input changes and updates form state
   */
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  /**
   * Validates the form based on regex patterns from original JS logic
   */
  const validate = () => {
    let newErrors = {};
    const fnexpre = /^[A-Z][a-zA-Z]*$/;
    const emexpre = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    const pexpre = /^[0-9]*$/;

    if (!fnexpre.test(formData.username)) {
      newErrors.username = "Invalid name: must start with uppercase";
    }
    if (!emexpre.test(formData.email)) {
      newErrors.email = "Invalid email format";
    }
    if (!pexpre.test(formData.password)) {
      newErrors.password = "Invalid password: must be numeric";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  /**
   * Handles form submission
   */
  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      alert("Registration Successful Welcome!");
      // Simulate redirection to login
      navigate('/login');
    }
  };

  return (
    <div className="registerback d-flex justify-content-center align-items-center" style={{ minHeight: '100vh' }}>
      <div className="container-fluid">
        <div className="row justify-content-center">
          <div className="col-12 col-md-8 col-lg-5">
            <h1 className="reghead mb-4">Registration form</h1>
            <div className="formstyle shadow-lg rounded">
              <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="username">Username:</label>
              <input 
                type="text" 
                name="username" 
                id="username" 
                className="form-control"
                value={formData.username}
                onChange={handleChange}
                required 
              />
              {errors.username && <span className="error text-danger">{errors.username}</span>}
            </div>

            <div className="form-group">
              <label htmlFor="uniq_id">Unique ID (Numeric):</label>
              <input 
                type="text" 
                name="uniq_id" 
                id="uniq_id" 
                className="form-control"
                value={formData.uniq_id}
                onChange={handleChange}
                required 
              />
            </div>

            <div className="form-group">
              <label htmlFor="email">Email:</label>
              <input 
                type="email" 
                name="email" 
                id="email" 
                className="form-control"
                value={formData.email}
                onChange={handleChange}
                required 
              />
              {errors.email && <span className="error text-danger">{errors.email}</span>}
            </div>

            <div className="form-group">
              <label htmlFor="password">Password:</label>
              <input 
                type="password" 
                name="password" 
                id="password" 
                className="form-control"
                value={formData.password}
                onChange={handleChange}
                required 
              />
              {errors.password && <span className="error text-danger">{errors.password}</span>}
            </div>

            <div className="form-group">
              <label htmlFor="phone">Phone:</label>
              <input 
                type="text" 
                name="phone" 
                id="phone" 
                className="form-control"
                value={formData.phone}
                onChange={handleChange}
              />
            </div>

            <div className="form-group">
              <label htmlFor="state">State:</label>
              <select 
                name="state" 
                id="state" 
                className="form-control"
                value={formData.state}
                onChange={handleChange}
              >
                <option value="AP">Andhra Pradesh</option>
                <option value="TN">Tamil Nadu</option>
                <option value="Karnataka">Karnataka</option>
                <option value="Kerala">Kerala</option>
              </select>
            </div>

                <center className="mt-4">
                  <button type="submit" className="btn btn-warning btn-block">Submit</button>
                </center>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
