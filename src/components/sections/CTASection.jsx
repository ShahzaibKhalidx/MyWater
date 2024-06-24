import React from "react";
import Link from 'next/link';
import styles from "../../styles/scss/sections.module.scss"; // Adjust the import based on your file structure

const CTASection = () => {
    return (
        <div className={styles.parallaxSection}>
            <div className={styles.overlay}></div>
            <div className={styles.content}>
                <h1 className={styles.heading}>Revolutionize Your<br/> Water Experience</h1>
                <p className={styles.subtitle}>Discover our advanced water filtration system.</p>
                <Link className="onovo-btn onovo-hover-btn" href="/products" passHref>
                    <i className="arrow">
                        <span />
                    </i>
                    <span>Book Now</span>
                </Link>
            </div>
        </div>
    );
};

export default CTASection;
