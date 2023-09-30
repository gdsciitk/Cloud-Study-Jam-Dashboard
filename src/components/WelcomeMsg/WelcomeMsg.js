import React from "react";
import rightColumnImg from "../../assets/rightColumnImg.png";
import styles from "./welcomeMsg.module.css"

export default function WelcomeMsg() {
    return (
        <div className={styles.welcomeDiv}>
            <div className={styles.details}>
                <p className={styles.heading}>Welcome to your dashboard!</p>
                <p className={styles.description}>Try our new Admin Dashboard Template, build with live Ant-Design components. Customize it to your needs and release to production!</p>
            </div>
            <img className={styles.rightImg} src={rightColumnImg} />
        </div>
    );
}