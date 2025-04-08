import React, { useState } from "react";
import {
  Box,
  Button,
  Container,
  Divider,
  FormControl,
  InputLabel,
  MenuItem,
  Modal,
  Select,
  Tabs,
  Tab,
  TextField,
  Typography,
} from "@mui/material";
import mountain1 from "../assets/mountain.png";
import mountain2 from "../assets/mountain.png";

const ForgotPW = () => {
  const [tab, setTab] = useState("email");
  const [email, setEmail] = useState("");
  const [countryCode, setCountryCode] = useState("+92");
  const [phone, setPhone] = useState("");
  const [otp, setOtp] = useState("");
  const [otpOpen, setOtpOpen] = useState(false);

  const handleTabChange = (_, newValue) => {
    setTab(newValue);
  };

  const handleSendOtp = () => {
    if (/^\d{10,15}$/.test(phone)) {
      setOtpOpen(true);
    } else {
      alert("Please enter a valid phone number (10–15 digits).");
    }
  };

  const handleOtpChange = (e) => {
    const value = e.target.value.replace(/\D/g, "");
    if (value.length <= 4) setOtp(value);
  };

  const handleOtpClose = () => setOtpOpen(false);

  return (
    <Box sx={{ display: "flex", minHeight: "100vh", backgroundColor: "#f4f7f9" }}>
      {/* Left Side */}
      <Container maxWidth="sm" sx={{ mt: 5, mb: 8 }}>
        <Typography variant="h4" sx={{ fontWeight: 700, color: "#5e2e14", mb: 2 }}>
          Forgot Password?
        </Typography>
        <Divider sx={{ mb: 3 }} />

        {/* Tabs for Email / Phone */}
        <Tabs value={tab} onChange={handleTabChange} centered sx={{ mb: 3 }}>
          <Tab label="Email" value="email" />
          <Tab label="Phone" value="phone" />
        </Tabs>

        <Box sx={{ p: 4, backgroundColor: "#fcfcfc", borderRadius: 2, border: "1px solid #e0e0e0" }}>
          {/* Reset via Email */}
          {tab === "email" && (
            <>
              <Typography variant="h6" gutterBottom>
                Reset via Email
              </Typography>
              <TextField
                fullWidth
                placeholder="Warehouse-supervisor"
                label="Email Address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                margin="normal"
              />
              <Typography variant="body2" sx={{ mt: 1, color: "#555" }}>
                Click here to reset password
              </Typography>
              <Button fullWidth variant="contained" sx={{ mt: 3, backgroundColor: "#247a7e" }}>
                Reset Password
              </Button>
            </>
          )}

          {/* Reset via Phone */}
          {tab === "phone" && (
            <>
              <Typography variant="h6" gutterBottom>
                Reset via Phone Number
              </Typography>
              <Box display="flex" gap={2} mb={2}>
                <FormControl sx={{ minWidth: 100 }}>
                  <InputLabel>Code</InputLabel>
                  <Select
                    value={countryCode}
                    label="Code"
                    onChange={(e) => setCountryCode(e.target.value)}
                  >
                    <MenuItem value="+92">PK (+92)</MenuItem>
                    <MenuItem value="+1">US (+1)</MenuItem>
                    <MenuItem value="+44">UK (+44)</MenuItem>
                  </Select>
                </FormControl>
                <TextField
                  fullWidth
                  placeholder="Phone No"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value.replace(/\D/g, ""))}
                />
              </Box>
              <Button variant="contained" onClick={handleSendOtp} sx={{ mb: 2, backgroundColor: "#247a7e" }}>
                Send OTP
              </Button>

              <Button fullWidth variant="contained" sx={{ backgroundColor: "#247a7e" }}>
                Reset Password
              </Button>
            </>
          )}
        </Box>
      </Container>

      {/* Right Side Images */}
      <Box
        sx={{
          flex: 1,
          display: { xs: "none", md: "flex" },
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          gap: 2,
          p: 3,
        }}
      >
        <Box component="img" src={mountain1} alt="Mountain 1" sx={{ width: "70%", borderRadius: 2 }} />
        <Box component="img" src={mountain2} alt="Mountain 2" sx={{ width: "70%", borderRadius: 2 }} />
      </Box>

      {/* OTP Modal */}
      <Modal open={otpOpen} onClose={handleOtpClose}>
        <Box
          sx={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            width: 300,
            bgcolor: "white",
            p: 4,
            borderRadius: 2,
            boxShadow: 24,
          }}
        >
          <Typography variant="h6" gutterBottom>
            Enter OTP
          </Typography>
          <TextField
            label="4-digit OTP"
            value={otp}
            onChange={handleOtpChange}
            fullWidth
            inputProps={{ inputMode: "numeric", pattern: "[0-9]*", maxLength: 4 }}
          />
          <Button
            fullWidth
            sx={{ mt: 2, backgroundColor: "#247a7e" }}
            variant="contained"
            onClick={() => {
              alert("OTP Verified!");
              setOtpOpen(false);
            }}
          >
            Verify OTP
          </Button>
        </Box>
      </Modal>
    </Box>
  );
};

export default ForgotPW;
