import React from "react";
import {
  Box,
  Typography,
  Paper,
  List,
  ListItem,
  ListItemAvatar,
  Avatar,
  ListItemText,
  Divider,
} from "@mui/material";
import OperatorSidebar from "../components/OperatorSidebar";

const OperatorNotifications = () => {
  const notifications = [
    {
      user: "Ahmed R.",
      message: "left a review on your Skardu trip",
      timestamp: "2 minutes ago",
      profilePic: "", // leave empty to fallback to initials
    },
    {
      user: "Zainab Khan",
      message: "booked your Hunza Adventure trip",
      timestamp: "10 minutes ago",
      profilePic: "", // or provide URL to profile pic
    },
    {
      user: "Bilal Sheikh",
      message: "sent you a message regarding Naran tour",
      timestamp: "30 minutes ago",
      profilePic: "https://i.pravatar.cc/150?img=3",
    },
    {
      user: "Fatima Asad",
      message: "submitted a custom trip request",
      timestamp: "1 hour ago",
      profilePic: "", // fallback to initials
    },
  ];

  const getInitials = (name) => {
    const names = name.split(" ");
    return names.length >= 2
      ? names[0][0] + names[1][0]
      : names[0][0];
  };

  return (
    <Box sx={{ display: "flex" }}>
      <OperatorSidebar />
      <Box sx={{ flexGrow: 1, ml: { md: "240px" }, p: 4 }}>
        <Typography variant="h5" fontWeight="bold" sx={{ color: "#6b3b1f", mb: 3 }}>
          Notifications
        </Typography>

        <Paper elevation={3} sx={{ p: 2 }}>
          <List>
            {notifications.map((notif, index) => (
              <React.Fragment key={index}>
                <ListItem alignItems="flex-start">
                  <ListItemAvatar>
                    {notif.profilePic ? (
                      <Avatar alt={notif.user} src={notif.profilePic} />
                    ) : (
                      <Avatar sx={{ bgcolor: "#247a7e" }}>
                        {getInitials(notif.user)}
                      </Avatar>
                    )}
                  </ListItemAvatar>
                  <ListItemText
                    primary={
                      <Typography variant="subtitle1" fontWeight="medium">
                        {notif.user} {notif.message}
                      </Typography>
                    }
                    secondary={notif.timestamp}
                  />
                </ListItem>
                {index !== notifications.length - 1 && <Divider />}
              </React.Fragment>
            ))}
          </List>
        </Paper>
      </Box>
    </Box>
  );
};

export default OperatorNotifications;