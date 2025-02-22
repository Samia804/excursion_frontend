import React from "react";
import { AppBar, Toolbar, Box, Button } from "@mui/material";
import { Link } from "react-router-dom";
import Logo from "../assets/logo.png"; // Ensure the logo path is correct

const Navbar = () => {
  return (
    <AppBar
      position="absolute"
      sx={{
        backgroundColor: "white",
        boxShadow: "none",
        padding: "5px 0", // Reduced padding to decrease navbar height
      }}
    >
      <Toolbar
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          width: "100%",
          minHeight: "60px", // Adjusted to a proper height
        }}
      >
        {/* Left Side - Logo */}
        <Box component={Link} to="/" sx={{ display: "flex", alignItems: "center" }}>
          <img src={Logo} alt="Excursions Logo" style={{ height: "40px" }} /> {/* Adjusted height */}
        </Box>

        {/* Middle - Navigation Links */}
        <Box sx={{ display: "flex", gap: "15px" }}>
          {[
            { text: "Home", path: "/" },
            { text: "Join as Tour Operator", path: "/join-operator" },
            { text: "Custom Trip", path: "/custom-trip" },
            { text: "Services", path: "/services" },
            { text: "Contact Us", path: "/contact" },
          ].map((item, index) => (
            <Button
              key={index}
              component={Link}
              to={item.path}
              sx={{
                color: "black",
                fontSize: "1rem",
                transition: "color 0.3s ease-in-out",
                "&:hover": { color: "#2B7D8B" },
              }}
            >
              {item.text}
            </Button>
          ))}
        </Box>

        {/* Right Side - Auth Links */}
        <Box sx={{ display: "flex", gap: "10px" }}>
          <Button
            component={Link}
            to="/login"
            sx={{
              color: "black",
              fontSize: "1rem",
              transition: "color 0.3s ease-in-out",
              "&:hover": { color: "#2B7D8B" },
            }}
          >
            Login
          </Button>
          <Button
            component={Link}
            to="/register"
            sx={{
              color: "black",
              fontSize: "1rem",
              border: "1px solid black",
              padding: "5px 12px",
              transition: "color 0.3s ease-in-out, border-color 0.3s ease-in-out",
              "&:hover": { color: "#2B7D8B", borderColor: "#2B7D8B" },
            }}
          >
            Register
          </Button>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
