import React, { useRef } from "react";
import {
  Box,
  Typography,
  Container,
  Checkbox,
  FormControlLabel,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import {
  UploadCloud,
  FolderDown,
  Cloud,
} from "lucide-react"; // Used alternatives from lucide-react

const Resume = () => {
  // Refs to hidden file inputs
  const deviceInputRef = useRef(null);
  const dropboxInputRef = useRef(null);
  const driveInputRef = useRef(null);

  // Function to trigger file input click
  const handleUploadClick = (ref) => {
    if (ref.current) {
      ref.current.click();
    }
  };

  return (
    <Container sx={{ py: 6 }}>
      {/* Heading */}
      <Typography variant="h5" fontWeight="bold" color="#6b3b1f" gutterBottom>
        Add your Resume
      </Typography>

      {/* Upload Options */}
      <Box sx={{ mt: 4 }}>
        <Typography variant="subtitle1" fontWeight="bold" gutterBottom>
          Upload Options
        </Typography>

        <List>
          {/* Upload from device */}
          <ListItem button onClick={() => handleUploadClick(deviceInputRef)}>
            <ListItemIcon>
              <UploadCloud color="#247a7e" />
            </ListItemIcon>
            <ListItemText primary="Upload from Device" />
            <input
              ref={deviceInputRef}
              type="file"
              accept=".pdf"
              hidden
              onChange={(e) => console.log("Device Upload:", e.target.files[0])}
            />
          </ListItem>

          {/* Upload from Dropbox */}
          <ListItem button onClick={() => handleUploadClick(dropboxInputRef)}>
            <ListItemIcon>
              <FolderDown color="#247a7e" />
            </ListItemIcon>
            <ListItemText primary="Add from Dropbox" />
            <input
              ref={dropboxInputRef}
              type="file"
              accept=".pdf"
              hidden
              onChange={(e) => console.log("Dropbox Upload:", e.target.files[0])}
            />
          </ListItem>

          {/* Upload from Google Drive */}
          <ListItem button onClick={() => handleUploadClick(driveInputRef)}>
            <ListItemIcon>
              <Cloud color="#247a7e" />
            </ListItemIcon>
            <ListItemText primary="Add from Google Drive" />
            <input
              ref={driveInputRef}
              type="file"
              accept=".pdf"
              hidden
              onChange={(e) => console.log("Google Drive Upload:", e.target.files[0])}
            />
          </ListItem>
        </List>
      </Box>

      {/* Instructions */}
      <Box sx={{ mt: 5 }}>
        <Typography variant="subtitle1" fontWeight="bold" gutterBottom>
          What should your Portfolio include?
        </Typography>
        <Typography variant="body2" sx={{ mb: 2 }}>
          Please make sure your uploaded PDF includes:
        </Typography>
        <ul>
          <li>📌 Past trip history with photos and brief summaries</li>
          <li>🏢 Company profile, mission, and contact details</li>
          <li>🤝 Partnerships or affiliations</li>
          <li>👷 Registered staff and tour guides</li>
          <li>🏨 Associated hotels or transport providers</li>
        </ul>
      </Box>

      {/* Privacy */}
      <Box sx={{ mt: 4 }}>
        <Typography variant="subtitle1" fontWeight="bold" gutterBottom>
          Resume Privacy
        </Typography>
        <FormControlLabel
          control={<Checkbox defaultChecked />}
          label="Public Privacy: Your portfolio will only be visible to Excursion administrators."
        />
      </Box>
    </Container>
  );
};

export default Resume;
