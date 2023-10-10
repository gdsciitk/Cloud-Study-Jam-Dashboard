import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

import { AppBar, Avatar, Container, Divider, IconButton, Switch, Toolbar } from "@mui/material";
import ShowChartIcon from '@mui/icons-material/ShowChart';
import styles from "./navbar.module.css"
import ThemeSwitcher from "../ThemeSwitcher";
import Searchbar from "../Searchbar";
import MenuIcon from '@mui/icons-material/Menu';

import Popover from '@mui/material/Popover';
import Typography from '@mui/material/Typography';
import MenuItem from '@mui/material/MenuItem';
import Button from '@mui/material/Button';



export default function Navbar({ handleThemeChange, toggleSidebar}) {
    const [isSmallScreen, setIsSmallScreen] = useState(window.innerWidth <= 768);

    const handleResize = () => {
        setIsSmallScreen(window.innerWidth <= 768);
    };

    useEffect(() => {
        window.addEventListener('resize', handleResize);
        handleResize();
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    const [anchorEl, setAnchorEl] = useState(null);

    const handleAvatarClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleAvatarClose = () => {
        setAnchorEl(null);
    };

    return (
        <AppBar position="fixed" sx={{ zIndex: (theme) => theme.zIndex.drawer + 1 }}>
            <Toolbar>
                <Container sx={{ flexGrow: 1, marginLeft: 0, display: "flex", alignItems: "center" }}>
                    {isSmallScreen && <IconButton
                        color="inherit"
                        aria-label="Open Menu"
                        edge="start"
                        onClick={toggleSidebar} 
                    >
                        <MenuIcon/> 
                    </IconButton>}
                    <div>
                    <img src="/gdsciitklogo.png" style={{width: "28rem", height: "55px", padding: "8px 0px 2px"}}/>
                    </div>
                </Container>
                <ThemeSwitcher handleThemeChange={handleThemeChange} />
                <Popover
                    open={Boolean(anchorEl)}
                    anchorEl={anchorEl}
                    onClose={handleAvatarClose}
                    anchorOrigin={{
                        vertical: 'bottom',
                        horizontal: 'right',
                    }}
                    transformOrigin={{
                        vertical: 'top',
                        horizontal: 'right',
                    }}
                >
                    <MenuItem><Link to="/login" style={{ textDecoration: 'none', color: 'inherit' }}> Logout</Link></MenuItem>
                </Popover>
            </Toolbar>
        </AppBar>
    );
}
