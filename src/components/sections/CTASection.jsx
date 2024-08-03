import React, {useState} from "react";
import Link from 'next/link';
import styles from "../../styles/scss/sections.module.scss"; // Adjust the import based on your file structure
import SurveyModal from './SurveyModal';
// import SavingsCalculatorModal from "./SavingCalculatorModal";


const CTASection = () => {
    const [showSurvey, setShowSurvey] = useState(false);
    // const [modalShow, setModalShow] = useState(false);
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
                {/* <Link onClick={() => setModalShow(true)} className="onovo-btn onovo-hover-btn" href={""} passHref>
                    <i className="arrow">
                        <span />
                    </i>
                    <span>Saving Calculator</span>
                </Link> */}
            </div>
            <SurveyModal show={showSurvey} handleClose={handleCloseSurvey} />
            {/* <SavingsCalculatorModal show={modalShow} handleClose={() => setModalShow(false)}/> */}
        </div>
    );
};

export default CTASection;
