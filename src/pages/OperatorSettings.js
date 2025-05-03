import React, { useState } from "react";
import {
  Box,
  Typography,
  TextField,
  Button,
  Paper,
  Divider,
  Avatar,
  Dialog,
  DialogActions,
  DialogTitle,
} from "@mui/material";
import OperatorSidebar from "../components/OperatorSidebar";

const OperatorSettings = () => {
  const [logo, setLogo] = useState(null);
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");
  const [bio, setBio] = useState("");
  const [currentPassword, setCurrentPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [deleteDialogOpen, setDeleteDialogOpen] = useState(false);

  const companyEmail = "operator@excursions.com"; // Static

  const handleLogoUpload = (e) => {
    const file = e.target.files[0];
    if (file && window.confirm("Are you sure you want to change your logo?")) {
      setLogo(URL.createObjectURL(file));
    }
  };

  const handleAccountDelete = () => {
    setDeleteDialogOpen(false);
    alert("Account deletion request submitted. (Simulated)");
  };

  const handleSave = () => {
    if (!phone || !address || !bio || !currentPassword || !newPassword || !confirmPassword) {
      alert("Please fill all required fields.");
      return;
    }
    if (newPassword !== confirmPassword) {
      alert("New passwords do not match.");
      return;
    }
    alert("Changes saved successfully! (Simulated)");
  };

  return (
    <Box sx={{ display: "flex" }}>
      <OperatorSidebar />
      <Box sx={{ flexGrow: 1, ml: { md: "240px" }, p: 4 }}>
        <Typography variant="h5" fontWeight="bold" color="#6b3d20" gutterBottom>
          Operator Settings
        </Typography>
        <Divider sx={{ mb: 3 }} />

        <Paper elevation={3} sx={{ p: 3, mb: 4 }}>
          <Typography variant="h6" gutterBottom>
            Operator Logo
          </Typography>
          <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
            <Avatar src={logo} sx={{ width: 64, height: 64 }} />
            <Button variant="outlined" component="label">
              Upload Logo
              <input type="file" hidden accept="image/*" onChange={handleLogoUpload} />
            </Button>
          </Box>
        </Paper>

        <Paper elevation={3} sx={{ p: 3, mb: 4 }}>
          <Typography variant="h6" gutterBottom>
            Profile Details
          </Typography>
          <TextField
            label="Company Email"
            value={companyEmail}
            fullWidth
            margin="normal"
            InputProps={{ readOnly: true }}
          />
          <TextField
            label="Phone Number"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            fullWidth
            margin="normal"
            required
          />
          <TextField
            label="Company Address"
            value={address}
            onChange={(e) => setAddress(e.target.value)}
            fullWidth
            margin="normal"
            required
          />
          <TextField
            label="Add Bio"
            multiline
            rows={4}
            value={bio}
            onChange={(e) => setBio(e.target.value)}
            fullWidth
            margin="normal"
            required
            placeholder="Tell us about your experience, specialty, or philosophy..."
          />
        </Paper>

        <Paper elevation={3} sx={{ p: 3, mb: 4 }}>
          <Typography variant="h6" gutterBottom>
            Change Password
          </Typography>
          <TextField
            label="Current Password"
            type="password"
            value={currentPassword}
            onChange={(e) => setCurrentPassword(e.target.value)}
            fullWidth
            margin="normal"
            required
          />
          <TextField
            label="New Password"
            type="password"
            value={newPassword}
            onChange={(e) => setNewPassword(e.target.value)}
            fullWidth
            margin="normal"
            required
          />
          <TextField
            label="Confirm New Password"
            type="password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            fullWidth
            margin="normal"
            required
          />
        </Paper>

        <Box sx={{ display: "flex", justifyContent: "space-between", mt: 2 }}>
          <Button variant="contained" sx={{ backgroundColor: "#247a7e" }} onClick={handleSave}>
            Save Changes
          </Button>
          <Button
            variant="outlined"
            color="error"
            onClick={() => setDeleteDialogOpen(true)}
          >
            Delete Account
          </Button>
        </Box>

        {/* Confirm Delete Dialog */}
        <Dialog open={deleteDialogOpen} onClose={() => setDeleteDialogOpen(false)}>
          <DialogTitle>Are you sure you want to delete your account?</DialogTitle>
          <DialogActions>
            <Button onClick={() => setDeleteDialogOpen(false)}>Cancel</Button>
            <Button onClick={handleAccountDelete} color="error" variant="contained">
              Confirm Delete
            </Button>
          </DialogActions>
        </Dialog>
      </Box>
    </Box>
  );
};

export default OperatorSettings;
