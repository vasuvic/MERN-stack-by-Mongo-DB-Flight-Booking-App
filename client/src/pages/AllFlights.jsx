import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import '../styles/AllFlights.css';

const AllFlights = () => {
  const [flights, setFlights] = useState([]);
  const navigate = useNavigate();

  const fetchFlights = async () => {
    await axios.get('http://localhost:6001/fetch-flights').then(
      (response) => {
        setFlights(response.data);
        console.log(response.data)
      }
    )
  }

  useEffect(() => {
    fetchFlights();
  }, [])

  const containerStyle = {
    padding: '20px',
    maxWidth: '1200px',
    margin: '0 auto',
    fontFamily: "'Roboto', sans-serif",
  };

  const sectionHeaderStyle = {
    fontSize: '2rem',
    marginBottom: '20px',
    color: '#333',
    textAlign: 'center',
  };

  const flightListStyle = {
    display: 'flex',
    flexWrap: 'wrap',
    gap: '20px',
    justifyContent: 'space-between',
  };

  const flightCardStyle = {
    width: 'calc(33% - 20px)',
    padding: '20px',
    backgroundColor: '#f9f9f9',
    borderRadius: '10px',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
    color: '#333',
    fontSize: '1rem',
    boxSizing: 'border-box',
  };

  const flightDetailStyle = {
    marginBottom: '15px',
  };

  const labelStyle = {
    fontWeight: 'bold',
  };

  return (
    <div style={containerStyle}>
      <h1 style={sectionHeaderStyle}>All Flights</h1>

      <div style={flightListStyle}>
        {flights.map((Flight) => {
          return (
            <div style={flightCardStyle} key={Flight._id}>
              <p style={flightDetailStyle}><span style={labelStyle}>_id:</span> {Flight._id}</p>
              <p style={flightDetailStyle}><span style={labelStyle}>Flight Id:</span> {Flight.flightId}</p>
              <p style={flightDetailStyle}><span style={labelStyle}>Flight name:</span> {Flight.flightName}</p>

              <div style={{ marginBottom: '15px' }}>
                <p style={flightDetailStyle}><span style={labelStyle}>Starting station:</span> {Flight.origin}</p>
                <p style={flightDetailStyle}><span style={labelStyle}>Departure time:</span> {Flight.departureTime}</p>
              </div>

              <div style={{ marginBottom: '15px' }}>
                <p style={flightDetailStyle}><span style={labelStyle}>Destination:</span> {Flight.destination}</p>
                <p style={flightDetailStyle}><span style={labelStyle}>Arrival time:</span> {Flight.arrivalTime}</p>
              </div>

              <div style={{ marginBottom: '15px' }}>
                <p style={flightDetailStyle}><span style={labelStyle}>Base price:</span> {Flight.basePrice}</p>
                <p style={flightDetailStyle}><span style={labelStyle}>Total seats:</span> {Flight.totalSeats}</p>
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default AllFlights;
