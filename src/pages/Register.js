import React, { useState } from "react";
import {
  Container,
  TextField,
  Grid,
  Button,
  Box,
  Typography,
  Select,
  MenuItem,
  FormControl,
  InputLabel,
  Modal,
  Tabs,
  Tab,
  Divider,
} from "@mui/material";
import { useNavigate } from "react-router-dom";
import mountain from "../assets/mountain.png";
import logo from "../assets/biglogo.png";

const Register = () => {
  const [mainTab, setMainTab] = useState("signup");
  const [signupTab, setSignupTab] = useState("email");
  const [otpOpen, setOtpOpen] = useState(false);
  const [otp, setOtp] = useState("");
  const [phone, setPhone] = useState("");
  const [countryCode, setCountryCode] = useState("+92");

  const navigate = useNavigate();
  const maxDate = new Date().toISOString().split("T")[0];

  const handleMainTabChange = (_, newValue) => {
    if (newValue === "login") navigate("/login");
    else setMainTab(newValue);
  };

  const handleSignupTabChange = (_, newValue) => setSignupTab(newValue);
  const handleOtpOpen = () => {
    if (/^\d{10,15}$/.test(phone)) setOtpOpen(true);
    else alert("Please enter a valid phone number (10–15 digits).");
  };
  const handleOtpClose = () => setOtpOpen(false);
  const handleOtpChange = (e) => {
    const value = e.target.value.replace(/\D/g, "");
    if (value.length <= 4) setOtp(value);
  };

  const renderSocialButtons = () => (
    <>
      <Box sx={{ display: "flex", gap: 2, mb: 2 }}>
        <Button fullWidth variant="contained" sx={{ backgroundColor: "#3b5998" }}>
          Sign up with Facebook
        </Button>
        <Button fullWidth variant="contained" sx={{ backgroundColor: "#db4437" }}>
          Sign up with Google
        </Button>
      </Box>
      <Divider sx={{ my: 2 }}>OR</Divider>
    </>
  );

  return (
    <Box sx={{ display: "flex", backgroundColor: "#f4f7f9", minHeight: "100vh" }}>
      <Container maxWidth="md" sx={{ mt: 5, mb: 8, flex: 1 }}>
        {/* Main Tabs: Signup / Login */}
        <Tabs value={mainTab} onChange={handleMainTabChange} centered sx={{ mb: 3 }}>
          <Tab label="Sign Up" value="signup" />
          <Tab label="Log In" value="login" />
        </Tabs>

        <Typography variant="h4" sx={{ fontWeight: 700, mb: 2 }}>
          Sign up
        </Typography>
        <Divider sx={{ mb: 3 }} />

        {/* Sub-tabs for Excursionist / Tour Operator */}
        <Tabs value={signupTab} onChange={handleSignupTabChange} centered>
          <Tab label="Sign up as Excursionist" value="email" />
          <Tab label="Sign up as Tour Operator" value="phone" />
        </Tabs>

        <Box mt={4}>
          {/* === Excursionist SignUp Form === */}
          {signupTab === "email" && (
            <Grid container spacing={2}>
              <Grid item xs={12}>{renderSocialButtons()}</Grid>
              <Grid item xs={12} sm={6}>
                <TextField fullWidth label="First Name" required />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField fullWidth label="Last Name" required />
              </Grid>
              <Grid item xs={12} sm={6}>
                <FormControl fullWidth>
                  <InputLabel>Gender</InputLabel>
                  <Select required defaultValue="">
                    <MenuItem value="Male">Male</MenuItem>
                    <MenuItem value="Female">Female</MenuItem>
                    <MenuItem value="Other">Other</MenuItem>
                  </Select>
                </FormControl>
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  type="date"
                  label="Date of Birth"
                  fullWidth
                  required
                  InputLabelProps={{ shrink: true }}
                  inputProps={{ max: maxDate }}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField fullWidth label="Email Address" type="email" required />
              </Grid>
              <Grid item xs={12}>
                <TextField fullWidth label="Password" type="password" required />
              </Grid>
              <Grid item xs={12}>
                <TextField fullWidth label="Confirm Password" type="password" required />
              </Grid>
              <Grid item xs={12}>
                <Button fullWidth variant="contained" sx={{ backgroundColor: "#247a7e" }}>
                  Sign Up
                </Button>
              </Grid>
              <Grid item xs={12}>
                <Typography variant="body2" align="center" sx={{ mt: 2, color: "text.secondary" }}>
                  {"*"}By clicking Sign Up, you agree to our{" "}
                  <a href="/terms">Terms</a>, <a href="/privacy">Privacy Policy</a>, and{" "}
                  <a href="/cookies">Cookies Policy</a>. You may receive SMS notifications from us and can opt out at any time.
                </Typography>
              </Grid>
            </Grid>
          )}

          {/* === Tour Operator SignUp Form === */}
          {signupTab === "phone" && (
            <Grid container spacing={2}>
              <Grid item xs={12}>{renderSocialButtons()}</Grid>
              <Grid item xs={12} sm={6}>
                <TextField fullWidth label="First Name" required />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField fullWidth label="Last Name" required />
              </Grid>
              <Grid item xs={12} sm={6}>
                <FormControl fullWidth>
                  <InputLabel>Gender</InputLabel>
                  <Select required defaultValue="">
                    <MenuItem value="Male">Male</MenuItem>
                    <MenuItem value="Female">Female</MenuItem>
                    <MenuItem value="Other">Other</MenuItem>
                  </Select>
                </FormControl>
              </Grid>

              {/* Company Name */}
              <Grid item xs={12} sm={6}>
                <TextField fullWidth label="Company Name" required />
              </Grid>

              {/* Established In */}
              <Grid item xs={12} sm={6}>
                <FormControl fullWidth>
                  <InputLabel>Established In</InputLabel>
                  <Select required defaultValue="">
                    {Array.from({ length: 50 }, (_, i) => {
                      const year = new Date().getFullYear() - i;
                      return <MenuItem key={year} value={year}>{year}</MenuItem>;
                    })}
                  </Select>
                </FormControl>
              </Grid>

              {/* Upload Portfolio */}
              <Grid item xs={12} sm={6}>
                <Button
                  variant="outlined"
                  fullWidth
                  sx={{ height: "100%" }}
                  onClick={() => navigate("/resume")}
                >
                  Upload Portfolio
                </Button>
              </Grid>

              {/* Phone Number */}
              <Grid item xs={12}>
                <Box display="flex" gap={2}>
                  <FormControl sx={{ minWidth: 100 }}>
                    <Select value={countryCode} onChange={(e) => setCountryCode(e.target.value)}>
                      <MenuItem value="+92">PK (+92)</MenuItem>
                      <MenuItem value="+1">US (+1)</MenuItem>
                      <MenuItem value="+44">UK (+44)</MenuItem>
                    </Select>
                  </FormControl>
                  <TextField
                    fullWidth
                    label="Phone Number"
                    type="tel"
                    required
                    value={phone}
                    onChange={(e) => setPhone(e.target.value.replace(/\D/g, ""))}
                    inputProps={{ maxLength: 15 }}
                  />
                </Box>
              </Grid>

              {/* Password */}
              <Grid item xs={12}>
                <TextField fullWidth label="Password" type="password" required />
              </Grid>
              <Grid item xs={12}>
                <TextField fullWidth label="Confirm Password" type="password" required />
              </Grid>

              {/* OTP Send Button */}
              <Grid item xs={12}>
                <Button
                  fullWidth
                  variant="contained"
                  sx={{ backgroundColor: "#247a7e" }}
                  onClick={handleOtpOpen}
                >
                  Send OTP
                </Button>
              </Grid>

              {/* Policy Note */}
              <Grid item xs={12}>
                <Typography variant="body2" align="center" sx={{ mt: 2, color: "text.secondary" }}>
                  {"*"}By clicking Sign Up, you agree to our{" "}
                  <a href="/terms">Terms</a>, <a href="/privacy">Privacy Policy</a>, and{" "}
                  <a href="/cookies">Cookies Policy</a>. You may receive SMS notifications from us and can opt out at any time.
                </Typography>
              </Grid>
            </Grid>
          )}
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
              onClick={() => alert("OTP Verified")}
            >
              Verify OTP
            </Button>
          </Box>
        </Modal>
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
        <Box component="img" src={mountain} alt="Mountain" sx={{ width: "70%", borderRadius: 2 }} />
        <Box component="img" src={logo} alt="Logo" sx={{ width: "70%", borderRadius: 2 }} />
      </Box>
    </Box>
  );
};

export default Register;
