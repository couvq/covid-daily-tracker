import { Container, Typography } from '@mui/material';
import React from 'react';

const Display = ( { data } ) => {


  return (
    <Container>
        <Typography variant="h1"> Here is our current data: {data} </Typography>
    </Container>
  );
}

export default Display;