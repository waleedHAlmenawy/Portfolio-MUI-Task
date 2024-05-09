import React from 'react'

/* Icons */

import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import XIcon from '@mui/icons-material/X';
import FacebookIcon from '@mui/icons-material/Facebook';
import { Link, Stack } from '@mui/material';

export default function Icons() {
    return (
        <Stack
            padding="30px"
            direction="row"
            spacing={2}
            justifyContent='center'
            color='#2e7d32'
        >
            <Link href="https://github.com/waleedHAlmenawy" color='inherit' underline="none" target="_blank"><GitHubIcon /></Link>
            <Link href="https://www.linkedin.com/in/waleed-almenawy" color='inherit' underline="none" target="_blank"><LinkedInIcon /></Link>
            <Link href="https://twitter.com/waleed_almenawy" color='inherit' underline="none" target="_blank"><XIcon /></Link>
            <Link href="https://www.facebook.com/WaleeedAlmenawy" color='inherit' underline="none" target="_blank"><FacebookIcon /></Link>
        </Stack>
    )
}
