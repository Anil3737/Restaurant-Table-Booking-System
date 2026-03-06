import React, { useState } from 'react';

/**
 * Admin Component
 * 
 * Migrated from admin.html.
 * Simple dashboard for restaurant administration.
 */
const Admin = () => {
  const [activeTab, setActiveTab] = useState('bookings');

  return (
    <div className="container mt-5 pt-5" style={{ minHeight: '80vh', color: 'gold' }}>
      <h1 className="text-center mb-4">Admin Dashboard</h1>
      
      <div className="row">
        {/* Admin Sidebar/Navigation */}
        <div className="col-md-3">
          <div className="list-group">
            <button 
              className={`list-group-item list-group-item-action bg-dark text-warning ${activeTab === 'bookings' ? 'active' : ''}`}
              onClick={() => setActiveTab('bookings')}
            >
              Recent Bookings
            </button>
            <button 
              className={`list-group-item list-group-item-action bg-dark text-warning ${activeTab === 'menu' ? 'active' : ''}`}
              onClick={() => setActiveTab('menu')}
            >
              Manage Menu
            </button>
            <button 
              className={`list-group-item list-group-item-action bg-dark text-warning ${activeTab === 'users' ? 'active' : ''}`}
              onClick={() => setActiveTab('users')}
            >
              Users List
            </button>
          </div>
        </div>
        
        {/* Admin Content Area */}
        <div className="col-md-9 pt-3 pt-md-0">
          <div className="card bg-dark border-warning p-4">
            {activeTab === 'bookings' && (
              <div>
                <h3>Recent Bookings</h3>
                <table className="table table-dark table-hover mt-3">
                  <thead>
                    <tr>
                      <th>ID</th>
                      <th>Customer</th>
                      <th>Table</th>
                      <th>Status</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr><td>101</td><td>John Doe</td><td>Table 4</td><td><span className="badge badge-success">Confirmed</span></td></tr>
                    <tr><td>102</td><td>Jane Smith</td><td>Table 2</td><td><span className="badge badge-warning">Pending</span></td></tr>
                  </tbody>
                </table>
              </div>
            )}
            
            {activeTab === 'menu' && <h3>Menu Management (Coming Soon)</h3>}
            {activeTab === 'users' && <h3>Registered Users (Coming Soon)</h3>}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Admin;
