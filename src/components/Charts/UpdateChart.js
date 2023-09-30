import React from "react";
import styles from "./chartStyles.module.css";
import { Card } from "@mui/material";

function UpdateChart({ index }) {
    return (
        <Card className={styles.updateChart}>
            <div className={styles.content}>
                <p className={styles.chartTitle}>Update chart {index}</p>
                <p className={styles.numbers}>2,643</p>
                <p className={styles.updates}><span><svg width="15" height="16" viewBox="0 0 15 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M0 8L7.34766 0.652344L14.6953 8L13.3633 9.28906L8.25 4.17578V15.3477H6.44531V4.17578L1.28906 9.28906L0 8Z" fill="#06AA8D" />
                </svg>
                </span>1.10% since yesterday</p>
            </div>
            {
                index === 0 ? <svg width="175" height="175" viewBox="0 0 140 89" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M0 42.96C9.33333 56.68 18.6667 70.4 28 70.4C37.3333 70.4 46.6667 1.80005 56 1.80005C65.3333 1.80005 74.6667 71.38 84 71.38C93.3333 71.38 102.667 36.1 112 36.1C121.333 36.1 130.667 62.07 140 88.04" stroke="#FF7777" strokeWidth="2" />
                </svg>
                    : index === 1 ? <svg width="175" height="175" viewBox="0 0 140 75" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M0 39.0667C9.33333 40.7 18.6667 42.3333 28 42.3333C37.3333 42.3333 46.6667 42.3333 56 42.3333C65.3333 42.3333 74.6667 70.1 84 70.1C93.3333 70.1 102.667 1.5 112 1.5C121.333 1.5 130.667 38.25 140 75" stroke="#F3C522" strokeWidth="2" />
                    </svg>
                        : <svg width="175" height="175" viewBox="0 0 140 91" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M0 77.9333C9.33333 72.4889 18.6667 67.0444 28 58.3333C37.3333 49.6222 46.6667 25.6666 56 25.6666C65.3333 25.6666 74.6667 86.1 84 86.1C93.3333 86.1 102.667 1.16663 112 1.16663C121.333 1.16663 130.667 46.0833 140 91" stroke="#06AA8D" strokeWidth="2" />
                        </svg>

            }
        </Card>
    );
}

export default UpdateChart;
