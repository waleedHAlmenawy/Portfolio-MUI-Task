import { Box, Button, Container, Divider, Grid, Link, Stack, Typography } from "@mui/material";
import React from "react";
import Icons from "./shared/Icons";

/* Icons */
import DesignServicesIcon from '@mui/icons-material/DesignServices';
import CodeIcon from '@mui/icons-material/Code';
import AnimationIcon from '@mui/icons-material/Animation';

export default function Section2() {
  return (
    <Container
      sx={{
        marginTop: "60px",
      }}
    >
      <Grid container spacing={2}>
        <Grid item md={4} xs={12}>
          <Box padding="40px" border="0.5px solid gray" borderRadius="10px">
            <Typography variant="h4" fontWeight="100" sx={{
              borderBottom: '2px solid',
              borderImage: 'linear-gradient(to right, #2e7d32 20%, transparent 20%) 100% 1;'
            }}>
              Who am I ?
            </Typography>
            <Typography variant="h6" marginTop="40px">
              A Full Stack Developer Located In Our Lovely <Box display={'inline'} color={'#2e7d32'}>Earth</Box>
            </Typography>
            <Typography variant="h6" color="gray" marginTop="20px" fontWeight={'300'}>
              My goal is simple. <Box sx={{
                textTransform: "uppercase"
              }}>
                better than yesterday
              </Box>
            </Typography>


            <Button variant="outlined" size="medium" sx={{
              color: '#2e7d32',
              borderColor: '#2e7d32',
              borderRadius: '30px',
              marginTop: '30px'
            }}>
              Print My Resume
            </Button>
          </Box>
        </Grid>

        <Grid item md={4} xs={12}>
          <Box padding="40px" border="0.5px solid gray" borderRadius="10px">
            <Typography variant="h4" fontWeight="100" sx={{
              borderBottom: '2px solid',
              borderImage: 'linear-gradient(to right, #2e7d32 20%, transparent 20%) 100% 1;'
            }}>
              Personal Info
            </Typography>
            <Typography marginTop="40px" fontSize={'16px'} color="gray">
              <Box display={'inline'} color={'#2e7d32'}>Email: </Box><Link underline="none" href="mailto: waleed.almenawy@outlook.com" color={'inherit'}>waleed.almenawy@outlook.com</Link>
            </Typography>
            <Typography marginTop="10px" fontSize={'16px'} color="gray">
              <Box display={'inline'} color={'#2e7d32'}>Phone: </Box>+201503852538
            </Typography>
            <Typography marginTop="10px" fontSize={'16px'} color="gray">
              <Box display={'inline'} color={'#2e7d32'}>Birthdate : </Box>1999/01/09
            </Typography>
            <Typography marginTop="10px" fontSize={'16px'} color="gray">
              <Box display={'inline'} color={'#2e7d32'}>Location: </Box>Cairo, Egypt
            </Typography>

            <Icons />
          </Box>
        </Grid>

        <Grid item md={4} xs={12}>
          <Box padding="40px" border="0.5px solid gray" borderRadius="10px">
            <Typography variant="h4" fontWeight="100" sx={{
              borderBottom: '2px solid',
              borderImage: 'linear-gradient(to right, #2e7d32 20%, transparent 20%) 100% 1;'
            }}>
              My Expertise
            </Typography>

            <Stack spacing={2} marginTop={'40px'}>
              <Box>
                <Stack direction={'row'} spacing={2} alignItems={'center'}>
                  <CodeIcon sx={{
                    fontSize: '50px',
                    color: "#2e7d32"
                  }} />
                  <Divider orientation="vertical" flexItem color='#2e7d32'></Divider>
                  <Typography>Full Stack Development</Typography>
                </Stack>
              </Box>

              <Divider orientation="horizontal" flexItem color='grey' sx={{
                marginInline: '10px'
              }}></Divider>
              <Box>
                <Stack direction={'row'} spacing={2} alignItems={'center'}>
                  <DesignServicesIcon sx={{
                    fontSize: '50px',
                    color: "#2e7d32"
                  }} />
                  <Divider orientation="vertical" flexItem color='#2e7d32'></Divider>
                  <Typography>UI / UX Design</Typography>
                </Stack>
              </Box>

              <Divider orientation="horizontal" flexItem color='grey' sx={{
                marginInline: '10px'
              }}></Divider>
              <Box>
                <Stack direction={'row'} spacing={2} alignItems={'center'}>
                  <AnimationIcon sx={{
                    fontSize: '50px',
                    color: "#2e7d32"
                  }} />
                  <Divider orientation="vertical" flexItem color='#2e7d32'></Divider>
                  <Typography>Motion Graphics Design</Typography>
                </Stack>
              </Box>
            </Stack>

          </Box>
        </Grid>
      </Grid>
    </Container>
  );
}
