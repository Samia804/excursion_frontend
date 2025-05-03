// src/pages/Resume.js

import React, { useRef, useState } from "react";
import {
  Box,
  Typography,
  Container,
  Checkbox,
  FormControlLabel,
  Button,
  Paper,
  IconButton
} from "@mui/material";
import { ArrowLeft, UploadCloud } from "lucide-react";
import { useNavigate } from "react-router-dom";

const Resume = () => {
  const fileInputRef = useRef(null);
  const [file, setFile] = useState(null);
  const [uploaded, setUploaded] = useState(false);
  const navigate = useNavigate(); // ✅ for Go Back to Home button

  const handleUploadClick = () => {
    fileInputRef.current?.click();
  };

  const handleFileChange = (e) => {
    const uploadedFile = e.target.files?.[0];
    if (uploadedFile && uploadedFile.type === "application/pdf") {
      setFile(uploadedFile);
    }
  };

  const handleDrop = (e) => {
    e.preventDefault();
    const droppedFile = e.dataTransfer.files?.[0];
    if (droppedFile && droppedFile.type === "application/pdf") {
      setFile(droppedFile);
    }
  };

  const handleDragOver = (e) => e.preventDefault();

  const handleSubmit = () => {
    if (file) {
      setUploaded(true);
      // Future: Send file to backend here
    }
  };

  const handleBack = () => {
    setUploaded(false);
    setFile(null);
  };

  const goToHome = () => {
    navigate("/"); // ✅ Redirect to Home page
  };

  return (
    <Container sx={{ py: 6 }}>
      {!uploaded ? (
        <>
          {/* Back and Title */}
          <Box display="flex" alignItems="center" mb={3}>
            <IconButton onClick={handleBack}>
              <ArrowLeft color="#247a7e" />
            </IconButton>
            <Typography variant="h5" fontWeight="bold" color="#6b3b1f" ml={1}>
              Add your Resume
            </Typography>
          </Box>

          {/* Drag and Drop Upload */}
          <Paper
            elevation={3}
            sx={{
              border: "2px dashed #247a7e",
              borderRadius: 2,
              p: 4,
              textAlign: "center",
              bgcolor: "#f0fafa",
              cursor: "pointer"
            }}
            onClick={handleUploadClick}
            onDrop={handleDrop}
            onDragOver={handleDragOver}
          >
            <UploadCloud size={48} color="#247a7e" />
            <Typography mt={2}>
              Drag and drop your PDF file here, or click to upload.
            </Typography>
            <input
              ref={fileInputRef}
              type="file"
              accept=".pdf"
              hidden
              onChange={handleFileChange}
            />
          </Paper>

          {/* File Preview */}
          {file && (
            <Box mt={3} p={2} border="1px solid #ccc" borderRadius={1}>
              <Typography variant="body1">
                <strong>Selected File:</strong> {file.name}
              </Typography>
            </Box>
          )}

          {/* Instructions */}
          <Box mt={4}>
            <Typography variant="subtitle1" fontWeight="bold">
              What should your Portfolio include?
            </Typography>
            <ul style={{ marginLeft: "1.5rem" }}>
              <li>Past trip history with photos and brief summaries</li>
              <li>Company profile, mission, and contact details</li>
              <li>Partnerships or affiliations</li>
              <li>Registered staff and tour guides</li>
              <li>Associated hotels or transport providers</li>
            </ul>
          </Box>

          {/* Privacy */}
          <FormControlLabel
            sx={{ mt: 2 }}
            control={<Checkbox defaultChecked />}
            label="Public Privacy: Your portfolio will only be visible to Excursion administrators."
          />

          {/* Submit */}
          <Button
            variant="contained"
            sx={{ mt: 3, backgroundColor: "#247a7e" }}
            fullWidth
            disabled={!file}
            onClick={handleSubmit}
          >
            Submit Resume
          </Button>
        </>
      ) : (
        // Uploaded State
        <Paper elevation={4} sx={{ p: 4, textAlign: "center", bgcolor: "#eaf6f6" }}>
          <Typography variant="h5" fontWeight="bold" sx={{ color: "#6b3b1f", mb: 2 }}>
            Thank you for applying as a Tour Operator!
          </Typography>
          <Typography variant="subtitle1" fontWeight="bold" gutterBottom>
            Tour OP #EXC-551-77
          </Typography>
          <Typography sx={{ mb: 2 }}>
            We have received your application and are currently reviewing your details. Thank you for your patience.
          </Typography>
          <Typography sx={{ mb: 2 }}>
            Verification process typically takes 3–5 business days.
          </Typography>
          <Typography>Best,</Typography>
          <Typography>Team Excursions</Typography>

          <Box mt={4} display="flex" justifyContent="center" gap={2}>
            <Button variant="contained" sx={{ backgroundColor: "#247a7e" }}>
              Contact Us
            </Button>
            <Button variant="outlined" onClick={goToHome}>
              Go back to Home
            </Button>
          </Box>
        </Paper>
      )}
    </Container>
  );
};

export default Resume;
