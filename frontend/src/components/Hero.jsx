import React from 'react';
import { Box, Button, Container, Typography, createTheme, ThemeProvider, CssBaseline } from '@mui/material';
import Carousel from 'react-material-ui-carousel';
import Tour from '../images/Tour.png';
import Insurance from '../images/2.png';

const theme = createTheme({
  palette: {
    primary: { main: "#FFFFFF" },
    secondary: { main: "#ff6d00" },
  },
  typography: {
    fontSize: 15,
    fontFamily: "Roboto, sans-serif",
  },
  components: {
    MuiCssBaseline: {
      styleOverrides: {
        body: {
          margin: 0,
          padding: 0,
          boxSizing: 'border-box',
          overflowX: 'hidden',
        },
        html: {
          margin: 0,
          padding: 0,
          boxSizing: 'border-box',
          overflowX: 'hidden',
        },
        '*': {
          margin: 0,
          padding: 0,
          boxSizing: 'border-box',
        },
      },
    },
  },
});

const items = [
  { image: Tour },
  { image: Insurance}
];

const Hero = () => {
  const renderItem = (item, index) => (
    <Box
      key={index}
      sx={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        height: '100vh',
        width: '100vw',
        backgroundImage: `url(${item.image})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        color: '#fff',
        textAlign: 'center',
        position: 'relative',
      }}
      role="img"
      aria-label={item.alt}
    >
      <Box sx={{ position: 'absolute', top: 0, left: 0, right: 0, bottom: 0, backgroundColor: 'rgba(0, 0, 0, 0.5)' }} />
      <Container sx={{ position: 'relative' }}>
        <Typography variant="h2" component="h1" gutterBottom>
          {item.name}
        </Typography>
        <Typography variant="h5" component="p" gutterBottom>
          {item.description}
        </Typography>
        <Button variant="contained" color="secondary" size="large" sx={{ mr: 2 }}>
          Get Started
        </Button>
        <Button variant="outlined" color="secondary" size="large">
          Learn More
        </Button>
      </Container>
    </Box>
  );

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Carousel
        sx={{
          width: '100vw',
          height: '100vh',
        }}
      >
        {items.map((item, index) => renderItem(item, index))}
      </Carousel>
    </ThemeProvider>
  );
};

export default Hero;
