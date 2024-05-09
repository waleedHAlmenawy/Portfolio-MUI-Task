import React from "react";
import { ThemeProvider } from "styled-components";
import { theme } from "./Theme";
import { Box, Divider, Grid, Stack, Typography } from "@mui/material";

/* Icons */

import LayersIcon from '@mui/icons-material/Layers';
import AccessAlarmsIcon from "@mui/icons-material/AccessAlarms";
import FreeBreakfastIcon from '@mui/icons-material/FreeBreakfast';

export default function Section4() {
  return (
    <ThemeProvider theme={theme}>
      <Box
        sx={{
          backgroundColor: "#343a40",
          color: "#2e7d32",
          paddingY: "60px",
        }}
      >
        <Grid container spacing={2}>
          <Grid item md={4} xs={12} sm={6}>
            <Stack
              padding="30px"
              direction="row"
              spacing={2}
              justifyContent="center"
            >
              <AccessAlarmsIcon
                sx={{
                  fontSize: "100px",
                  color: "white",
                }}
              />

              <Divider orientation="vertical" flexItem color="white" />

              <Stack justifyContent="center">
                <Typography fontSize="50px" fontWeight="bold">
                  500
                </Typography>
                <Typography color="white">Work Hours</Typography>
              </Stack>
            </Stack>
          </Grid>
          <Grid item md={4} xs={12} sm={6}>
            <Stack
              padding="30px"
              direction="row"
              spacing={2}
              justifyContent="center"
            >
              <LayersIcon
                sx={{
                  fontSize: "100px",
                  color: "white",
                }}
              />

              <Divider orientation="vertical" flexItem color="white" />

              <Stack justifyContent="center">
                <Typography fontSize="50px" fontWeight="bold">
                  6
                </Typography>
                <Typography color="white">Projects</Typography>
              </Stack>
            </Stack>
          </Grid>
          <Grid item md={4} xs={12} sm={12}>
            <Stack
              padding="30px"
              direction="row"
              spacing={2}
              justifyContent="center"
            >
              <FreeBreakfastIcon
                sx={{
                  fontSize: "100px",
                  color: "white",
                }}
              />

              <Divider orientation="vertical" flexItem color="white" />

              <Stack justifyContent="center">
                <Typography fontSize="50px" fontWeight="bold">
                  5000
                </Typography>
                <Typography color="white">Tea Drink</Typography>
              </Stack>
            </Stack>
          </Grid>
        </Grid>
      </Box>
    </ThemeProvider>
  );
}
