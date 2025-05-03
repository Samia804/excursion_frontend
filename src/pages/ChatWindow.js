import React from "react";
import {
  Box,
  Typography,
  Avatar,
  Divider,
  TextField,
  IconButton,
} from "@mui/material";
import SendIcon from "@mui/icons-material/Send";

const ChatWindow = ({ user }) => {
  return (
    <Box sx={{ height: "100%", display: "flex", flexDirection: "column" }}>
      {/* Header */}
      <Box sx={{ p: 2, display: "flex", alignItems: "center", borderBottom: "1px solid #e0e0e0" }}>
        <Avatar src={user.avatar} sx={{ mr: 2 }} />
        <Typography fontWeight="600">{user.name}</Typography>
      </Box>

      {/* Chat Area */}
      <Box sx={{ flex: 1, p: 2, overflowY: "auto" }}>
        <Typography variant="body2" sx={{ mb: 2 }}>
          This is the beginning of your conversation with {user.name}.
        </Typography>
      </Box>

      {/* Input Area */}
      <Divider />
      <Box sx={{ display: "flex", p: 2 }}>
        <TextField
          fullWidth
          placeholder="Type a message"
          variant="outlined"
          size="small"
        />
        <IconButton color="primary" sx={{ ml: 1 }}>
          <SendIcon />
        </IconButton>
      </Box>
    </Box>
  );
};

export default ChatWindow;
