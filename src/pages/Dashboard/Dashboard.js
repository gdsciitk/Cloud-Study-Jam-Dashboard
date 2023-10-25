import React, { useState, useEffect } from 'react';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Toolbar from '@mui/material/Toolbar';
import Navbar from '../../components/Navbar/Navbar';
import Sidebar from '../../components/Sidebar/Sidebar';
import { Grid } from '@mui/material';
import CustomizedTables from '../../components/Leaderboard/Leaderboard';
import Hero from '../../components/Hero';
import Searchbar from '../../components/Searchbar';
import styles from './dashboard.css'
import Profile from './Profile'
import Typography from '@mui/material/Typography'; // Import the Typography component

export default function Dashboard({ handleThemeChange }) {
    const [isSidebarOpen, setIsSidebarOpen] = useState(true);
    

    const toggleSidebar = () => {
        if (window.innerWidth <= 768) {
            setIsSidebarOpen(false);
        } else {
            setIsSidebarOpen(true);
        }
    };

    useEffect(() => {
        window.addEventListener('resize', toggleSidebar);
        toggleSidebar();
        
        return () => {
            window.removeEventListener('resize', toggleSidebar);
        };
    }, []);

    const togglesmallSidebar = () => {
        setIsSidebarOpen(!isSidebarOpen);
    };

    return (
        <Box sx={{ display: 'flex' }}>
            <CssBaseline />
            <Navbar handleThemeChange={handleThemeChange} toggleSidebar={togglesmallSidebar} />
            {isSidebarOpen && <Sidebar />}
            <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
                <Toolbar />
                <Grid container spacing={1}>
                    <Grid item xs={12} md={12}>
                        <Hero />
                    </Grid>
                    <Grid item xs={12} md={12}> {/* Add this grid item for the date and time */}
                        <Typography variant="body2" color="textSecondary">
                            Last Updated: {new Date('2023-10-26 01:30:00').toLocaleString()}
                        </Typography>
                    </Grid>
                    <Profile />
                    <CustomizedTables />
                </Grid>
            </Box>
        </Box>
    );
}