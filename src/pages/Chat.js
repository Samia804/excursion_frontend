import React from 'react';
import { Container, Typography, TextField, Button, List, ListItem, ListItemText } from '@mui/material';

function Chat() {
  const messages = [
    { id: 1, text: 'Hello!', sender: 'User' },
    { id: 2, text: 'Hi there!', sender: 'Operator' },
  ];

  return (
    <Container>
      <Typography variant="h4" gutterBottom>
        Chat
      </Typography>
      <List>
        {messages.map(message => (
          <ListItem key={message.id}>
            <ListItemText primary={message.text} secondary={message.sender} />
          </ListItem>
        ))}
      </List>
      <TextField fullWidth label="Type a message" margin="normal" />
      <Button variant="contained" color="primary">
        Send
      </Button>
    </Container>
  );
}

export default Chat;