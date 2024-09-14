import React from "react";
import { Container, Button } from "react-bootstrap";
import { Link } from "react-router-dom";

const Home = () => (
  <Container className="mt-4">
    
      <h1>Welcome to the Virtual Classroom</h1>
      <p>
        Explore and manage your classes, units, sessions, and lectures all in
        one place.
      </p>
      <p>
        <Button as={Link} to="/classes" variant="primary">
          View Classes
        </Button>
      </p>
  
  </Container>
);

export default Home;
