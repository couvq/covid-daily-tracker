import { Container, Typography } from '@mui/material';
import React from 'react';

/* This is the component that will be responsible for displaying our data fetched from the api, will include
    the chart display */
const Display = ( { data } ) => {


  return (
    <Container>
        <Typography variant="h1"> Here is our current data: {data} </Typography>
    </Container>
  );
}

export default Display;