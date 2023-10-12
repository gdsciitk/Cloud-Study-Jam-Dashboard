import React from 'react';
import IconButton from '@mui/material/IconButton';
import Brightness4Icon from '@mui/icons-material/Brightness4';
import Brightness7Icon from '@mui/icons-material/Brightness7';
import { useTheme } from "@mui/material/styles";

export default function ThemeSwitcher({ handleThemeChange }) {
    const theme = useTheme();
    return (
        <IconButton sx={{ mr: 1 }} onClick={handleThemeChange}>
            {theme.palette.mode  === 'dark' ? <Brightness7Icon /> : <Brightness4Icon />}
        </IconButton>
    );
}