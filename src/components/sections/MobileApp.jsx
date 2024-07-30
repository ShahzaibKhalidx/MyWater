// components/ParallaxSection.js
import React from "react";
import Link from 'next/link';
import styles from "../../styles/scss/sections.module.scss"; // Adjust the import based on your file structure
import Image from "next/image"

const MobileApp = () => {
    const appData = {
        title: "Experience the Pinnacle of Pure Water", // Replace with the desired link
        imageUrl: "/images/services/app2.png",
        imageUrl2: "/images/services/app6.png" // Replace with actual path to image
    };
    return (
        <section className={styles.mobileSection}>
            <div className={styles.contentWrapper}>
                <div className={styles.textContent}>
                    <h1>Know Your Smart Technology</h1>
                    <p>
                        Our app makes you smarter with your water.
                    </p>
                    <div className={styles.pointers}>
                        <div className={styles.pointerItem}>
                            <i className="fa fa-check-circle" /> {/* Use Font Awesome or other icons */}
                            Real-time health status of filters
                        </div>
                        <div className={styles.pointerItem}>
                            <i className="fa fa-check-circle" /> {/* Use Font Awesome or other icons */}
                            Service history
                        </div>
                        <div className={styles.pointerItem}>
                            <i className="fa fa-check-circle" /> {/* Use Font Awesome or other icons */}
                            Billing
                        </div>
                        <div className={styles.pointerItem}>
                            <i className="fa fa-check-circle" /> {/* Use Font Awesome or other icons */}
                            Water quality scan
                        </div><div className={styles.pointerItem}>
                            <i className="fa fa-check-circle" /> {/* Use Font Awesome or other icons */}
                            Amount of glasses consumed by the user
                        </div><div className={styles.pointerItem}>
                            <i className="fa fa-check-circle" /> {/* Use Font Awesome or other icons */}
                            Number of bottles saved
                        </div>
                    </div>
                <div className={styles.storeLinks}>
                        <Link href="https://apps.apple.com/us/app/mywater-app/id1464485043" passHref legacyBehavior>
                            <a target="_blank" rel="noopener noreferrer">
                                <Image
                                    src="/images/appstore.png"
                                    alt="Download on Google Play"
                                    width={120}
                                    height={50}
                                />
                            </a>
                        </Link>
                        <Link href="https://play.google.com/store/apps/details?id=com.mywater.customer.app&pli=1" passHref legacyBehavior>
                            <a target="_blank" rel="noopener noreferrer">
                                <Image
                                    src="/images/playstore.png"
                                    alt="Download on the App Store"
                                    width={120}
                                    height={50}
                                />
                            </a>
                        </Link>
                    </div>
                </div>
                <div className={styles.imageWrapper}>
                    {/* <img src={appData.imageUrl} alt="Phone app 1" className={styles.phoneImage} /> */}
                    <img src={appData.imageUrl2} alt="Phone app 2" className={styles.phoneImage2} />
                </div>
            </div>
        </section>
    );
};

export default MobileApp;
