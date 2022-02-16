import React from "react";
import { AppBar, Container, Toolbar, Typography } from "@mui/material";

const Header = () => {
  return (
    <AppBar>
      <Container>
        <Toolbar>
            <Typography variant="h2">Covid-19 Daily Tracker</Typography>
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default Header;
