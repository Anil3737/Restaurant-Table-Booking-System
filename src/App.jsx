import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';
import './styles/styles.css';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Login from './pages/Login';
import Register from './pages/Register';
import About from './pages/About';
import Admin from './pages/Admin';
import Tables from './pages/Tables';
import Menu from './pages/Menu';
import UserDashboard from './pages/UserDashboard';

/**
 * Main Application Component
 * 
 * This component sets up the routing for the entire website using React Router.
 * Each route corresponds to a page based on the original HTML files.
 */
function App() {
  return (
    <Router>
      <div className="App">
        {/* The Navbar is persistent across all pages */}
        <Navbar />

        {/* Routing logic for page navigation */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/about" element={<About />} />
          <Route path="/admin" element={<Admin />} />
          <Route path="/tables" element={<Tables />} />
          <Route path="/menu" element={<Menu />} />
          <Route path="/dashboard" element={<UserDashboard />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
