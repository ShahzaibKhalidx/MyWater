import Link from "next/link";
import appData from "@data/app.json";
import { useEffect } from "react";
import ImageView from "@components/ImageView";
import { footerSticky } from "@common/utilits";

const DefaultFooter = () => {
  useEffect(() => {
    footerSticky();
  }, []);

  return (
    <>
        {/* Footer */}
        <footer className="onovo-footer footer--dark">
            <div className="footer--default">
                <div className="container">
                    {/* ROW Starts */}
                    <div className="row">
                        <div className="col-xs-12 col-sm-12 col-md-6 col-lg-3">

                            {/* Description */}
                            <div className="onovo-text onovo-text-white">
                                <h5>MYWATER (Pvt.) Ltd.</h5>
                                <p style={{"opacity": "0.8"}}>Think Smart | Drink Smart.</p>
                                {/* <p style={{"opacity": "0.8"}}><strong>021-11-11-WATER (92837)</strong></p> */}
                                <a href="tel:021-11-11-WATER(92837)" className="onovo-lnk lnk--white" target="_blank">Helpline: 021-11-11-WATER (92837)</a><br />
                                <a href="tel:+923112522543" className="onovo-lnk lnk--white" target="_blank">For Sales: +92 (311) 252 2543</a><br />
                            </div>

                        </div>
                        <div className="col-xs-12 col-sm-12 col-md-6 col-lg-3">

                            {/* Description */}
                            <div className="onovo-text onovo-text-white">
                                <h5>Karachi</h5>
                                <p style={{"opacity": "0.8"}}>1-D-28, Sector 30, Korangi <br />Industrial Area, Karachi </p>
                                <p style={{"opacity": "0.8"}}>
                                    {/* <a href="tel:+10204302973" className="onovo-lnk lnk--white" target="_blank">+92 (318) 2062676</a><br /> */}
                                    {/* <a href="mailto:username@domain.com" className="onovo-lnk lnk--white" target="_blank">username@domain.com</a> */}
                                </p>
                            </div>

                        </div>
                        <div className="col-xs-12 col-sm-12 col-md-6 col-lg-3 ">

                            {/* Description */}
                            <div className="onovo-text onovo-text-white">
                                <h5>Islamabad</h5>
                                <p style={{"opacity": "0.8"}}>60-A, F-6, Jinnah Avenue <br />Blue Area, Islamabad </p>
                                <p style={{"opacity": "0.8"}}>
                                    {/* <a href="tel:+10204302973" className="onovo-lnk lnk--white" target="_blank">+92 (318) 2986945</a><br /> */}
                                    {/* <a href="mailto:username@domain.com" className="onovo-lnk lnk--white" target="_blank">username@domain.com</a> */}
                                </p>
                            </div>

                        </div>
                        <div className="col-xs-12 col-sm-12 col-md-6 col-lg-3 ">

                            {/* Description */}
                            <div className="onovo-text onovo-text-white">
                                <h5>Lahore</h5>
                                <p style={{"opacity": "0.8"}}>344-S, Quaid-e-Azam Industrial Estate, <br />Kot Lakhpat, Lahore 54000 </p>
                                <p style={{"opacity": "0.8"}}>
                                    {/* <a href="tel:+923700216915" className="onovo-lnk lnk--white" target="_blank">+92 (370) 0216915</a><br /> */}
                                    {/* <a href="mailto:username@domain.com" className="onovo-lnk lnk--white" target="_blank">username@domain.com</a> */}
                                </p>
                            </div>

                        </div>
                        {/* <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">

                            
                            <div className="row">
                                {appData.footer.gallery.map((item, key) => (
                                <div key={`fgallery-item-${key}`} className="col-4 col-xs-6 col-sm-6 col-md-2 col-lg-2">
                                    <figure className="gallery-item">
                                        <a href={item.image} title={item.title}>
                                            <img src={item.image} alt={item.alt} />
                                        </a>
                                    </figure>
                                </div>
                                ))}
                            </div>

                        </div> */}
                    </div>
                    {/* row ends */}

                    <div className="separator"></div>

                    <div className="row">
                        
                        <div className="col-xs-12 col-sm-12 col-md-6 col-lg-6 align-left">
                            {/* Social */}
                            <div className="onovo-social-1 onovo-social-active">
                                <ul>
                                    {appData.social.map((item, key) => (
                                    <li key={`fsocial-item-${key}`}>
                                        <a className="onovo-social-link onovo-hover-2" href={item.link} title={item.title} target="_blank">
                                            <i className={item.icon}></i>
                                        </a>
                                    </li>
                                    ))}
                                </ul>
                            </div>

                        </div>
                        <div className="col-xs-12 col-sm-12 col-md-6 col-lg-6 align-self-center align-right">

                            {/* Copyright */}
                            <div className="copyright onovo-text-white">
                                <div dangerouslySetInnerHTML={{__html: appData.footer.copy}} />
                            </div>

                        </div>
                    </div>

                </div>
            </div>
        </footer>

        <ImageView />
    </>
  );
};
export default DefaultFooter;
