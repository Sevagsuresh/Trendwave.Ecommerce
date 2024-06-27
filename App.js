import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import AppNavbar from './components/Navbar';
import ProductCard from './components/ProductCard';
import './App.css'; // Optional for additional custom styling
import Signup from './components/Signup';
import { Route, Routes } from 'react-router-dom';
import Login from './components/Login';

function App() {
  return (
    <div className="App">
      <AppNavbar />
      <Routes>
        <Route path='/signup' element={<Signup/>}/>
        <Route path='/login' element={<Login/>}/>
      </Routes>
      <Container className="mt-4">
        <h2>Fashion</h2>
        <Row>
          <Col>
            <ProductCard
              title="MENS WEAR"
              description="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
              imageUrl="https://via.placeholder.com/300"
            />
          </Col>
          <Col>
            <ProductCard
              title="WOMENS WEAR"
              description="Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
              imageUrl="https://via.placeholder.com/300"
            />
          </Col>
          {/* Add more Col components for additional fashion items */}
        </Row>

        <h2 className="mt-4">Cosmetics</h2>
        <Row>
          <Col>
            <ProductCard
              title="FOUNDATION"
              description="Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
              imageUrl="https://via.placeholder.com/300"
            />
          </Col>
          <Col>
            <ProductCard
              title="LIPSTICK"
              description="Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur."
              imageUrl="https://via.placeholder.com/300"
            />
          </Col>
          {/* Add more Col components for additional cosmetic items */}
        </Row>

        <h2 className="mt-4">Shoes</h2>
        <Row>
          <Col>
            <ProductCard
              title="Shoes NIKE"
              description="Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
              imageUrl="https://via.placeholder.com/300"
            />
          </Col>
          <Col>
            <ProductCard
              title="Shoes ADDIDAS"
              description="Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt."
              imageUrl="https://via.placeholder.com/300"
            />
          </Col>
          {/* Add more Col components for additional shoe items */}
        </Row>
      </Container>
      
    </div>
  );
}

export default App;