import React, { useState } from "react";
import { Box, Typography, TextField, Button, Checkbox, FormControlLabel, Divider } from "@mui/material";
import { Link } from "react-router-dom";

const Register = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    emailOrPhone: "",
    password: "",
    confirmPassword: "",
    newsUpdates: false,
    privacyPolicy: false,
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Data:", formData);
    // TODO: Implement actual sign-up logic
  };

  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        minHeight: "100vh",
        backgroundColor: "#E5DDD7",
      }}
    >
      <Box
        sx={{
          backgroundColor: "white",
          padding: "30px",
          borderRadius: "10px",
          boxShadow: "0 4px 10px rgba(0,0,0,0.1)",
          width: "100%",
          maxWidth: "400px",
          textAlign: "center",
        }}
      >
        <Typography variant="h4" fontWeight="bold" mb={2}>
          Sign Up
        </Typography>

        {/* Social Sign-Up */}
        <Button
          variant="contained"
          sx={{
            backgroundColor: "#DB4437",
            color: "white",
            width: "100%",
            mb: 1,
            "&:hover": { backgroundColor: "#c1351e" },
          }}
        >
          Sign Up with Google
        </Button>
        <Button
          variant="contained"
          sx={{
            backgroundColor: "#3B5998",
            color: "white",
            width: "100%",
            mb: 2,
            "&:hover": { backgroundColor: "#2d4373" },
          }}
        >
          Sign Up with Facebook
        </Button>

        <Divider sx={{ my: 2 }}>OR</Divider>

        {/* Manual Sign-Up Form */}
        <form onSubmit={handleSubmit}>
          <TextField
            label="Full Name"
            name="fullName"
            fullWidth
            required
            variant="outlined"
            margin="dense"
            value={formData.fullName}
            onChange={handleChange}
          />
          <TextField
            label="Email or Phone"
            name="emailOrPhone"
            type="text"
            fullWidth
            required
            variant="outlined"
            margin="dense"
            value={formData.emailOrPhone}
            onChange={handleChange}
          />
          <TextField
            label="Password"
            name="password"
            type="password"
            fullWidth
            required
            variant="outlined"
            margin="dense"
            value={formData.password}
            onChange={handleChange}
          />
          <TextField
            label="Confirm Password"
            name="confirmPassword"
            type="password"
            fullWidth
            required
            variant="outlined"
            margin="dense"
            value={formData.confirmPassword}
            onChange={handleChange}
          />

          {/* Checkboxes */}
          <FormControlLabel
            control={
              <Checkbox name="newsUpdates" checked={formData.newsUpdates} onChange={handleChange} />
            }
            label="Receive news and updates"
          />
          <FormControlLabel
            control={
              <Checkbox
                name="privacyPolicy"
                checked={formData.privacyPolicy}
                onChange={handleChange}
                required
              />
            }
            label="I agree to the Privacy Policy"
          />

          {/* Submit Button */}
          <Button
            type="submit"
            variant="contained"
            sx={{
              backgroundColor: "#2B7D8B",
              color: "white",
              width: "100%",
              mt: 2,
              "&:hover": { backgroundColor: "#216a70" },
            }}
          >
            Sign Up
          </Button>
        </form>

        {/* Already have an account? */}
        <Typography variant="body2" mt={2}>
          Already have an account?{" "}
          <Link to="/login" style={{ color: "#2B7D8B", textDecoration: "none" }}>
            Log in
          </Link>
        </Typography>
      </Box>
    </Box>
  );
};

export default Register;
