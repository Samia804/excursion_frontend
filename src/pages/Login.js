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

    if (loginData.email && loginData.password) {
      // ✅ Save login state in localStorage
      localStorage.setItem("isLoggedIn", "true");
      localStorage.setItem("userRole", isExcursionist ? "excursionist" : "operator");

      console.log(
        isExcursionist ? "Excursionist Logged In" : "Operator Logged In",
        loginData
      );

      // ✅ Navigate to respective dashboards
      if (isExcursionist) {
        navigate("/profile");
      } else {
        navigate("/operator-dashboard");
      }
    } else {
      alert("Please enter both email and password.");
    }
  };

  return (
    <Box sx={{ display: "flex", minHeight: "100vh", backgroundColor: "#F4F7F9" }}>
      {/* Left Form */}
      <Box sx={{ flex: 1, p: 4 }}>
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
          {/* Social Logins */}
          <Box sx={{ display: "flex", gap: 2, mb: 2 }}>
            {!isExcursionist ? (
              <Button variant="contained" fullWidth sx={{ backgroundColor: "#db4437" }}>
                Login with Google
              </Button>
            ) : (
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

          {/* Email/Password */}
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

          <Typography variant="body2" align="right" sx={{ mt: 1 }}>
            <Link to="/forgot-password" style={{ color: "#007b83", textDecoration: "none" }}>
              Forgot Password?
            </Link>
          </Typography>

          <Button type="submit" variant="contained" fullWidth sx={{ mt: 2 }}>
            Log In
          </Button>

          <Divider sx={{ my: 3 }}>OR</Divider>

          <Button
            variant="outlined"
            fullWidth
            onClick={() => setIsExcursionist(!isExcursionist)}
          >
            {isExcursionist ? "Login as Tour Operator" : "Login as Excursionist"}
          </Button>
        </Box>
      </Box>

      {/* Right Image */}
      <Box
        sx={{
          flex: 1,
          display: { xs: "none", md: "flex" },
          alignItems: "center",
          justifyContent: "center",
          p: 3,
        }}
      >
        <Box component="img" src={mountain} alt="Mountain" sx={{ width: "80%", borderRadius: 2 }} />
      </Box>
    </Box>
  );
};

export default Login;
