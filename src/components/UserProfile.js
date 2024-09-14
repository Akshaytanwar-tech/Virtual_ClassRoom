import React, { useEffect, useState } from 'react';
import { Container, Form, Button } from 'react-bootstrap';

const UserProfile = () => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    // Fetch user profile
    fetch('/api/users/me')
      .then(response => response.json())
      .then(data => setUser(data));
  }, []);

  if (!user) return <p>Loading...</p>;

  return (
    <Container className="mt-4">
      <h3>My Profile</h3>
      <Form>
        <Form.Group controlId="formUserName">
          <Form.Label>Name</Form.Label>
          <Form.Control
            type="text"
            value={user.name}
            readOnly
          />
        </Form.Group>
        <Form.Group controlId="formUserEmail">
          <Form.Label>Email</Form.Label>
          <Form.Control
            type="email"
            value={user.email}
            readOnly
          />
        </Form.Group>
        <Button variant="primary">Edit Profile</Button>
      </Form>
    </Container>
  );
};

export default UserProfile;
