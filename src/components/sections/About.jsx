import Data from "@data/sections/about.json";
import Link from "next/link";
import { useState } from 'react';
import SurveyModal from './SurveyModal';

const AboutSection = () => {

  const [showSurvey, setShowSurvey] = useState(false);
  const handleShowSurvey = () => setShowSurvey(true);
  const handleCloseSurvey = () => setShowSurvey(false);

    return (
      <>
        {/* Onovo About */}
        <section className="onovo-section gap-bottom-120 gap-top-120" style={{backgroundColor:'#214D9E'}}>
          <div className="container">
            <div className="row">
              <div className="col-xs-12 col-sm-12 col-md-12 col-lg-8">

                <div className="row">
                  <div className="col-xs-12 col-sm-12 col-md-8 col-lg-12">

                    {/* Heading */}
                    <div className="onovo-heading gap-bottom-40">
                      <div className="onovo-subtitle-1 text-white">
                        <span>{Data.subtitle}</span>
                      </div>
                      <h2 className="onovo-title-2 text-white">
                        <span dangerouslySetInnerHTML={{__html: Data.title}} />
                      </h2>
                    </div>

                  </div>
                  <div className="col-xs-12 col-sm-12 col-md-4 col-lg-12 hide-on-desktop gap-bottom-60">

                    {/* Number */}
                    <div className="onovo-number onovo-circle-text mrg-left">
                      <div className="num onovo-text-white">
                        <span>{Data.number.value}</span>
                      </div>
                      <div className="label onovo-text-white onovo-circle-text-label text-white">
                        {Data.number.label}
                      </div>
                    </div>

                  </div>
                </div>

                {/* Description */}
                <div className="row">
                  {Data.items.map((item, key) => (
                  <div key={`about-item-${key}`} className="col-xs-12 col-sm-12 col-md-6 col-lg-6">
                    <h5 className="text-uppercase text-white">{item.title}</h5>
                    <p className="text-white" dangerouslySetInnerHTML={{__html: item.text}} />
                    {item.button != undefined &&
                    <Link className="onovo-btn onovo-hover-btn" style={{backgroundColor:'#00F6FF'}} href={"/about"}>
                      <i className="arrow"><span /></i>
                      <span>{item.button.label}</span>
                    </Link>
                    }
                  </div>
                  ))}
                </div>

              </div>
              <div className="col-xs-12 col-sm-12 col-md-12 col-lg-4 hide-on-mobile">

                {/* Number */}
                <div className="onovo-number onovo-circle-text mrg-right">
                  <div className="num onovo-text-white">
                    <span>{Data.number.value}</span>
                  </div>
                  <div className="label onovo-text-white onovo-circle-text-label">
                    {Data.number.label}
                  </div>
                </div>

              </div>
            </div>
          </div>
          <SurveyModal show={showSurvey} handleClose={handleCloseSurvey} />
        </section>
      </>
    );
};

export default AboutSection;