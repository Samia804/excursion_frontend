import axios from "axios";
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
import image from "../assets/chatbg.png.jpg"; // Replace with actual scenic image

const Chat = () => {
  const [searchParams] = useSearchParams();
  const userQuery = searchParams.get("query") || "";
  const [messages, setMessages] = useState([]);
  const [currentInput, setCurrentInput] = useState("");

  useEffect(() => {
    if (userQuery.trim()) {
      setMessages((prev) => [...prev, { role: "user", content: userQuery }]);
    }
  }, [userQuery]);

  const handleSend = async () => {
    if (!currentInput.trim()) return;

    const userMessage = currentInput.trim();

    setMessages((prev) => [...prev, { role: "user", content: userMessage }]);
    setCurrentInput("");

    try {
      const response = await axios.post(
        `${process.env.REACT_APP_BACKEND_URL}/chat`,
        { message: userMessage }
      );
      console.log("✅ API response:", response.data); // 🔍 Add this line

      const trips = response.data.trips;

      if (trips.length === 0) {
        setMessages((prev) => [
          ...prev,
          { role: "bot", content: "No matching trips found. Try a different query!" },
        ]);
      } else {
        const reply = trips
          .map(
            (trip) =>
              `🎒 ${trip.tripTitle}\n📍 ${trip.destination}\n💰 Rs.${trip.pricePerSeat}\n📅 ${trip.startDate} to ${trip.endDate}`
          )
          .join("\n\n");

        setMessages((prev) => [...prev, { role: "bot", content: reply }]);
      }
    } catch (error) {
      console.error("Error contacting backend:", error);
      setMessages((prev) => [
        ...prev,
        { role: "bot", content: "❌ Something went wrong. Try again later." },
      ]);
    }
  };

  return (
    <Grid container sx={{ minHeight: "100vh" }}>
      {/* Left Side - Chat UI */}
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

        <Box
          sx={{
            flexGrow: 1,
            overflowY: "auto",
            maxHeight: "300px",
            border: "1px solid #ddd",
            borderRadius: 1,
            p: 2,
            backgroundColor: "#f9f9f9",
            mb: 2,
          }}
        >
          {messages.map((msg, index) => (
            <Typography
              key={index}
              align={msg.role === "user" ? "right" : "left"}
              sx={{
                backgroundColor: msg.role === "user" ? "#d1ecf1" : "#f0f0f0",
                display: "inline-block",
                p: 1,
                my: 0.5,
                borderRadius: 2,
                whiteSpace: "pre-line",
                maxWidth: "80%",
              }}
            >
              {msg.content}
            </Typography>
          ))}
        </Box>

        <Paper
          sx={{
            display: "flex",
            alignItems: "center",
            border: "1px solid #ccc",
            borderRadius: 1,
            p: 0.5,
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
              "&:hover": {
                backgroundColor: "#1d6063",
              },
            }}
            onClick={handleSend}
          >
            <SendIcon />
          </IconButton>
        </Paper>
      </Grid>

      {/* Right Side - Background */}
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
