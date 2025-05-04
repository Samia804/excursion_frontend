// Wallet.js
import React from "react";
import {
  Box,
  Typography,
  Button,
  Paper,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import CreditCardIcon from "@mui/icons-material/CreditCard";
import AccountBalanceWalletIcon from "@mui/icons-material/AccountBalanceWallet";
import AccountBalanceIcon from "@mui/icons-material/AccountBalance";
import PhoneIphoneIcon from "@mui/icons-material/PhoneIphone";

const Wallet = () => {
  return (
    <Box sx={{ p: 4 }}>
      <Paper sx={{ p: 4, maxWidth: 500, mx: "auto", borderRadius: 3 }}>
        <Typography variant="h4" fontWeight="bold" mb={2} color="primary.dark">
          Wallet
        </Typography>

        <Typography variant="h5" fontWeight="bold" mb={0.5}>
          $0.00
        </Typography>
        <Typography variant="body2" color="text.secondary" mb={3}>
          Current wallet balance
        </Typography>

        <Button
          variant="contained"
          sx={{ backgroundColor: "#145c54", mb: 4, px: 4 }}
        >
          Add Funds
        </Button>

        <Typography variant="h6" fontWeight="bold" gutterBottom>
          Top up via
        </Typography>
        <List>
          <ListItem button>
            <ListItemIcon>
              <CreditCardIcon />
            </ListItemIcon>
            <ListItemText primary="Credit / Debit Card" />
          </ListItem>

          <ListItem button>
            <ListItemIcon>
              <AccountBalanceWalletIcon />
            </ListItemIcon>
            <ListItemText primary="E-Wallet" />
          </ListItem>

          <ListItem button>
            <ListItemIcon>
              <AccountBalanceIcon />
            </ListItemIcon>
            <ListItemText primary="Bank Transfer" />
          </ListItem>

          <ListItem button>
            <ListItemIcon>
              <PhoneIphoneIcon />
            </ListItemIcon>
            <ListItemText primary="JazzCash / easypaisa" />
          </ListItem>
        </List>
      </Paper>
    </Box>
  );
};

export default Wallet;
