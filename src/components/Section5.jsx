import {
  Box,
  Container,
  Divider,
  Grid,
  Stack,
  Tab,
  Tabs,
  Typography,
} from "@mui/material";
import React from "react";

export default function Section5() {
  const [value, setValue] = React.useState('one');

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Container
      sx={{
        marginTop: "80px",
        marginBottom: "80px",
      }}
    >
      <Typography variant="h4" marginBottom="40px">
        <Box display={'inline'} color={'#2e7d32'}>My</Box> Portfolio
      </Typography>


      <Box sx={{ width: '100%' }}>
        <Tabs
          value={value}
          onChange={handleChange}
          aria-label="secondary tabs example"
        >
          <Tab value="one" label="Item One" color="success" />
          <Tab value="two" label="Item Two" color="success" />
          <Tab value="three" label="Item Three" color="success" />
        </Tabs>
      </Box>
    </Container>
  );
}
