import React from "react";
import { Box, Typography, Button, Avatar, Grid, Paper, Divider, List, ListItem, ListItemText, ListItemIcon } from "@mui/material";
import { useNavigate } from "react-router-dom";
import CalendarTodayIcon from "@mui/icons-material/CalendarToday";
import HistoryIcon from "@mui/icons-material/History";
import AccountBalanceWalletIcon from "@mui/icons-material/AccountBalanceWallet";
import PhoneIcon from "@mui/icons-material/Phone";
import HomeIcon from "@mui/icons-material/Home";
import InfoIcon from "@mui/icons-material/Info";
import LockIcon from "@mui/icons-material/Lock";
import NotificationsIcon from "@mui/icons-material/Notifications";
import PrivacyTipIcon from "@mui/icons-material/PrivacyTip";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import DeleteIcon from "@mui/icons-material/Delete";

const Profile = () => {
  const navigate = useNavigate();

  return (
    <Box sx={{ maxWidth: 700, mx: "auto", mt: 5, p: 3 }}>
      <Paper sx={{ p: 4, borderRadius: 3 }}>
        {/* Top Profile Info */}
        <Box sx={{ display: "flex", alignItems: "center", gap: 3, mb: 3 }}>
          <Avatar
            alt="John Doe"
            src="https://i.pravatar.cc/100"
            sx={{ width: 80, height: 80 }}
          />
          <Box>
            <Typography variant="h5" fontWeight={700}>John Doe</Typography>
            <Typography variant="body2">johndoe@email.com</Typography>
          </Box>
        </Box>

        <Button
          variant="contained"
          sx={{ backgroundColor: "#155e63", mb: 3 }}
          onClick={() => navigate("/profile-edit")}
        >
          Edit Profile
        </Button>

        {/* Stat Buttons */}
        <Grid container spacing={2} mb={3}>
          <Grid item xs={4}>
            <Paper
              onClick={() => navigate("/upcoming-trips")}
              sx={{ p: 2, textAlign: "center", cursor: "pointer" }}
            >
              <CalendarTodayIcon color="primary" />
              <Typography fontSize={14}>Upcoming</Typography>
              <Typography fontSize={14}>trips</Typography>
            </Paper>
          </Grid>
          <Grid item xs={4}>
            <Paper
              onClick={() => navigate("/past-trips")}
              sx={{ p: 2, textAlign: "center", cursor: "pointer" }}
            >
              <HistoryIcon color="primary" />
              <Typography fontSize={14}>Past trips</Typography>
              <Typography fontWeight={600}>17</Typography>
            </Paper>
          </Grid>
          <Grid item xs={4}>
            <Paper
              onClick={() => navigate("/wallet")}
              sx={{ p: 2, textAlign: "center", cursor: "pointer" }}
            >
              <AccountBalanceWalletIcon color="primary" />
              <Typography fontSize={14}>Wallet</Typography>
              <Typography fontWeight={600} color="green">
                $450.00
              </Typography>
            </Paper>
          </Grid>
        </Grid>

        {/* Divider */}
        <Divider sx={{ my: 2 }} />

        {/* Personal Info */}
        <Typography variant="h6" fontWeight={600} color="#155e63" mb={1}>
          Personal Information
        </Typography>
        <List dense>
          <ListItem>
            <ListItemIcon><PhoneIcon /></ListItemIcon>
            <ListItemText primary="+1 234 567 8900" />
          </ListItem>
          <ListItem>
            <ListItemIcon><HomeIcon /></ListItemIcon>
            <ListItemText primary="123 Main Street, Anytown, USA" />
          </ListItem>
          <ListItem>
            <ListItemIcon><InfoIcon /></ListItemIcon>
            <ListItemText primary="Avid traveler and adventure seeker" />
          </ListItem>
        </List>

        {/* Divider */}
        <Divider sx={{ my: 2 }} />

        {/* Account Settings */}
        <Typography variant="h6" fontWeight={600} color="#155e63" mb={1}>
          Account Settings
        </Typography>
        <List dense>
          <ListItem button><ListItemIcon><LockIcon /></ListItemIcon><ListItemText primary="Change Password" /></ListItem>
          <ListItem button><ListItemIcon><NotificationsIcon /></ListItemIcon><ListItemText primary="Notifications" /></ListItem>
          <ListItem button><ListItemIcon><PrivacyTipIcon /></ListItemIcon><ListItemText primary="Privacy" /></ListItem>
          <ListItem button><ListItemIcon><AccountCircleIcon /></ListItemIcon><ListItemText primary="Connected Accounts" /></ListItem>
          <ListItem button><ListItemIcon><DeleteIcon /></ListItemIcon><ListItemText primary="Delete Account" /></ListItem>
        </List>
      </Paper>
    </Box>
  );
};

export default Profile;
