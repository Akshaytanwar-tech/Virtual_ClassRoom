import React, { useEffect, useState } from 'react';
import { Container, Form, Button, ListGroup, ListGroupItem } from 'react-bootstrap';
import { useParams } from 'react-router-dom';

const CommentSection = () => {
  const { lectureId } = useParams();
  const [comments, setComments] = useState([]);
  const [newComment, setNewComment] = useState('');

  useEffect(() => {
    // Fetch comments for a specific lecture
    fetch(`/api/comments/lecture/${lectureId}`)
      .then(response => response.json())
      .then(data => setComments(data));
  }, [lectureId]);

  const handleCommentSubmit = (e) => {
    e.preventDefault();
    // Submit new comment
    fetch('/api/comments', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ lecture: lectureId, content: newComment })
    })
      .then(response => response.json())
      .then(data => {
        setComments([...comments, data]);
        setNewComment('');
      });
  };

  return (
    <Container className="mt-4">
      <h4>Comments</h4>
      <Form onSubmit={handleCommentSubmit}>
        <Form.Group controlId="formComment">
          <Form.Control
            as="textarea"
            rows={3}
            value={newComment}
            onChange={(e) => setNewComment(e.target.value)}
          />
        </Form.Group>
        <Button variant="primary" type="submit">Submit</Button>
      </Form>
      <ListGroup className="mt-3">
        {comments.map(comment => (
          <ListGroupItem key={comment._id}>
            {comment.content}
          </ListGroupItem>
        ))}
      </ListGroup>
    </Container>
  );
};

export default CommentSection;
