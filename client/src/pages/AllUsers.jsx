import React, { useEffect, useState } from 'react'
import Navbar from '../components/Navbar'
import axios from 'axios';

const AllUsers = () => {

  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetchUsers();
  }, []);

  const fetchUsers = async () => {
    await axios.get('http://localhost:6001/fetch-users').then(
      (response) => {
        setUsers(response.data);
      }
    );
  };

  const containerStyle = {
    padding: '20px',
    maxWidth: '1200px',
    margin: '0 auto',
    fontFamily: "'Roboto', sans-serif",
  };

  const sectionHeaderStyle = {
    fontSize: '2rem',
    marginBottom: '15px',
    color: '#333',
  };

  const userListStyle = {
    display: 'flex',
    flexDirection: 'column',
    gap: '20px',
    marginBottom: '40px',
  };

  const userCardStyle = {
    padding: '15px',
    backgroundColor: '#f9f9f9',
    borderRadius: '8px',
    boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
    fontSize: '1rem',
    color: '#333',
  };

  const userInfoStyle = {
    marginBottom: '10px',
  };

  const labelStyle = {
    fontWeight: 'bold',
  };

  return (
    <>
      <Navbar />

      <div style={containerStyle}>
        <h2 style={sectionHeaderStyle}>All Users</h2>

        <div style={userListStyle}>
          <h3 style={sectionHeaderStyle}>Customers</h3>
          {users.filter(user => user.usertype === 'customer').map((user) => {
            return (
              <div style={userCardStyle} key={user._id}>
                <p style={userInfoStyle}><span style={labelStyle}>UserId: </span>{user._id}</p>
                <p style={userInfoStyle}><span style={labelStyle}>Username: </span>{user.username}</p>
                <p style={userInfoStyle}><span style={labelStyle}>Email: </span>{user.email}</p>
              </div>
            );
          })}
        </div>

        <div style={userListStyle}>
          <h3 style={sectionHeaderStyle}>Flight Operators</h3>
          {users.filter(user => user.usertype === 'flight-operator').map((user) => {
            return (
              <div style={userCardStyle} key={user._id}>
                <p style={userInfoStyle}><span style={labelStyle}>Id: </span>{user._id}</p>
                <p style={userInfoStyle}><span style={labelStyle}>Flight Name: </span>{user.username}</p>
                <p style={userInfoStyle}><span style={labelStyle}>Email: </span>{user.email}</p>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}

export default AllUsers;
