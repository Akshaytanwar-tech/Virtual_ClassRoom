import React, { useEffect, useState } from 'react';
import { Container, Button, ListGroup, ListGroupItem } from 'react-bootstrap';
import { useParams } from 'react-router-dom';
import UnitList from './UnitList';

const ClassDetail = () => {
  const { id } = useParams();
  const [classDetail, setClassDetail] = useState(null);

  useEffect(() => {
    // Fetch class details from the API
    fetch(`/api/classes/${id}`)
      .then(response => response.json())
      .then(data => setClassDetail(data));
  }, [id]);

  if (!classDetail) return <p>Loading...</p>;

  return (
    <Container className="mt-4">
      <h2>{classDetail.name}</h2>
      <p>{classDetail.description}</p>
      <h3>Units</h3>
      <UnitList classId={classDetail._id} />
      <Button href="#" className="mt-3">Enroll</Button>
    </Container>
  );
};

export default ClassDetail;
