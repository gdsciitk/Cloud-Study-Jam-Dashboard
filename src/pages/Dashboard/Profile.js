import React from 'react'
import { useTheme } from "@mui/material/styles";
import { Box } from '@mui/material';

export default function Hero() {
    const theme = useTheme();
    return (
            <div class="ProfileBox">
                {/* <Box pb={2}>
                    {theme.palette.mode  === 'dark' ? <img src='/welcomeDARK.png' style={{ width: "100%" }} /> : <img src='/welcomeLIGHT.png' style={{ width: "100%" }} />}
                </Box> */}
            </div>
        )
    }