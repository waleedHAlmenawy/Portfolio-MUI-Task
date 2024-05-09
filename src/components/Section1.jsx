import React from "react";
import background from "../assets/bg.jpg";
import { Box, Button, Container, Link, Stack, ThemeProvider, Typography } from "@mui/material";
import { theme } from "./Theme";
import Icons from "./shared/Icons";

export default function Section1() {
  return (
    <ThemeProvider theme={theme}>
      <Box color="white" sx={{
        position: 'relative'
      }}>
        <img
          src={background}
          style={{
            objectFit: "cover",
            width: "100%",
            height: "105vh"
          }}
        />

        <Box sx={{
          position: "absolute",
          top: 0,
          left: '50%',
          transform: 'translateX(-50%)',
          color: "#2e7d32",
        }}>
          <Icons />
        </Box>

        <Container
          sx={{
            position: "absolute",
            top: '30%',
            left: { md: "10%", sm: "7.5%", xs: "5%" },
            color: "black",
            width: "75%",
          }}
        >
          <Typography
            variant="h3"
            fontWeight="100"
            sx={{
              fontSize: { xs: "2.5rem", md: "3rem", sm: "2.5rem" },
            }}
          >
            Hello, I am
          </Typography>

          <Typography
            variant="h2"
            fontWeight="500"
            sx={{
              marginTop: "20px",
              fontSize: { xs: "2.5rem", md: "4rem", sm: "3rem" },
            }}
          >
            Waleed Almenawy
          </Typography>

          <Typography
            variant="h6"
            fontWeight="400"
            color='#2e7d32'
            sx={{
              marginTop: "40px",
              letterSpacing: { xs: "10px", sm: "25px" },
              fontSize: { xs: "0.8rem", sm: "1rem" },
            }}
          >
            Full Stack Developer
          </Typography>

          <Button variant="contained" size="medium" sx={{
            backgroundColor: '#2e7d32',
            color: 'white',
            borderRadius: '30px',
            marginTop: '30px'
          }}>
            Print My Resume
          </Button>
        </Container>
      </Box>
    </ThemeProvider>
  );
}
