import { Box } from '@mui/material';
import React from 'react';
import { useTheme } from "@mui/material/styles";

export default function Hero() {
  const theme = useTheme();
  return (
    <div>
      <Box pb={2}>
        {theme.palette.mode  === 'dark' ? <img src='/heroDARK.png' style={{ width: "100%" }} /> : <img src='/heroLIGHT.png' style={{ width: "100%" }} />}
      </Box>
    </div>
  );
}
