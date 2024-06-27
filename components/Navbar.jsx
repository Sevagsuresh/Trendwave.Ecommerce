// src/components/Navbar.jsx
// src/components/Navbar.jsx

import React from 'react';
import { Navbar, Nav, Form, FormControl, Button } from 'react-bootstrap';
import './Navbar.css'; // Optional for additional custom styling
import 'bootstrap/dist/css/bootstrap.min.css';


const AppNavbar = () => {
  return (
    <Navbar bg="dark" variant="dark" expand="lg" className="navbar">
      <Navbar.Brand href="/">TRENDWAVE</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          <Button variant="success" href="/profile" className="mr-2">
          <span role="img" aria-label="profile">👤 Profile</span></Button>&nbsp;
          <Button variant="primary" href="/cart" className="mr-2"><span role="img" aria-label="cart">🛒 Cart</span>
          </Button>&nbsp;&nbsp;
          <Button variant="secondary" href='/login'>Login</Button>&nbsp;
          <Button variant="primary" href='/signup'>Signup</Button>&nbsp;
        </Nav>&nbsp;&nbsp;&nbsp;&nbsp;
        <Form inline className="navbar-search">
          <FormControl type="text" placeholder="Search products..." size='100px' className="mr-sm-2" />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          <Button variant="outlined">Search</Button>
        </Form>
      </Navbar.Collapse>
    </Navbar>
  );
}

export default AppNavbar;
