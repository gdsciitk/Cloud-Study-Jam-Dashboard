import React from "react";
import styles from "./chartStyles.module.css";
import { Chart as ChartJS } from "chart.js/auto";
import { Doughnut } from "react-chartjs-2";
import { doughnutChartData } from "../../data";
import { Card } from "@mui/material";

function PieChart() {
    const chartData = {
        labels: doughnutChartData.map((data) => data.year),
        datasets: [
            {
                label: "Users Gained",
                data: doughnutChartData.map((data) => data.userGain),
                backgroundColor: [
                    "#FF7777",
                    "#694BDB",
                    "#2BEBC8",
                ],
                borderWidth: 0,
            },
        ],
    };

    return (
        <Card className={styles.pieChart}>
            <div className={styles.header}>
                <p className={styles.chartTitle}>PieChart</p>
                <p className={styles.updates}><span><svg width="15" height="16" viewBox="0 0 15 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M0 8L7.34766 0.652344L14.6953 8L13.3633 9.28906L8.25 4.17578V15.3477H6.44531V4.17578L1.28906 9.28906L0 8Z" fill="#06AA8D" />
                </svg>
                </span>1.10% since yesterday</p>
            </div>
            <div className={styles.doughnutChart}>
                <Doughnut data={chartData} />
            </div>
        </Card>
    );
}

export default PieChart;