// src/pages/Settings.js
import React from "react";
import { Box, Typography, TextField, Button } from "@mui/material";

const Settings = () => {
  return (
    <Box sx={{ px: 4, py: 6 }}>
      <Typography variant="h4" fontWeight="bold" color="#247a7e" mb={3}>
        Settings
      </Typography>
      <Box component="form" sx={{ maxWidth: 500 }}>
        <TextField label="Change Email" fullWidth sx={{ mb: 2 }} />
        <TextField label="Change Password" type="password" fullWidth sx={{ mb: 2 }} />
        <Button variant="contained" color="primary">
          Save Changes
        </Button>
      </Box>
    </Box>
  );
};

export default Settings;
