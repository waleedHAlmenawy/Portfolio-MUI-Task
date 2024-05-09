import { SpaceBar } from '@mui/icons-material'
import { Box, Container, Divider, Grid, LinearProgress, Stack, Typography } from '@mui/material'
import React from 'react'

export default function Section3() {
    return (
        <Container sx={{
            marginTop: '80px',
            marginBottom: '80px'
        }}>
            <Typography variant='h4' marginBottom='40px'><Box display={'inline'} color={'#2e7d32'}>My</Box> Resume</Typography>

            <Grid container spacing={2}>
                <Grid item md={4} sm={6} xs={12}>
                    <Box border='1px solid gray' padding='30px' borderRadius='10px'>
                        <Typography variant='h5' marginBottom='40px' sx={{
                            borderBottom: '2px solid',
                            borderImage: 'linear-gradient(to right, #2e7d32 10%, transparent 10%) 100% 1;'
                        }}>
                            Expertise
                        </Typography>

                        <Box>
                            <Typography variant='h6' marginBottom='20px' color={'#2e7d32'} fontSize={'20px'}>
                                2023 - Present
                            </Typography>

                            <Typography variant='h6' marginBottom='20px' color='gray' fontSize={'16px'} fontWeight={'400'}>
                                ITI Trainee <br></br>
                            </Typography>

                            <Typography variant='h7' marginBottom='20px' color='gray' fontSize={'16px'} fontWeight={'300'}>
                                Trainee at ITI, experienced in various projects using diverse technologies, such as building an e-commerce website with Angular, Node.js, and MongoDB. Gained valuable soft skills along the way
                            </Typography>

                            <Divider variant="middle" sx={{
                                marginY: '20px'
                            }} />
                        </Box>

                        <Box>
                            <Typography variant='h6' marginBottom='20px' color={'#2e7d32'} fontSize={'20px'}>
                                2022 - 2023
                            </Typography>

                            <Typography variant='h6' marginBottom='20px' color='gray' fontSize={'16px'} fontWeight={'400'}>
                                Quality Control Engineer <br></br>
                            </Typography>

                            <Typography variant='h7' marginBottom='20px' color='gray' fontSize={'16px'} fontWeight={'300'}>
                                SE Wiring System Egypt (SEWS)
                                <br />
                                My primary responsibility involved meticulously examining cable samples across various devices to ensure consistent
                                adherence to rigorous standards
                            </Typography>

                            <Divider variant="middle" sx={{
                                marginY: '20px'
                            }} />
                        </Box>

                        <Box>
                            <Typography variant='h6' marginBottom='20px' color={'#2e7d32'} fontSize={'20px'}>
                                Jun, 2021 - May, 2021
                            </Typography>

                            <Typography variant='h6' marginBottom='20px' color='gray' fontSize={'16px'} fontWeight={'400'}>
                                Motion Graphic Designer <br></br>
                            </Typography>

                            <Typography variant='h7' marginBottom='20px' color='gray' fontSize={'16px'} fontWeight={'300'}>
                                Creating graphics and two-dimensional and three-dimensional animation from conceptualization to the final product
                            </Typography>
                        </Box>
                    </Box>
                </Grid>

                <Grid item md={4} sm={6} xs={12}>
                    <Box border='1px solid gray' padding='30px' borderRadius='10px'>
                        <Typography variant='h5' marginBottom='40px' sx={{
                            borderBottom: '2px solid',
                            borderImage: 'linear-gradient(to right, #2e7d32 10%, transparent 10%) 100% 1;'
                        }}>
                            Education
                        </Typography>

                        <Box>
                            <Typography variant='h6' marginBottom='20px' color={'#2e7d32'} fontSize={'20px'}>
                                2023 - Present
                            </Typography>

                            <Typography variant='h6' marginBottom='20px' color='gray' fontSize={'16px'} fontWeight={'400'}>
                                Information Technology Institute <br></br>
                            </Typography>

                            <Typography variant='h7' marginBottom='20px' color='gray' fontSize={'16px'} fontWeight={'300'}>
                                9-months Professional Training in Web & UI Development
                            </Typography>

                            <Divider variant="middle" sx={{
                                marginY: '20px'
                            }} />
                        </Box>

                        <Box>
                            <Typography variant='h6' marginBottom='20px' color={'#2e7d32'} fontSize={'20px'}>
                                May, 2023 - Sep, 2023
                            </Typography>

                            <Typography variant='h6' marginBottom='20px' color='gray' fontSize={'16px'} fontWeight={'400'}>
                                Holberton School <br></br>
                            </Typography>

                            <Typography variant='h7' marginBottom='20px' color='gray' fontSize={'16px'} fontWeight={'300'}>
                                ALX Africa, Software Engineering Programme
                            </Typography>

                            <Divider variant="middle" sx={{
                                marginY: '20px'
                            }} />
                        </Box>

                        <Box>
                            <Typography variant='h6' marginBottom='20px' color={'#2e7d32'} fontSize={'20px'}>
                                2018 - 2022
                            </Typography>

                            <Typography variant='h6' marginBottom='20px' color='gray' fontSize={'16px'} fontWeight={'400'}>
                                Faculty of Commerce, Port Said University <br></br>
                            </Typography>

                            <Typography variant='h7' marginBottom='20px' color='gray' fontSize={'16px'} fontWeight={'300'}>
                                Bachelor of Commerce, Accounting Department
                            </Typography>
                        </Box>
                    </Box>
                </Grid>

                <Grid item md={4} xs={12}>
                    <Box border='1px solid gray' padding='30px' borderRadius='10px' >
                        <Typography variant='h5' marginBottom='40px' sx={{
                            borderBottom: '2px solid',
                            borderImage: 'linear-gradient(to right, #2e7d32 10%, transparent 10%) 100% 1;'
                        }}>
                            Skills
                        </Typography>

                        <Stack spacing={1}>
                            <Box>
                                <Typography fontWeight={'300'} color={'grey'}>JavaScript</Typography>

                                <Box backgroundColor='#e0e0e0' borderRadius={'20px'}>
                                    <Box height={'5px'} width={'80%'} borderRadius={'20px'} sx={{
                                        backgroundColor: '#2e7d32',
                                    }}></Box>
                                </Box>
                            </Box>

                            <Box>
                                <Typography fontWeight={'300'} color={'grey'}>TypeScript</Typography>

                                <Box backgroundColor='#e0e0e0' borderRadius={'20px'}>
                                    <Box height={'5px'} width={'65%'} borderRadius={'20px'} sx={{
                                        backgroundColor: '#2e7d32',
                                    }}></Box>
                                </Box>
                            </Box>
                            <Box>
                                <Typography fontWeight={'300'} color={'grey'}>Angular</Typography>

                                <Box backgroundColor='#e0e0e0' borderRadius={'20px'}>
                                    <Box height={'5px'} width={'70%'} borderRadius={'20px'} sx={{
                                        backgroundColor: '#2e7d32',
                                    }}></Box>
                                </Box>
                            </Box>
                            <Box>
                                <Typography fontWeight={'300'} color={'grey'}>React.js</Typography>

                                <Box backgroundColor='#e0e0e0' borderRadius={'20px'}>
                                    <Box height={'5px'} width={'65%'} borderRadius={'20px'} sx={{
                                        backgroundColor: '#2e7d32',
                                    }}></Box>
                                </Box>
                            </Box>
                            <Box>
                                <Typography fontWeight={'300'} color={'grey'}>Node.js</Typography>

                                <Box backgroundColor='#e0e0e0' borderRadius={'20px'}>
                                    <Box height={'5px'} width={'70%'} borderRadius={'20px'} sx={{
                                        backgroundColor: '#2e7d32',
                                    }}></Box>
                                </Box>
                            </Box>
                            <Box>
                                <Typography fontWeight={'300'} color={'grey'}>Nest.js</Typography>

                                <Box backgroundColor='#e0e0e0' borderRadius={'20px'}>
                                    <Box height={'5px'} width={'50%'} borderRadius={'20px'} sx={{
                                        backgroundColor: '#2e7d32',
                                    }}></Box>
                                </Box>
                            </Box>
                            <Box>
                                <Typography fontWeight={'300'} color={'grey'}>MongoDB</Typography>

                                <Box backgroundColor='#e0e0e0' borderRadius={'20px'}>
                                    <Box height={'5px'} width={'77%'} borderRadius={'20px'} sx={{
                                        backgroundColor: '#2e7d32',
                                    }}></Box>
                                </Box>
                            </Box>
                            <Box>
                                <Typography fontWeight={'300'} color={'grey'}>HTML5</Typography>

                                <Box backgroundColor='#e0e0e0' borderRadius={'20px'}>
                                    <Box height={'5px'} width={'80%'} borderRadius={'20px'} sx={{
                                        backgroundColor: '#2e7d32',
                                    }}></Box>
                                </Box>
                            </Box>
                            <Box>
                                <Typography fontWeight={'300'} color={'grey'}>CSS3</Typography>

                                <Box backgroundColor='#e0e0e0' borderRadius={'20px'}>
                                    <Box height={'5px'} width={'60%'} borderRadius={'20px'} sx={{
                                        backgroundColor: '#2e7d32',
                                    }}></Box>
                                </Box>
                            </Box>
                            <Box>
                                <Typography fontWeight={'300'} color={'grey'}>Bootstrap</Typography>

                                <Box backgroundColor='#e0e0e0' borderRadius={'20px'}>
                                    <Box height={'5px'} width={'80%'} borderRadius={'20px'} sx={{
                                        backgroundColor: '#2e7d32',
                                    }}></Box>
                                </Box>
                            </Box>
                        </Stack>
                    </Box>

                    <Box border='1px solid gray' padding='30px' borderRadius='10px' marginTop={'40px'}>
                        <Typography variant='h5' marginBottom='40px' sx={{
                            borderBottom: '2px solid',
                            borderImage: 'linear-gradient(to right, #2e7d32 10%, transparent 10%) 100% 1;'
                        }}>
                            Languages
                        </Typography>

                        <Stack spacing={1}>
                            <Box>
                                <Typography fontWeight={'300'} color={'grey'}>Arabic</Typography>

                                <Box backgroundColor='#e0e0e0' borderRadius={'20px'}>
                                    <Box height={'5px'} width={'90%'} borderRadius={'20px'} sx={{
                                        backgroundColor: '#2e7d32',
                                    }}></Box>
                                </Box>
                            </Box>
                            <Box>
                                <Typography fontWeight={'300'} color={'grey'}>English</Typography>

                                <Box backgroundColor='#e0e0e0' borderRadius={'20px'}>
                                    <Box height={'5px'} width={'66%'} borderRadius={'20px'} sx={{
                                        backgroundColor: '#2e7d32',
                                    }}></Box>
                                </Box>
                            </Box>
                        </Stack>
                    </Box>
                </Grid>
            </Grid>
        </Container>
    )
}
