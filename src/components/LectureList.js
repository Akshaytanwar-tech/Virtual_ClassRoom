import React, { useEffect, useState } from 'react';
import { ListGroup, ListGroupItem } from 'react-bootstrap';
import { useParams, Link } from 'react-router-dom';

const LectureList = () => {
  const { sessionId } = useParams();
  const [lectures, setLectures] = useState([]);

  useEffect(() => {
    // Fetch lectures for a specific session
    fetch(`/api/lectures?sessionId=${sessionId}`)
      .then(response => response.json())
      .then(data => setLectures(data));
  }, [sessionId]);

  return (
    <ListGroup>
      {lectures.map(lecture => (
        <ListGroupItem key={lecture._id}>
          <Link to={`/lectures/${lecture._id}`}>{lecture.title}</Link>
        </ListGroupItem>
      ))}
    </ListGroup>
  );
};

export default LectureList;
