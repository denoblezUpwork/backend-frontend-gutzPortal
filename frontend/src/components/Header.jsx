// Header.js (ensure Link import from react-router-dom is present)
import React, { useState } from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  ThemeProvider,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
} from "@mui/material";
import { Link } from "react-router-dom";
import logo from "../images/logo.png";
import LoginForm from "../pages/Login";
import Signup from "../pages/Signup";
import Features from "./Feature"; // Import Features component

import { createTheme } from "@mui/material/styles";

const Header = () => {
  const [openLogin, setOpenLogin] = useState(false);
  const [openSignup, setOpenSignup] = useState(false);

  const handleClickOpenLogin = () => {
    setOpenLogin(true);
  };

  const handleCloseLogin = () => {
    setOpenLogin(false);
  };

  const handleClickOpenSignup = () => {
    setOpenSignup(true);
  };

  const handleCloseSignup = () => {
    setOpenSignup(false);
  };

  const theme = createTheme({
    palette: {
      primary: {
        main: "#FFFFFF", // Change the primary color
      },
      secondary: {
        main: "#ff6d00",
      },
    },
    components: {
      MuiAppBar: {
        styleOverrides: {
          root: {
            backgroundColor: "transparent", // Set the background to transparent
            boxShadow: "none", // Remove the elevation
          },
        },
      },
    },
    typography: {
      // Customize font size and family for all typography variants
      fontSize: 15,
      fontFamily: "Roboto, sans-serif",
    },
  });

  return (
    <ThemeProvider theme={theme}>
      <div>
        <AppBar elevation={0}>
          <Toolbar style={{ display: "flex", justifyContent: "space-between" }}>
            <Typography>
              <img
                src={logo}
                alt="Gutz Portal"
                style={{ width: "150px", height: "auto", paddingLeft: "50px" }}
              />
            </Typography>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                flexGrow: 1,
                justifyContent: "center",
              }}
            >
              <Button
                component={Link}
                to="/"
                color="inherit"
                sx={{
                  marginRight: "20px",
                  "&:hover": {
                    backgroundColor: "#ff6d00", // Change the hover color
                  },
                }}
              >
                Home
              </Button>
              <Button
                component={Link}
                to="/features" // Route for Features section
                color="inherit"
                sx={{
                  marginRight: "20px",
                  "&:hover": {
                    backgroundColor: "#ff6d00", // Change the hover color
                  },
                }}
              >
                Services
              </Button>
              <Button
                component={Link}
                to="/about"
                color="inherit"
                sx={{
                  marginRight: "20px",
                  "&:hover": {
                    backgroundColor: "#ff6d00", // Change the hover color
                  },
                }}
              >
                About Us
              </Button>
              <Button
                component={Link}
                to="/contact"
                color="inherit"
                sx={{
                  marginRight: "20px",
                  "&:hover": {
                    backgroundColor: "#ff6d00", // Change the hover color
                  },
                }}
              >
                Contact Us
              </Button>
            </div>
            <div>
              <Button
                onClick={handleClickOpenLogin}
                variant="contained"
                color="secondary"
                sx={{
                  marginRight: "20px",
                  "&:hover": {
                    backgroundColor: "#ff6d00", // Change the hover color
                  },
                }}
              >
                Login
              </Button>
              <Button
                onClick={handleClickOpenSignup}
                color="inherit"
                sx={{
                  "&:hover": {
                    backgroundColor: "#e0e0e0", // Change the hover color
                  },
                }}
              >
                Sign Up
              </Button>
            </div>
          </Toolbar>
        </AppBar>

        {/* Login Dialog */}
        <Dialog open={openLogin} onClose={handleCloseLogin}>
          <DialogTitle>Login</DialogTitle>
          <DialogContent>
            <LoginForm /> {/* Render your LoginForm component inside the dialog */}
          </DialogContent>
          <DialogActions>
            <Button onClick={handleCloseLogin} color="primary">
              Close
            </Button>
          </DialogActions>
        </Dialog>

        {/* Signup Dialog */}
        <Dialog open={openSignup} onClose={handleCloseSignup}>
          <DialogTitle>Sign Up</DialogTitle>
          <DialogContent>
            <Signup /> {/* Render your Signup component inside the dialog */}
          </DialogContent>
          <DialogActions>
            <Button onClick={handleCloseSignup} color="primary">
              Close
            </Button>
          </DialogActions>
        </Dialog>
      </div>
    </ThemeProvider>
  );
};

export default Header;
