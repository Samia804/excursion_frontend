import React from "react";
import { Box, Typography } from "@mui/material";

const StepIndicator = ({ currentStep }) => {
  const circleStyle = (step) => ({
    backgroundColor: currentStep === step ? "#247a7e" : "#fff",
    border: "2px solid #247a7e",
    color: currentStep === step ? "#fff" : "#247a7e",
    width: 32,
    height: 32,
    borderRadius: "50%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    fontWeight: "bold",
    fontSize: "14px",
  });

  const labelStyle = (step) => ({
    fontWeight: currentStep === step ? "bold" : "normal",
    fontSize: "14px",
    marginLeft: "8px",
    marginRight: step === 1 ? "24px" : "0",
  });

  return (
    <Box display="flex" justifyContent="center" alignItems="center" mb={4}>
      <Box display="flex" alignItems="center">
        <Box display="flex" alignItems="center">
          <Box sx={circleStyle(1)}>1</Box>
          <Typography sx={labelStyle(1)}>Review booking and details</Typography>
        </Box>

        <Box
          sx={{
            width: 40,
            height: 2,
            backgroundColor: "#247a7e",
            mx: 2,
          }}
        />

        <Box display="flex" alignItems="center">
          <Box sx={circleStyle(2)}>2</Box>
          <Typography sx={labelStyle(2)}>Payment and Ticket confirmation</Typography>
        </Box>
      </Box>
    </Box>
  );
};

export default StepIndicator;
