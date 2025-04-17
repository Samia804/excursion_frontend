import React, { useState } from "react";
import {
  Box,
  Typography,
  TextField,
  Button,
  Divider,
  Tabs,
  Tab,
} from "@mui/material";
import { Link, useNavigate } from "react-router-dom";
import mountain from "../assets/mountain.png";

const Login = () => {
  const [isExcursionist, setIsExcursionist] = useState(true);
  const [loginData, setLoginData] = useState({ email: "", password: "" });
  const [mainTab, setMainTab] = useState("login");

  const navigate = useNavigate();

  const handleMainTabChange = (_, newValue) => {
    if (newValue === "signup") {
      navigate("/register");
    } else {
      setMainTab(newValue);
    }
  };

  const handleChange = (e) => {
    setLoginData({ ...loginData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(isExcursionist ? "Excursionist Login" : "Tour Operator Login", loginData);
  };

  return (
    <Box sx={{ display: "flex", minHeight: "100vh", backgroundColor: "#F4F7F9" }}>
      {/* Left Side - Form */}
      <Box sx={{ flex: 1, p: 4 }}>
        {/* Top Tabs */}
        <Tabs value={mainTab} onChange={handleMainTabChange} centered sx={{ mb: 3 }}>
          <Tab label="Sign Up" value="signup" />
          <Tab label="Log In" value="login" />
        </Tabs>

        <Typography variant="h4" sx={{ fontWeight: 700, mb: 2 }}>
          {isExcursionist ? "Log In as Excursionist" : "Log In as Tour Operator"}
        </Typography>
        <Divider sx={{ mb: 3 }} />

        {/* Login Form */}
        <Box
          component="form"
          onSubmit={handleSubmit}
          sx={{
            backgroundColor: isExcursionist ? "#f9fafa" : "#eef4f6",
            p: 3,
            borderRadius: 2,
            border: isExcursionist ? "1px solid #D0D7DE" : "2px dashed #1e6c70",
          }}
        >
          {/* Social Login */}
          <Box sx={{ display: "flex", gap: 2, mb: 2 }}>
            {!isExcursionist ? (
              // Only Google for Tour Operator
              <Button variant="contained" fullWidth sx={{ backgroundColor: "#db4437" }}>
                Login with Google
              </Button>
            ) : (
              // Facebook + Google for Excursionist
              <>
                <Button variant="contained" fullWidth sx={{ backgroundColor: "#3b5998" }}>
                  Login with Facebook
                </Button>
                <Button variant="contained" fullWidth sx={{ backgroundColor: "#db4437" }}>
                  Login with Google
                </Button>
              </>
            )}
          </Box>

          <Divider sx={{ my: 2 }}>OR</Divider>

          {/* Email Fields */}
          <TextField
            fullWidth
            label="Email Address"
            name="email"
            value={loginData.email}
            onChange={handleChange}
            margin="normal"
          />
          <TextField
            fullWidth
            label="Password"
            name="password"
            type="password"
            value={loginData.password}
            onChange={handleChange}
            margin="normal"
          />

          {/* Forgot Password */}
          <Typography variant="body2" align="right" sx={{ mt: 1 }}>
            <Link to="/forgot-password" style={{ color: "#007b83", textDecoration: "none" }}>
              Forgot Password?
            </Link>
          </Typography>

          {/* Submit Button */}
          <Button type="submit" variant="contained" fullWidth sx={{ mt: 2 }}>
            Log In
          </Button>

          {/* Switch Role */}
          <Divider sx={{ my: 3 }}>OR</Divider>
          <Button
            variant="outlined"
            fullWidth
            onClick={() => setIsExcursionist(!isExcursionist)}
          >
            {isExcursionist
              ? "Login as Tour Operator"
              : "Login as Excursionist"}
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
