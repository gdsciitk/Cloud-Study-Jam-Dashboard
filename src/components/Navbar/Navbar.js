import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

import { AppBar, Avatar, Container, Divider, IconButton, Switch, Toolbar } from "@mui/material";
import NotificationsIcon from '@mui/icons-material/Notifications';
import ShowChartIcon from '@mui/icons-material/ShowChart';
import styles from "./navbar.module.css"
import ThemeSwitcher from "../ThemeSwitcher";
import Searchbar from "./Searchbar";
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
                    <ShowChartIcon /><b>Tracker</b>
                    <Searchbar />
                </Container>
                <ThemeSwitcher handleThemeChange={handleThemeChange} />
                <IconButton sx={{ mr: 1 }}>
                    <NotificationsIcon />
                </IconButton>
                <Divider orientation="vertical" flexItem />
                <p className={styles.userName}>User Name</p>
                <Avatar
                    sx={{ width: 30, height: 30, cursor: 'pointer' }}
                    alt="User Name"
                    src="https://images.unsplash.com/photo-1613679074971-91fc27180061?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80"
                    onClick={handleAvatarClick}
                />
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
