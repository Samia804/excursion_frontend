import React, { useState } from "react";
import { Box, Typography, Avatar, Divider, Grid } from "@mui/material";
import ChatWindow from "./ChatWindow";

const messages = [
  {
    id: 1,
    name: "Marc Fisher",
    message: "Looking forward to our trip!",
    time: "2:15 PM",
    avatar: `https://mui.com/static/images/avatar/${Math.floor(Math.random() * 30) + 1}.jpg`,
  },
  {
    id: 2,
    name: "Emily Parker",
    message: "Sounds great! See you...",
    time: "Mon",
    avatar: `https://mui.com/static/images/avatar/${Math.floor(Math.random() * 30) + 1}.jpg`,
  },
  {
    id: 3,
    name: "Mountain Adventures",
    message: "Saturday works perfectly...",
    time: "Fri",
    avatar: `https://mui.com/static/images/avatar/${Math.floor(Math.random() * 30) + 1}.jpg`,
  },
  {
    id: 4,
    name: "Lisa Wong",
    message: "How are you?",
    time: "Fri",
    avatar: `https://mui.com/static/images/avatar/${Math.floor(Math.random() * 30) + 1}.jpg`,
  },
  {
    id: 5,
    name: "James Carter",
    message: "That works for me.",
    time: "Fri",
    avatar: `https://mui.com/static/images/avatar/${Math.floor(Math.random() * 30) + 1}.jpg`,
  },
  {
    id: 6,
    name: "Sarah Williams",
    message: "Looking forward to it!",
    time: "Thu",
    avatar: `https://mui.com/static/images/avatar/${Math.floor(Math.random() * 30) + 1}.jpg`,
  },
];

const Messages = () => {
  const [selectedChat, setSelectedChat] = useState(null);

  return (
    <Grid container sx={{ height: "90vh", backgroundColor: "#fff" }}>
      {/* Left: Chat List */}
      <Grid item xs={4} sx={{ borderRight: "1px solid #e0e0e0", overflowY: "auto" }}>
        <Typography variant="h5" fontWeight="bold" sx={{ p: 2 }}>
          Messages
        </Typography>
        {messages.map((msg) => (
          <Box
            key={msg.id}
            onClick={() => setSelectedChat(msg)}
            sx={{
              px: 2,
              py: 1.5,
              display: "flex",
              alignItems: "center",
              cursor: "pointer",
              "&:hover": { backgroundColor: "#f5f5f5" },
              borderBottom: "1px solid #eee",
            }}
          >
            <Avatar src={msg.avatar} alt={msg.name} sx={{ mr: 2 }} />
            <Box flex="1">
              <Typography fontWeight="600">{msg.name}</Typography>
              <Typography variant="body2" color="text.secondary" noWrap>
                {msg.message}
              </Typography>
            </Box>
            <Typography variant="caption" sx={{ ml: 1, color: "gray" }}>
              {msg.time}
            </Typography>
          </Box>
        ))}
      </Grid>

      {/* Right: Chat Window */}
      <Grid item xs={8}>
        {selectedChat ? (
          <ChatWindow user={selectedChat} />
        ) : (
          <Box
            sx={{
              height: "100%",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              color: "#777",
            }}
          >
            <Typography variant="h6">Select a conversation to start chatting</Typography>
          </Box>
        )}
      </Grid>
    </Grid>
  );
};

export default Messages;
