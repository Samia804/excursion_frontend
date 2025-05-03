import React, { useState, useEffect } from "react";
import {
  AppBar,
  Toolbar,
  Box,
  Button,
  Link as MuiLink,
  Menu,
  MenuItem,
  IconButton,
  Avatar,
} from "@mui/material";
import { Link, useLocation, useNavigate } from "react-router-dom";
import Logo from "../assets/logo.png";

const Navbar = () => {
  const location = useLocation();
  const navigate = useNavigate();

  // 🔑 Flag: Tracks whether the user is logged in
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [anchorEl, setAnchorEl] = useState(null);

  // 🔍 CHECK LOGIN STATUS FROM localStorage WHEN NAVBAR LOADS
  useEffect(() => {
    const loggedIn = localStorage.getItem("isLoggedIn") === "true";
    setIsLoggedIn(loggedIn); // 🔁 This sets the local state based on the flag
  }, []);

  // 📦 To turn ON login manually for testing (e.g., from browser console):
  localStorage.setItem("isLoggedIn", "true")

  // ❌ To turn OFF login:
  //localStorage.setItem("isLoggedIn", "false")

  const handleMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  // 🔓 When user logs out
  const handleLogout = () => {
    localStorage.setItem("isLoggedIn", "false"); // ✅ Turn OFF login flag here
    setIsLoggedIn(false);                        // ⛔ Update local state
    handleMenuClose();
    navigate("/");
  };

  // 🌐 Navigation links shown in center
  const navLinks = [
    { label: "Home", path: "/" },
    { label: "Top deals", path: "/destination-list" },
    { label: "Custom trip form", path: "/custom-trip-form" },
    { label: "Services", path: "/services" },
    { label: "Contact us", path: "/contact-us" },
    { label: "Join as Tour Operator", path: "/join-operator" },
  ];

  return (
    <AppBar position="static" elevation={0} sx={{ backgroundColor: "white", py: 1 }}>
      <Toolbar sx={{ justifyContent: "space-between" }}>
        {/* 🔗 Left: Logo */}
        <Box component={Link} to="/" sx={{ display: "flex", alignItems: "center" }}>
          <img src={Logo} alt="Excursions Logo" style={{ height: 40 }} />
        </Box>

        {/* 🧭 Center: Navigation Links */}
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

        {/* 🎯 Right: Auth Controls */}
        <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
          {!isLoggedIn ? (
            // 👤 If NOT logged in: Show Register + Log In
            <>
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
            </>
          ) : (
            // 🙋 If logged in: Show Avatar dropdown
            <>
              <IconButton onClick={handleMenuOpen}>
                <Avatar sx={{ bgcolor: "#247a7e" }}>U</Avatar>
              </IconButton>
              <Menu anchorEl={anchorEl} open={Boolean(anchorEl)} onClose={handleMenuClose}>
                <MenuItem onClick={() => { navigate("/operator-dashboard"); handleMenuClose(); }}>
                  Dashboard
                </MenuItem>
                <MenuItem onClick={() => { navigate("/calendar-page"); handleMenuClose(); }}>
                  Trip History
                </MenuItem>
                <MenuItem onClick={() => { navigate("/reviews"); handleMenuClose(); }}>
                  Reviews
                </MenuItem>
                <MenuItem onClick={handleLogout}>
                  Logout
                </MenuItem>
              </Menu>
            </>
          )}
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
