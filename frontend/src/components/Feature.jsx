import React from "react";
import { Container, Typography, Grid, Card, CardContent } from "@mui/material";

const Features = () => {
  return (
    <Container sx={{ py: 5 }}>
      <Grid container spacing={4}>
        <Grid item xs={12} md={4}>
          <Card>
            <CardContent>
              <Typography variant="h5" component="div">
                Feature 1
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Description of feature 1.
              </Typography>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} md={4}>
          <Card>
            <CardContent>
              <Typography variant="h5" component="div">
                Feature 2
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Description of feature 2.
              </Typography>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} md={4}>
          <Card>
            <CardContent>
              <Typography variant="h5" component="div">
                Feature 3
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Description of feature 3.
              </Typography>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </Container>
  );
};

export default Features;
