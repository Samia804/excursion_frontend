import React, { useState } from "react";
import {
  Box,
  Typography,
  TextField,
  Button,
  Divider,
  MenuItem,
  Select,
  InputLabel,
  FormControl,
  Tabs,
  Tab,
} from "@mui/material";
import { Link, useNavigate } from "react-router-dom";
import mountain from "../assets/mountain.png";

const Login = () => {
  const [phoneLogin, setPhoneLogin] = useState(false);
  const [emailData, setEmailData] = useState({ email: "", password: "" });
  const [phoneData, setPhoneData] = useState({ code: "+92", phone: "", password: "" });
  const [mainTab, setMainTab] = useState("login");

  const navigate = useNavigate();

  const handleMainTabChange = (_, newValue) => {
    if (newValue === "signup") {
      navigate("/register");
    } else {
      setMainTab(newValue);
    }
  };

  const handleEmailChange = (e) => {
    setEmailData({ ...emailData, [e.target.name]: e.target.value });
  };

  const handlePhoneChange = (e) => {
    setPhoneData({ ...phoneData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (phoneLogin) {
      console.log("Phone Login:", phoneData);
    } else {
      console.log("Email Login:", emailData);
    }
  };

  return (
    <Box sx={{ display: "flex", minHeight: "100vh", backgroundColor: "#F4F7F9" }}>
      {/* Left Side - Form */}
      <Box sx={{ flex: 1, p: 4 }}>
        {/* Tabs */}
        <Tabs value={mainTab} onChange={handleMainTabChange} centered sx={{ mb: 3 }}>
          <Tab label="Sign Up" value="signup" />
          <Tab label="Log In" value="login" />
        </Tabs>

        {/* Heading */}
        <Typography variant="h4" sx={{ fontWeight: 700, mb: 2 }}>
          Log In
        </Typography>
        <Divider sx={{ mb: 3 }} />

        {/* Login Form */}
        <Box
          component="form"
          onSubmit={handleSubmit}
          sx={{
            backgroundColor: "#f9fafa",
            p: 3,
            borderRadius: 2,
            border: "1px solid #D0D7DE",
          }}
        >
          {!phoneLogin ? (
            <>
              {/* Social logins */}
              <Box sx={{ display: "flex", gap: 2, mb: 2 }}>
                <Button variant="contained" fullWidth sx={{ backgroundColor: "#3b5998" }}>
                  Log in with Facebook
                </Button>
                <Button variant="contained" fullWidth sx={{ backgroundColor: "#db4437" }}>
                  Log in with Google
                </Button>
              </Box>

              <Divider sx={{ my: 2 }}>OR</Divider>

              {/* Email login */}
              <TextField
                fullWidth
                label="Email Address"
                name="email"
                value={emailData.email}
                onChange={handleEmailChange}
                margin="normal"
              />
              <TextField
                fullWidth
                label="Password"
                name="password"
                type="password"
                value={emailData.password}
                onChange={handleEmailChange}
                margin="normal"
              />

              {/* Forgot Password link */}
              <Typography variant="body2" align="right" sx={{ mt: 1 }}>
                <Link to="/forgot-password" style={{ color: "#007b83", textDecoration: "none" }}>
                  Forgot Password?
                </Link>
              </Typography>

              <Button type="submit" variant="contained" fullWidth sx={{ mt: 2 }}>
                Log In
              </Button>
            </>
          ) : (
            <>
              {/* Phone login */}
              <Typography variant="h6" sx={{ mb: 2 }}>Log in with Phone</Typography>
              <Box sx={{ display: "flex", alignItems: "center", gap: 2, mb: 2 }}>
                <FormControl sx={{ minWidth: 120 }} size="small">
                  <InputLabel>Code</InputLabel>
                  <Select
                    value={phoneData.code}
                    onChange={(e) => setPhoneData({ ...phoneData, code: e.target.value })}
                    label="Code"
                  >
                    <MenuItem value="+92">PK (+92)</MenuItem>
                    <MenuItem value="+1">US (+1)</MenuItem>
                    <MenuItem value="+91">IN (+91)</MenuItem>
                  </Select>
                </FormControl>
                <Box sx={{ flex: 1 }}>
                  <TextField
                    fullWidth
                    label="Phone Number"
                    name="phone"
                    value={phoneData.phone}
                    onChange={handlePhoneChange}
                  />
                </Box>
              </Box>

              <TextField
                fullWidth
                label="Password"
                name="password"
                type="password"
                value={phoneData.password}
                onChange={handlePhoneChange}
                margin="normal"
              />

              {/* Forgot Password link */}
              <Typography variant="body2" align="right" sx={{ mt: 1 }}>
                <Link to="/forgot-password" style={{ color: "#007b83", textDecoration: "none" }}>
                  Forgot Password?
                </Link>
              </Typography>

              <Button type="submit" variant="contained" fullWidth sx={{ mt: 2 }}>
                Log In
              </Button>
            </>
          )}

          <Divider sx={{ my: 3 }}>OR</Divider>

          <Button
            variant="outlined"
            fullWidth
            onClick={() => setPhoneLogin(!phoneLogin)}
          >
            {phoneLogin ? "Log in with Email" : "Log in with Phone"}
          </Button>
        </Box>
      </Box>

      {/* Right Side - Image */}
      <Box
        sx={{
          flex: 1,
          display: { xs: "none", md: "flex" },
          alignItems: "center",
          justifyContent: "center",
          p: 3,
        }}
      >
        <Box
          component="img"
          src={mountain}
          alt="Mountain"
          sx={{ width: "80%", borderRadius: 2 }}
        />
      </Box>
    </Box>
  );
};

export default Login;
