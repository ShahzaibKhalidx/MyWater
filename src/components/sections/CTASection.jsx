import React, { useEffect } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import styles from "../../styles/scss/sections.module.scss"; // Adjust the import based on your file structure

const CTASection = () => {
    // Static Data for CTA
    const ctaData = {
        title: "Revolutionize Your Water Experience",
        subtitle: "Unlock the ultimate purity and convenience with MyWater. Schedule your personalized consultation today and discover why MyWater is the superior choice for crystal-clear hydration.",
        buttonText: "Book Now",
        imageUrl: "/images/services/water.jpg", // Replace with actual path to image
        buttonLink: "/products", // Replace with the desired link
    };

    return (
        <section className={styles.ctaSection}>
            {/* Background Image */}
            <img
                src={ctaData.imageUrl}
                alt="CTA Background"
                className={styles.backgroundImage}
            />

            {/* Overlay */}
            <div className={styles.overlay}></div>

            {/* Content */}
            <div className={styles.content}>
                <motion.h1
                    className={styles.title}
                    initial={{ y: -50, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.8 }}
                >
                    {ctaData.title}
                </motion.h1>

                <motion.p
                    className={styles.subtitle}
                    initial={{ y: 50, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                >
                    {ctaData.subtitle}
                </motion.p>

                <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ duration: 0.5, delay: 0.4 }}
                >
                    {/* <Link href={ctaData.buttonLink} passHref>
                        <button className={styles.ctaButton}>{ctaData.buttonText}</button>
                    </Link> */}
                    {/* Button */}
                    <Link className="onovo-btn onovo-hover-btn" href={ctaData.buttonLink} passHref>
                        <i className="arrow">
                            <span />
                        </i>
                        <span>{ctaData.buttonText}</span>
                    </Link>
                </motion.div>
            </div>
        </section>
    );
};

export default CTASection;
