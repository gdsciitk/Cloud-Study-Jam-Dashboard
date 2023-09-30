import React, { useState, useEffect } from 'react';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Toolbar from '@mui/material/Toolbar';
import Navbar from '../../components/Navbar/Navbar';
import Sidebar from '../../components/Sidebar/Sidebar';
import { Grid } from '@mui/material';
import BarChart from '../../components/Charts/BarChart';
import UpdateChart from '../../components/Charts/UpdateChart';
import ExpandedBarChart from '../../components/Charts/ExpandedBarChart';
import PieChart from '../../components/Charts/PieChart';
import WelcomeMsg from '../../components/WelcomeMsg/WelcomeMsg';
import CustomizedTables from '../../components/Leaderboard/Leaderboard';

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
            <Navbar handleThemeChange={handleThemeChange} toggleSidebar={togglesmallSidebar}/>
            {isSidebarOpen && <Sidebar />}
            <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
                <Toolbar />
                <Grid container spacing={2}>
                    <Grid item xs={12} md={7}> 
                        <WelcomeMsg />
                    </Grid>
                    <Grid item xs={12} md={5}> 
                        <BarChart />
                    </Grid>
                    <Grid item xs={12} md={3.5}> 
                        <UpdateChart index={0} />
                    </Grid>
                    <Grid item xs={12} md={3.5}> 
                        <UpdateChart index={1} />
                    </Grid>
                    <Grid item xs={12} md={5}> 
                        <UpdateChart index={2} />
                    </Grid>
                    <Grid item xs={12} md={7}> 
                        <ExpandedBarChart />
                    </Grid>
                    <Grid item xs={12} md={5}> 
                        <PieChart />
                    </Grid>
                </Grid>
                <CustomizedTables/>
            </Box>  
        </Box>
    );
}
