import React, { useState, useEffect } from "react";
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
  Container,
  Grid,
  Card,
  CardContent,
  CssBaseline,
  Box,
  createTheme,
} from "@mui/material";
import { Link } from "react-router-dom";
import logo from "../images/logo.svg";
import LoginForm from "../pages/Login";
import Signup from "../pages/Signup";
import Carousel from "react-material-ui-carousel";
import Tour from "../images/Tour.png";
import Insurance from "../images/Investment.png";
import featureTour from "../images/tour1.jpeg";
import pru1 from "../images/pru1.jpeg";
import pru2 from "../images/pru2.jpeg";

const theme = createTheme({
  palette: {
    primary: {
      main: "#FFFFFF", // Change the primary color
    },
    secondary: {
      main: "#ff5722",
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

const items = [{ image: Tour }, { image: Insurance }];

const features = [
  {
    name: "Travel and Tours",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur ducimus quibusdam error ullam dolore harum, ratione similique, quis voluptas neque, dignissimos voluptatum nisi illum dicta nobis officiis voluptates necessitatibus. Aspernatur, officiis perferendis iusto fuga quos, tempora cum vitae optio dolor inventore excepturi? Maxime quod iusto explicabo eos odit vitae neque.",
    image: featureTour,
  },
  {
    name: "Investment",
    description:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Provident ad accusamus eligendi debitis possimus in. Vel tenetur non dolores totam quam vero repellat inventore exercitationem perferendis quasi voluptatem ea, impedit aperiam ipsam. Adipisci dignissimos voluptatibus molestiae accusantium eveniet exercitationem ullam sapiente iure quos, veniam nisi architecto natus, pariatur hic blanditiis?",
    image: pru1,
  },
  {
    name: "Food",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dicta et, saepe eius doloremque repudiandae ex? Quod pariatur rem fuga incidunt tempore fugiat ut distinctio accusamus omnis. Consectetur assumenda doloribus cum. Reiciendis dicta itaque officia assumenda dolorem dolores nisi consequatur sapiente dignissimos hic! Vitae veniam reiciendis, numquam impedit recusandae temporibus explicabo.",
    image: pru2, // You can change this to another image if needed
  },
];

const LandingPage = () => {
  const [openLogin, setOpenLogin] = useState(false);
  const [openSignup, setOpenSignup] = useState(false);
  const [appBarColor, setAppBarColor] = useState("transparent");

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

  const handleScroll = () => {
    if (window.scrollY > 50) {
      setAppBarColor ("rgba(0, 0, 0, 0.2)"); // A shade of orange
    } else {
      setAppBarColor("transparent");
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const renderItem = (item, index) => (
    <Box
      key={index}
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        height: "100vh",
        width: "100vw",
        backgroundImage: `url(${item.image})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        color: "#fff",
        textAlign: "center",
        position: "relative",
        "&::before": {
          content: '""',
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          backgroundColor: "rgba(0, 0, 0, 0.2)", // Adjust opacity here
        },
      }}
      role="img"
      aria-label={item.alt}
    >
      <Container sx={{ position: "relative" }}>
        <Typography variant="h2" component="h1" gutterBottom>
          {item.name}
        </Typography>
        <Typography variant="h5" component="p" gutterBottom>
          {item.description}
        </Typography>
        <Button
          variant="contained"
          color="secondary"
          size="large"
          sx={{ mr: 2 }}
          onClick={() => handleScrollToSection("signup-section")}
        >
          Get Started
        </Button>
        <Button variant="outlined" color="secondary" size="large">
          Learn More
        </Button>
      </Container>
    </Box>
  );

  const handleScrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <div>
        <AppBar
          elevation={0}
          style={{ backgroundColor: appBarColor, transition: "background-color 0.3s" }}
        >
          <Toolbar style={{ display: "flex", justifyContent: "space-between" }}>
            <Typography>
              <img
                src={logo}
                alt="Gutz Portal"
                style={{ width: "120px", height: "auto", paddingLeft: "50px" }}
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
                to="/hero-section"
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
                onClick={() => {
                  handleScrollToSection("features-section");
                }}
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
                onClick={() => {
                  handleScrollToSection("about-section");
                }}
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
                onClick={() => {
                  handleScrollToSection("footer");
                }}
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
            <LoginForm />{" "}
            {/* Render your LoginForm component inside the dialog */}
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

        {/* Hero Section */}
        <Carousel
          sx={{
            width: "100vw",
            height: "100vh",
          }}
        >
          {items.map((item, index) => renderItem(item, index))}
        </Carousel>

        {/* Features Section */}
        <Container id="features-section" sx={{ py: 10 }}>
          <Grid container spacing={4}>
            {features.map((feature, index) => (
              <Grid item xs={12} md={4} key={index}>
                <Card>
                  <CardContent>
                    <img
                      src={feature.image}
                      alt={feature.name}
                      style={{ width: "100%", height: "auto" }}
                    />
                    <Typography variant="h5" component="div">
                      {feature.name}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      {feature.description}
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Container>

        {/* Sign Up Section */}
        <Box
          id="signup-section"
          sx={{
            backgroundColor: "#f0f0f0",
            py: 5,
            textAlign: "center",
          }}
        >
          <Container maxWidth="md">
            <Typography variant="h4" component="h2" gutterBottom>
              Sign Up and Get Started Today
            </Typography>
            <Typography variant="body1" paragraph>
              Ready to experience our services? Sign up now to get started!
            </Typography>
            <Button
              variant="contained"
              color="secondary"
              size="large"
              onClick={handleClickOpenSignup}
            >
              Sign Up
            </Button>
          </Container>
        </Box>

        {/* About Section */}
        <Container id="about-section" sx={{ py: 5 }}>
          <Typography variant="h4" component="h2" gutterBottom>
            About Us
          </Typography>
          <Typography variant="body1" paragraph>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Vitae
            facere enim nesciunt quis magni commodi, provident ad ea sunt hic
            reiciendis possimus cumque officia natus recusandae, consectetur
            repellendus praesentium pariatur? Dolor odit eveniet quisquam
            delectus, quas error, ipsam dolore, cum quod non ex praesentium eum.
            Quas repudiandae obcaecati, eius ex perspiciatis unde nulla odit
            explicabo corrupti ducimus corporis vel magni quibusdam amet
            exercitationem reprehenderit voluptas recusandae debitis eligendi?
            Nesciunt quasi alias recusandae laudantium! Saepe omnis aliquid quod
            quidem amet, modi perspiciatis ipsam! Exercitationem aperiam ex
            eligendi dolores, accusamus iure perferendis officia, tenetur esse
            iste cumque sit blanditiis deserunt ad quo.
          </Typography>
        </Container>

        {/* Contact Section */}
        <Container maxWidth="lg">
          <Grid container spacing={3}>
            <Grid item xs={12} sm={6}>
              <Typography variant="body2" color="text.secondary" align="center">
                Contact Us:
                <br />
                TM/Viber: +63 9353261149
                DITO: +639913338165
                Email: lynx_tale14@yahoo.com
                Facebook: fb.me/glenn.m.gutierrez
                <br />
                Phone: +1234567890
              </Typography>
            </Grid>
            <Grid item xs={12} sm={6}>
              <Typography variant="body2" color="text.secondary" align="center">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Nesciunt sint fugit similique sit iusto doloribus, voluptas nisi
                quae accusamus maiores!
              </Typography>
            </Grid>
          </Grid>
        </Container>

        {/* Footer */}
        <Box
          component="footer"
          id="footer"
          sx={{ bgcolor: theme.palette.secondary.main, py: 3, mt: 5 }}
        >
          <Container maxWidth="lg">
            <Typography variant="body2" color="text.secondary" align="center">
              {"© "}
              Gutz Portal {new Date().getFullYear()}
              {". All rights reserved."}
            </Typography>
          </Container>
        </Box>
      </div>
    </ThemeProvider>
  );
};

export default LandingPage;
