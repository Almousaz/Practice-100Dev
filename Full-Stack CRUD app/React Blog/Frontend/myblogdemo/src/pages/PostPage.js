
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import { Card } from 'react-bootstrap';
import { Container } from 'react-bootstrap';

const PostPage = () => {
  const [post, setPost] = useState({
    title: '',
    author: '',
    image: '',
    content: ''
  });

  const { id } = useParams();

  useEffect(() => {
    const fetchPost = async () => {
      const res = await axios.get(`http://localhost:5858/posts/${id}`);
      setPost(res.data);
    };
    fetchPost();
  }, [id]);

  return (
    <Container className="mt-4">
      <Card>
        <div style={{ maxHeight: '500px', overflow: 'hidden' }}>
          <Card.Img className="img-fluid" variant="top" src={post.image} alt={post.title} />
        </div>
        <Card.Body>
          <Card.Title>{post.title}</Card.Title>
          <Card.Subtitle className="mb-2 text-muted">By: {post.author}</Card.Subtitle>
          <Card.Text>{post.content}</Card.Text>
        </Card.Body>
      </Card>
    </Container>
  );
};

export default PostPage;