import React from "react";
import { AppBar, Toolbar, Box, Button, Link as MuiLink } from "@mui/material";
import { Link, useLocation } from "react-router-dom";
import Logo from "../assets/logo.png"; // Make sure this logo exists

const Navbar = () => {
  const location = useLocation();

  // Updated with the new link
  const navLinks = [
    { label: "Home", path: "/" },
    { label: "Top deals", path: "/top-deals" },
    { label: "Custom trip", path: "/custom-trip" },
    { label: "Services", path: "/services" },
    { label: "Contact us", path: "/contact-us" },
    { label: "Join as Tour Operator", path: "/join-operator" }, // 👈 New route
  ];

  return (
    <AppBar position="static" elevation={0} sx={{ backgroundColor: "white", py: 1 }}>
      <Toolbar sx={{ justifyContent: "space-between" }}>
        {/* Logo */}
        <Box component={Link} to="/" sx={{ display: "flex", alignItems: "center" }}>
          <img src={Logo} alt="Excursions Logo" style={{ height: 40 }} />
        </Box>

        {/* Center Nav Links */}
        <Box sx={{ display: "flex", gap: 4 }}>
          {navLinks.map((link) => (
            <MuiLink
              key={link.path}
              component={Link}
              to={link.path}
              underline="none"
              sx={{
                fontSize: 16,
                fontWeight: location.pathname === link.path ? 600 : 400,
                color: location.pathname === link.path ? "#247a7e" : "#333",
                "&:hover": { color: "#247a7e" },
              }}
            >
              {link.label}
            </MuiLink>
          ))}
        </Box>

        {/* Right - Register & Log In */}
        <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
          <MuiLink
            component={Link}
            to="/register"
            underline="none"
            sx={{ fontSize: 16, color: "#247a7e", fontWeight: 500 }}
          >
            Register
          </MuiLink>
          <Button
            variant="contained"
            sx={{
              textTransform: "none",
              backgroundColor: "#247a7e",
              "&:hover": { backgroundColor: "#1e6c70" },
              borderRadius: "4px",
              px: 3,
            }}
            component={Link}
            to="/login"
          >
            Log In
          </Button>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
