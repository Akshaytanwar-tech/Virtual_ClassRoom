import React, { useState } from 'react';
import { Container, Form, Button } from 'react-bootstrap';

const EnrollmentForm = () => {
  const [classId, setClassId] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle enrollment logic here
    fetch('/api/enrollments', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ class: classId })
    })
      .then(response => response.json())
      .then(data => {
        alert('Enrolled successfully!');
      });
  };

  return (
    <Container className="mt-4">
      <h3>Enroll in a Class</h3>
      <Form onSubmit={handleSubmit}>
        <Form.Group controlId="formClassId">
          <Form.Label>Class ID</Form.Label>
          <Form.Control
            type="text"
            value={classId}
            onChange={(e) => setClassId(e.target.value)}
            placeholder="Enter Class ID"
          />
        </Form.Group>
        <Button variant="primary" type="submit">Enroll</Button>
      </Form>
    </Container>
  );
};

export default EnrollmentForm;
