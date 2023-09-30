import React from "react";
import { Bar } from "react-chartjs-2";
import { Chart as ChartJS } from "chart.js/auto";
import styles from "./chartStyles.module.css";
import { barChartData } from "../../data";
import { Card } from "@mui/material";

function BarChart() {
    const chartData = {
        labels: barChartData.map((data) => data.year),
        datasets: [
            {
                label: "Users Gained",
                data: barChartData.map((data) => data.userGain),
                backgroundColor: [
                    "#694BDB"
                ],
                borderWidth: 0,
            },
        ],
    };

    return <Card className={styles.barChart1}>
        <p className={styles.chartTitle}>Bar Chart</p>
        <Bar data={chartData} />
    </Card>
}

export default BarChart;
