import { Box, Typography } from "@mui/material";
import React from "react";

export default function Footer() {
  return (
    <>
      <Box
        sx={{
          padding: "20px",
          backgroundColor: "#343a40",
        }}
      >
        <Typography color="white" align="center">
          Made With ❤️ By - Waleed Almenawy © ITI
        </Typography>
      </Box>
    </>
  );
}
