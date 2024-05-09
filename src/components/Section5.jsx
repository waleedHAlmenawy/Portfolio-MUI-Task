import {
  Box,
  Button,
  Container,
  Divider,
  Grid,
  Stack,
  Tab,
  Tabs,
  Typography,
  createMuiTheme,
} from "@mui/material";
import React from "react";

import card1 from "../assets/1.png";
import card2 from "../assets/2.png";
import card3 from "../assets/3.png";

export default function Section5() {
  const [value, setValue] = React.useState("one");

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
        <Box display={"inline"} color={"#2e7d32"}>
          My
        </Box>{" "}
        Portfolio
      </Typography>

      <Grid container spacing={2}>
        <Grid md={4} sm={6} xs={12}>
          <Box
            display={"flex"}
            justifyContent={"center"}
            position={"relative"}
            sx={{
              "& .button": {
                display: "none",
              },
              "&:hover .button": {
                display: "flex",
                backdropFilter: "blur(20px)",
              },
            }}
          >
            <Box
              src={card1}
              component={"img"}
              sx={{
                borderRadius: "20px",
                width: { md: "300px", sm: "3250px", xs: "350px" },
                marginBottom: "20px",
                zIndex: 0,
              }}
            ></Box>

            <Container
              className="button"
              sx={{
                display: "none",
                justifyContent: "center",
                alignItems: "center",
                height: "80%",
                position: "absolute",
                top: "50%",
                left: "50%",
                transform: "translate(-50%, -55%)",
                width: { md: "300px", sm: "3250px", xs: "350px" },
              }}
            >
              <Button
                color="success"
                sx={{
                  borderRadius: 35,
                  backgroundColor: "orange",

                  padding: "18px 36px",
                  fontSize: "18px",
                }}
                variant="contained"
              >
                Demo
              </Button>
            </Container>
          </Box>
        </Grid>

        <Grid md={4} sm={6} xs={12}>
          <Box
            display={"flex"}
            justifyContent={"center"}
            position={"relative"}
            sx={{
              "& .button": {
                display: "none",
              },
              "&:hover .button": {
                display: "flex",
                backdropFilter: "blur(20px)",
              },
            }}
          >
            <Box
              src={card2}
              component={"img"}
              sx={{
                borderRadius: "20px",
                width: { md: "300px", sm: "3250px", xs: "350px" },
                marginBottom: "20px",
                zIndex: 0,
              }}
            ></Box>

            <Container
              className="button"
              sx={{
                display: "none",
                justifyContent: "center",
                alignItems: "center",
                height: "80%",
                position: "absolute",
                top: "50%",
                left: "50%",
                transform: "translate(-50%, -55%)",
                width: { md: "300px", sm: "3250px", xs: "350px" },
              }}
            >
              <Button
                color="success"
                sx={{
                  borderRadius: 35,
                  backgroundColor: "black",
                  padding: "18px 36px",
                  fontSize: "18px",
                }}
                variant="contained"
              >
                Demo
              </Button>
            </Container>
          </Box>
        </Grid>

        <Grid md={4} sm={6} xs={12}>
          <Box
            display={"flex"}
            justifyContent={"center"}
            position={"relative"}
            sx={{
              "& .button": {
                display: "none",
              },
              "&:hover .button": {
                display: "flex",
                backdropFilter: "blur(20px)",
              },
            }}
          >
            <Box
              src={card3}
              component={"img"}
              sx={{
                borderRadius: "20px",
                width: { md: "300px", sm: "3250px", xs: "350px" },
                marginBottom: "20px",
                zIndex: 0,
              }}
            ></Box>

            <Container
              className="button"
              sx={{
                display: "none",
                justifyContent: "center",
                alignItems: "center",
                height: "80%",
                position: "absolute",
                top: "50%",
                left: "50%",
                transform: "translate(-50%, -55%)",
                width: { md: "300px", sm: "3250px", xs: "350px" },
              }}
            >
              <Button
                color="success"
                sx={{
                  borderRadius: 35,
                  padding: "18px 36px",
                  fontSize: "18px",
                }}
                variant="contained"
              >
                Demo
              </Button>
            </Container>
          </Box>
        </Grid>
      </Grid>
    </Container>
  );
}
