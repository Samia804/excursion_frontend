// 🍴 All your imports go on top
import React, { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import {
  Box,
  Typography,
  TextField,
  Button,
  Grid,
  IconButton,
  Paper,
} from "@mui/material";
import SendIcon from "@mui/icons-material/Send";
import image from "../assets/chatbg.png.jpg"; // 🖼️ Background image

const Chat = () => {
  const [searchParams] = useSearchParams();
  const userQuery = searchParams.get("query") || "";

  // 🛡️ Fix ESLint: we're using `messages` below in JSX
  // eslint-disable-next-line no-unused-vars
 const [messages, setMessages] = useState([]);
// Use messages to avoid ESLint error in CI
useEffect(() => {}, [messages]);
  const [currentInput, setCurrentInput] = useState([]);

  useEffect(() => {
    if (userQuery.trim()) {
      setMessages((prev) => [...prev, { role: "user", content: userQuery }]);
    }
  }, [userQuery]);

  const handleSend = async () => {
    if (!currentInput.trim()) return;

    setMessages((prev) => [...prev, { role: "user", content: currentInput }]);

    try {
      const response = await fetch("https://excursion-backend.onrender.com/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ message: currentInput }),
      });

      const data = await response.json();

      if (data.trips?.length > 0) {
        data.trips.slice(0, 3).forEach((trip) => {
          const msg = `📍 ${trip.tripTitle} to ${trip.destination}\n💸 Rs ${trip.pricePerSeat}\n📅 ${trip.startDate} → ${trip.endDate}`;
          setMessages((prev) => [...prev, { role: "assistant", content: msg }]);
        });
      } else {
        setMessages((prev) => [...prev, { role: "assistant", content: "No matching trips found." }]);
      }
    } catch (error) {
      console.error("❌ API error:", error);
      setMessages((prev) => [...prev, { role: "assistant", content: "Something went wrong." }]);
    }

    setCurrentInput("");
  };

  return (
    <Grid container sx={{ minHeight: "100vh" }}>
      {/* Left Side */}
      <Grid
        item
        xs={12}
        md={6}
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          px: { xs: 3, md: 8 },
          backgroundColor: "#fff",
        }}
      >
        <Typography variant="h4" sx={{ fontWeight: "bold", color: "#b88d6b", mb: 2 }}>
          Travel Made <br /> Easy with Lara
        </Typography>
        <Typography sx={{ color: "#999", mb: 4 }}>
          Get inspired, ask questions, and plan your next trip effortlessly!
        </Typography>

        <Box sx={{ display: "flex", flexWrap: "wrap", gap: 1, mb: 3 }}>
          <Button variant="contained" sx={{ backgroundColor: "#c9e2e1", color: "#000" }}>
            Murree sounds perfect!
          </Button>
          <Button variant="contained" sx={{ backgroundColor: "#c9e2e1", color: "#000" }}>
            I’d love to explore Lahore!
          </Button>
          <Button variant="contained" sx={{ backgroundColor: "#c9e2e1", color: "#000" }}>
            How about Hunza?
          </Button>
        </Box>

        <Box sx={{ maxHeight: 200, overflowY: "auto", mb: 2 }}>
          {messages.map((msg, index) => (
            <Box
              key={index}
              sx={{
                display: "flex",
                justifyContent: msg.role === "user" ? "flex-end" : "flex-start",
                mb: 1,
              }}
            >
              <Box
                sx={{
                  p: 1.5,
                  borderRadius: 2,
                  maxWidth: "80%",
                  backgroundColor: msg.role === "user" ? "#d0f0f7" : "#f1f8e9",
                }}
              >
                <Typography variant="body2" whiteSpace="pre-line">{msg.content}</Typography>
              </Box>
            </Box>
          ))}
        </Box>

        <Paper
          sx={{
            display: "flex",
            alignItems: "center",
            border: "1px solid #ccc",
            borderRadius: 1,
            p: 0.5,
            mt: 1,
          }}
        >
          <TextField
            fullWidth
            placeholder="Ask anything"
            variant="standard"
            InputProps={{ disableUnderline: true }}
            value={currentInput}
            onChange={(e) => setCurrentInput(e.target.value)}
            sx={{ px: 2 }}
          />
          <IconButton
            sx={{
              backgroundColor: "#247a7e",
              color: "#fff",
              borderRadius: 2,
              width: 40,
              height: 40,
              m: 0.5,
              "&:hover": { backgroundColor: "#1d6063" },
            }}
            onClick={handleSend}
          >
            <SendIcon />
          </IconButton>
        </Paper>
      </Grid>

      {/* Right Side */}
      <Grid
        item
        xs={12}
        md={6}
        sx={{
          backgroundImage: `url(${image})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          position: "relative",
        }}
      >
        <Box
          sx={{
            position: "absolute",
            bottom: 20,
            left: "50%",
            transform: "translateX(-50%)",
            textAlign: "center",
            color: "#fff",
            px: 4,
            width: "100%",
          }}
        >
          <Typography variant="body2">
            Ready for your next adventure? Start by asking me any travel
            question, and I’ll guide you to the perfect trip!
          </Typography>
        </Box>
      </Grid>
    </Grid>
  );
};

export default Chat;
