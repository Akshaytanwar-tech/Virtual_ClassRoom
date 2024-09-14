import React, { useEffect, useState } from 'react';
import { Container, ListGroup, ListGroupItem } from 'react-bootstrap';
import { useParams, Link } from 'react-router-dom';
import LectureList from './LectureList';

const SessionList = () => {
  const { id } = useParams();
  const [sessions, setSessions] = useState([]);

  useEffect(() => {
    // Fetch sessions for a specific unit
    fetch(`/api/sessions?unitId=${id}`)
      .then(response => response.json())
      .then(data => setSessions(data));
  }, [id]);

  return (
    <Container className="mt-4">
      <h3>Sessions</h3>
      <ListGroup>
        {sessions.map(session => (
          <ListGroupItem key={session._id}>
            <Link to={`/sessions/${session._id}`}>{session.title}</Link>
          </ListGroupItem>
        ))}
      </ListGroup>
      <LectureList sessionId={id} />
    </Container>
  );
};

export default SessionList;
