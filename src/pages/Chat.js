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
import image from "../assets/chatbg.png.jpg"; // 📸 Replace with scenic image

const Chat = () => {
  const [searchParams] = useSearchParams();
  const userQuery = searchParams.get("query") || "";
  const [messages, setMessages] = useState([]);
  const [currentInput, setCurrentInput] = useState("");
  const [lastQuery, setLastQuery] = useState("");

  useEffect(() => {
    setMessages([
      {
        role: "bot",
        content:
          "Hey there! I'm Lara. Tell me where you want to go and I’ll show you some amazing trips!",
      },
    ]);
  }, []);

  useEffect(() => {
    if (userQuery.trim()) {
      setMessages((prev) => [
        ...prev,
        { role: "user", content: userQuery },
      ]);
      setCurrentInput(userQuery);
      setTimeout(() => handleSend(userQuery), 300);
    }
  }, [userQuery]);

  const isChatty = (text) => {
    const phrases = ["hi", "hello", "sunna", "sunno", "abey", "bata", "acha", "chal", "jannu", "kya hal", "suno"];
    return phrases.some((phrase) => text.toLowerCase().includes(phrase));
  };

  const handleSend = async (overrideInput = null) => {
    const userMessage = (overrideInput || currentInput).trim();
    if (!userMessage) return;

    setMessages((prev) => [...prev, { role: "user", content: userMessage }]);
    setCurrentInput("");
    setLastQuery(userMessage);

    if (isChatty(userMessage)) {
      setMessages((prev) => [
        ...prev,
        { role: "bot", content: "Haha, you are witty but tell me where we’re heading!" },
      ]);
      return;
    }

    try {
      const res = await axios.post(`${process.env.REACT_APP_BACKEND_URL}/chat`, {
        message: userMessage,
      });

      const trips = res.data.trips || [];

      if (!trips.length) {
        setMessages((prev) => [
          ...prev,
          { role: "bot", content: " Try a different query!" },
        ]);
      } else {
        const formatted = trips.map((trip) => `🛍️ ${trip.tripTitle}\n📍 ${trip.destination}\n💰 Rs.${trip.pricePerSeat}\n📅 ${trip.startDate} to ${trip.endDate}`).join("\n\n");
        setMessages((prev) => [
          ...prev,
          { role: "bot", content: "Here’s what I found for you! ✨" },
          { role: "bot", content: formatted },
        ]);
      }
    } catch (err) {
      console.error("❌ Backend error:", err);
      setMessages((prev) => [
        ...prev,
        { role: "bot", content: "Something went wrong. Please try again later." },
      ]);
    }
  };

  return (
    <Grid container sx={{ minHeight: "100vh" }}>
      <Grid item xs={12} md={6} sx={{ display: "flex", flexDirection: "column", justifyContent: "center", px: { xs: 3, md: 8 }, backgroundColor: "#fff" }}>
        <Typography variant="h4" sx={{ fontWeight: "bold", color: "#b88d6b", mb: 2 }}>Travel Made <br /> Easy with Lara</Typography>
        <Typography sx={{ color: "#999", mb: 4 }}>Get inspired, ask questions, and plan your next trip effortlessly!</Typography>

        <Box sx={{ display: "flex", flexWrap: "wrap", gap: 1, mb: 3 }}>
          {["Murree sounds perfect!", "I’d love to explore Lahore!", "How about Hunza?"].map((text, idx) => (
            <Button
              key={idx}
              variant="contained"
              sx={{ backgroundColor: "#c9e2e1", color: "#000" }}
              onClick={() => {
                setCurrentInput(text);
                setTimeout(() => handleSend(text), 300);
              }}
            >
              {text}
            </Button>
          ))}
        </Box>

        <Box sx={{ flexGrow: 1, overflowY: "auto", maxHeight: "300px", border: "1px solid #ddd", borderRadius: 1, p: 2, backgroundColor: "#f9f9f9", mb: 2 }}>
          {messages.map((msg, i) => (
            <Typography
              key={i}
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

        <Paper sx={{ display: "flex", alignItems: "center", border: "1px solid #ccc", borderRadius: 1, p: 0.5 }}>
          <TextField
            fullWidth
            placeholder="Ask anything"
            variant="standard"
            InputProps={{ disableUnderline: true }}
            value={currentInput}
            onChange={(e) => setCurrentInput(e.target.value)}
            sx={{ px: 2 }}
            onKeyPress={(e) => {
              if (e.key === "Enter") handleSend();
            }}
          />
          <IconButton
            onClick={() => handleSend()}
            sx={{ backgroundColor: "#247a7e", color: "#fff", borderRadius: 2, width: 40, height: 40, m: 0.5, "&:hover": { backgroundColor: "#1d6063" } }}
          >
            <SendIcon />
          </IconButton>
        </Paper>
      </Grid>

      <Grid item xs={12} md={6} sx={{ backgroundImage: `url(${image})`, backgroundSize: "cover", backgroundPosition: "center", position: "relative" }}>
        <Box sx={{ position: "absolute", bottom: 20, left: "50%", transform: "translateX(-50%)", textAlign: "center", color: "#fff", px: 4, width: "100%" }}>
          <Typography variant="body2">
            Ready for your next adventure? Start by asking me any travel question, and I’ll guide you to the perfect trip!
          </Typography>
        </Box>
      </Grid>
    </Grid>
  );
};

export default Chat;
