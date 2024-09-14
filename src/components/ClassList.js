import React, { useEffect, useState } from 'react';
import { Container, ListGroup, ListGroupItem } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const ClassList = () => {
  const [classes, setClasses] = useState([]);

  useEffect(() => {
    // Fetch classes from the API
    fetch('/api/classes')
      .then(response => response.json())
      .then(data => setClasses(data));
  }, []);

  return (
    <Container className="mt-4">
      <h2>Classes</h2>
      <ListGroup>
        {classes.map(cls => (
          <ListGroupItem key={cls._id}>
            <Link to={`/classes/${cls._id}`}>{cls.name}</Link>
          </ListGroupItem>
        ))}
      </ListGroup>
    </Container>
  );
};

export default ClassList;
