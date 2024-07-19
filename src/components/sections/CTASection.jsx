import React, {useState} from "react";
import Link from 'next/link';
import styles from "../../styles/scss/sections.module.scss"; // Adjust the import based on your file structure
import SurveyModal from './SurveyModal';


const CTASection = () => {
    const [showSurvey, setShowSurvey] = useState(false);
    const handleShowSurvey = () => setShowSurvey(true);
    const handleCloseSurvey = () => setShowSurvey(false);

    return (
        <div className={styles.parallaxSection}>
            <div className={styles.overlay}></div>
            <div className={styles.content}>
                <h1 className={styles.heading}>Revolutionize Your<br /> Water Experience</h1>
                <p className={styles.subtitle}>Discover our advanced water filtration system.</p>
                <Link onClick={handleShowSurvey} className="onovo-btn onovo-hover-btn" href={""} passHref>
                    <i className="arrow">
                        <span />
                    </i>
                    <span>Book Now</span>
                </Link>
            </div>
            <SurveyModal show={showSurvey} handleClose={handleCloseSurvey} />
        </div>
    );
};

export default CTASection;
