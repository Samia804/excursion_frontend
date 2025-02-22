import React from 'react';
import { Container, Typography, TextField, Button, List, ListItem, ListItemText } from '@mui/material';

function Reviews() {
  const reviews = [
    { id: 1, text: 'Amazing trip!', user: 'John Doe' },
    { id: 2, text: 'Highly recommended!', user: 'Jane Smith' },
  ];

  return (
    <Container>
      <Typography variant="h4" gutterBottom>
        Reviews
      </Typography>
      <List>
        {reviews.map(review => (
          <ListItem key={review.id}>
            <ListItemText primary={review.text} secondary={review.user} />
          </ListItem>
        ))}
      </List>
      <TextField fullWidth label="Write a review" margin="normal" multiline rows={4} />
      <Button variant="contained" color="primary">
        Submit Review
      </Button>
    </Container>
  );
}

export default Reviews;