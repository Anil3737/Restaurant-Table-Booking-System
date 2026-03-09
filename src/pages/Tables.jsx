import React, { useState } from 'react';
import '../styles/pages/Tables.css';

/**
 * Tables Component
 * 
 * This component implements the "LUXE DINING" reservation system.
 * It features a sidebar for selection (Date, Guests, Time) and a 
 * visual restaurant layout for table selection.
 */
const Tables = () => {
  // --- State Management ---
  // Track selected booking parameters to provide immediate visual feedback
  const [selectedDate, setSelectedDate] = useState(5);
  const [selectedGuests, setSelectedGuests] = useState('2');
  const [selectedTime, setSelectedTime] = useState('02:00 PM');
  const [selectedTable, setSelectedTable] = useState('T3');

  // --- Data Definitions ---
  // Table data matching the visual layout schema
  const tables = [
    { id: 'T1', seats: 2, status: 'available', label: 'Window View' },
    { id: 'T2', seats: 4, status: 'booked', label: 'Quiet Zone' },
    { id: 'T3', seats: 4, status: 'available', label: 'Cozy Corner' },
    { id: 'T4', seats: 2, status: 'available', label: 'Couple Spot' },
    { id: 'T5', seats: 6, status: 'available', label: 'Center Hall' },
    { id: 'T6', seats: 4, status: 'available', label: 'Next to Kitchen' },
  ];

  const times = [
    '12:00 PM', '01:00 PM', '02:00 PM',
    '06:00 PM', '07:00 PM', '08:00 PM'
  ];

  const guests = ['1', '2', '3', '4', '5+'];

  return (
    <div className="tables-page">
      <div className="container">
        {/* Header Section: Premium branding and inviting subtitle */}
        <header className="tables-header">
          <h1 className="tables-title">Reserve Your Table</h1>
          <p className="tables-subtitle">Join us for an unforgettable culinary journey.</p>
        </header>

        <div className="row">
          {/* --- Sidebar: Selection Controls --- */}
          <div className="col-lg-4">

            {/* Date Picker: Simplified calendar for demo purposes */}
            <section className="booking-section">
              <div className="section-label">
                <span>📅</span> Select Date
              </div>
              <div className="calendar-mini">
                <div className="calendar-header">
                  <button className="btn btn-link p-0 text-dark">&lt;</button>
                  <span>October 2023</span>
                  <button className="btn btn-link p-0 text-dark">&gt;</button>
                </div>
                <div className="calendar-grid">
                  {/* Weekday headers */}
                  {['S', 'M', 'T', 'W', 'T', 'F', 'S'].map(d => (
                    <div key={d} className="calendar-day-name">{d}</div>
                  ))}

                  {/* Month days: Styled to match the design grid */}
                  <div className="calendar-day-empty"></div>
                  <div className="calendar-day-empty"></div>
                  <div className="calendar-day-empty"></div>
                  <div className="calendar-day-empty"></div>
                  <div className="calendar-day-empty"></div>
                  <div className="calendar-day">1</div>
                  <div className="calendar-day">2</div>
                  <div className="calendar-day">3</div>
                  <div className="calendar-day">4</div>
                  <div className={`calendar-day ${selectedDate === 5 ? 'active' : ''}`} onClick={() => setSelectedDate(5)}>5</div>
                  <div className="calendar-day">6</div>
                  <div className="calendar-day">7</div>
                  <div className="calendar-day">8</div>
                  <div className="calendar-day">9</div>
                  <div className="calendar-day">10</div>
                </div>
              </div>
            </section>

            {/* Guest Selector: Adaptive buttons for different party sizes */}
            <section className="booking-section">
              <div className="section-label">
                <span>👥</span> Guests
              </div>
              <div className="guest-selector">
                {guests.map(g => (
                  <button
                    key={g}
                    className={`guest-btn ${selectedGuests === g ? 'active' : ''} ${g === '5+' ? 'full-width mt-2' : ''}`}
                    onClick={() => setSelectedGuests(g)}
                  >
                    {g}
                  </button>
                ))}
              </div>
            </section>

            {/* Time Selector: Grid of available slots */}
            <section className="booking-section">
              <div className="section-label">
                <span>🕒</span> Available Times
              </div>
              <div className="time-grid">
                {times.map(t => (
                  <button
                    key={t}
                    className={`time-btn ${selectedTime === t ? 'active' : ''}`}
                    onClick={() => setSelectedTime(t)}
                  >
                    {t}
                  </button>
                ))}
              </div>
            </section>
          </div>

          {/* --- Main Content: Visual Layout & Details --- */}
          <div className="col-lg-8">
            {/* Restaurant Layout: An interactive map of the floor plan */}
            <section className="layout-container mb-4">
              <div className="layout-header">
                <h3 className="m-0 font-weight-bold">Restaurant Layout</h3>
                <div className="layout-legend">
                  <div className="legend-item"><div className="legend-dot dot-selected"></div> Selected</div>
                  <div className="legend-item"><div className="legend-dot dot-available"></div> Available</div>
                  <div className="legend-item"><div className="legend-dot dot-booked"></div> Booked</div>
                </div>
              </div>

              <div className="layout-map">
                {/* Environmental labels */}
                <div className="layout-area-label label-entrance">Entrance</div>
                <div className="layout-area-label label-kitchen">Open Kitchen</div>
                <div className="main-aisle-label">Main Aisle</div>

                {/* Dynamic Table Nodes: Mapped to CSS grid positions */}
                {tables.map(table => (
                  <div
                    key={table.id}
                    data-id={table.id}
                    className={`table-node ${table.status} ${selectedTable === table.id ? 'selected' : ''}`}
                    onClick={() => table.status === 'available' && setSelectedTable(table.id)}
                  >
                    <h4>{table.id}</h4>
                    <span>{table.seats} Seats</span>
                    {selectedTable === table.id && <div className="node-status-label">SELECTED</div>}
                  </div>
                ))}
              </div>
            </section>

            {/* Table Detail Cards: Specific info for featured tables */}
            <div className="row">
              {tables.filter(t => ['T1', 'T3', 'T5'].includes(t.id)).map(table => (
                <div key={table.id} className="col-md-4 mb-3">
                  <div className="table-detail-card">
                    <div className="card-top-info">
                      <div className="table-name">Table {table.id.replace('T', '')}</div>
                      <div className="seat-badge">{table.seats} Seats</div>
                    </div>
                    <p className="table-desc">{table.label}</p>
                    <button
                      className={`btn-book ${selectedTable === table.id ? 'selected' : ''}`}
                      onClick={() => table.status === 'available' && setSelectedTable(table.id)}
                    >
                      {selectedTable === table.id ? 'Confirm Selection' : 'Book Now'}
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Footer Section: Informational and legal links */}
      <footer className="mt-5 pt-5 pb-3 border-top bg-white">
        <div className="container">
          <div className="d-flex justify-content-between align-items-center flex-wrap">
            <div className="d-flex align-items-center mb-2">
              <span className="mr-3">🗺️ 123 Culinary Ave, Gastronomy District</span>
            </div>
            <div className="mb-2">
              <a href="#" className="text-secondary mx-2">Privacy Policy</a>
              <a href="#" className="text-secondary mx-2">Terms of Service</a>
              <a href="#" className="text-secondary mx-2">Group Bookings</a>
            </div>
            <div className="text-muted">
              © {new Date().getFullYear()} Luxe Dining Restaurant Group
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Tables;
