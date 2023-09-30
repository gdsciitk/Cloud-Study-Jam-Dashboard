import React from "react";
import styles from "./chartStyles.module.css";

import { Bar } from "react-chartjs-2";
import { Chart as ChartJS } from "chart.js/auto";
import { expandedBarChartData } from "../../data";
import { Card } from "@mui/material";

function ExpandedBarChart() {
    const chartData = {
        labels: expandedBarChartData.map((data) => data.year),
        datasets: [
            {
                label: "Users Gained",
                data: expandedBarChartData.map((data) => data.userGain),
                backgroundColor: [
                    "#694BDB"
                ],
                borderWidth: 0,
            },
            {
                label: "Users Lost",
                data: expandedBarChartData.map((data) => data.userLost * 10),
                backgroundColor: [
                    "#2BEBC8"
                ],
                borderWidth: 0,
            },
        ],
    };

    return (
        <Card className={styles.expandedBarChart}>
            <p className={styles.chartTitle}>ExpandedBarChart</p>
            <Bar data={chartData} />
        </Card>
    );
}

export default ExpandedBarChart;
