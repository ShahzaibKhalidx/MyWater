import React, { useState,useEffect } from "react";
import Image from "next/image";
import Layouts from "@layouts/Layouts";
import Link from "next/link";
import ImageView from "@components/ImageView";
import { getSortedServicesData } from "@library/services";
import { useRouter } from 'next/router';
import { Swiper, SwiperSlide } from 'swiper/react';
import { sliderProps } from "@common/sliderProps";
import Col from 'react-bootstrap/Col';
import ListGroup from 'react-bootstrap/ListGroup';
import Row from 'react-bootstrap/Row';
import Tab from 'react-bootstrap/Tab';
import { Card } from 'react-bootstrap';
import SurveyModal from "@/src/components/sections/SurveyModal";
import SavingsCalculatorModal from "@/src/components/sections/SavingCalculatorModal";


import { getSortedProjectsData, getAllProjectsIds, getProjectData } from "@library/projects";

import {
  FacebookShareButton,
  LinkedinShareButton,
  PinterestShareButton,
  RedditShareButton,
  TwitterShareButton
} from "react-share";
import ComparisonChart from "@/src/components/sections/ComparisonChart";
import FAQs from "@/src/components/sections/FAQs";
import LogoSlider2 from "@/src/components/sections/LogoSlider2";
import Services4Section from "@/src/components/sections/Services4";

const ProjectDetail = (props) => {

  const [postData, setPostData] = useState(props.data);
  const router = useRouter();
  const [showSurvey, setShowSurvey] = useState(false);
  const handleShowSurvey = () => setShowSurvey(true);
  const handleCloseSurvey = () => setShowSurvey(false);
  const [modalShow, setModalShow] = useState(false);

  
  useEffect(() => {
    setPostData(props.data);
  }, [props.data]);

  let prev_id, next_id, prev_key, next_key = 0;
  props.projects.forEach(function (item, key) {
    if (item.id == postData.id) {
      prev_key = key - 1;
      next_key = key + 1;
    }
  })
  
  props.projects.forEach(function (item, key) {
    if (key == prev_key) {
      prev_id = item.id;
    }
    if (key == next_key) {
      next_id = item.id;
    }
  });

  const { asPath } = useRouter();
  const origin =
    typeof window !== 'undefined' && window.location.origin
      ? window.location.origin
      : '';
  const shareUrl = `${origin}${asPath}`;
  console.log(shareUrl);
  const faqContent = {
    items: [
      {
        "heading": "Do you deliver water bottles?",
        "content": "No, we do not deliver water. We purify the tap water to provide clean and safe drinking water."
      },
      {
        "heading": "What is the difference between MyWater® and other water brands?",
        "content": "MyWater® does not use any artificial infused minerals and is plastic free. Our minerals are naturally sourced which gives your water unique taste from other branded water brands"
      },
      {
        "heading": "What are the monthly charges?",
        "content": "The charges are as under: <br> 1.	Neo: PKR 3500/ PM- + Inclusive Tax (Under sink Unit) <br> 2.	Terra: PKR 4500/-PM +Inclusive Tax (Dispenser Unit)",
      },
      {
        "heading": "What are the payment options?",
        "content": "We have different payment options for customer’s ease. Payments can be made by following options: <br>1.	Kuickpay <br>2.	Cheques (Payable to MyWater®.pk) <br>3.	Bank Transfer <br>4.	Cash Collections <br>5.	Online Payment Through Master/Visa",
      },
    ]
  };
  const [promo, setPromo] = useState({});

  return (

    <Layouts header={3}>
      {/* <PageBanner pageTitle={postData.title} pageDesc={postData.type} /> */}
      {/* Onovo Project Detail */}
      <section className="onovo-section gap-top-140 projectDetailSection">
        <div className="container">
          <div className="row gap-bottom-80">
              {/* Project Info */}
            <div className="col-xs-12 col-sm-12 col-md-12 col-lg-6">
              {/* Image */}
              <section className="onovo-section onovo-hero hero--product">
                {/* Hero swiper */}
                <Swiper
                  {...sliderProps.heroProduct}
                  className="swiper-container js-hero-slider"
                  key={postData.id}
                >
                  <div className="swiper-wrapper">
                    {postData.slides.items.map((item, key) => (
                      <SwiperSlide key={`h2s-slide-${key}`} className="swiper-slide">
                        <div className="onovo-hero-slide-item">
                          {item.video == undefined &&
                            <div className="image" >
                              <Image src={item.image.desktop} fill={true}/>
                              {/* <div className="ovrl2" /> */}
                            </div>
                          }
                          {item.video != undefined &&
                            <div className="image video">
                              <video autoPlay muted loop playsInline>
                                <source src={item.video} type="video/mp4" />
                              </video>
                              <div className="ovrl" style={{ "opacity": "0.95" }} />
                            </div>
                          }
                        </div>
                      </SwiperSlide>
                    ))}
                  </div>

                  {/* navs */}
                  <div className="onovo-navs js-hero-slider-navs">
                    <div className="onovo-prev js-hero-slider-prev nav--white onovo-hover-2">
                      <i />
                    </div>
                    <div className="onovo-paginations-container pag--white">
                      <div className="onovo-paginations js-hero-pagination" />
                      <div className="swiper-nav-active" />
                    </div>
                    <div className="onovo-next js-hero-slider-next nav--white onovo-hover-2">
                      <i />
                    </div>
                  </div>
                </Swiper>

              </section>
            </div>
            {/* META */}
            <div className="col-xs-12 col-sm-12 col-md-12 col-lg-5 offset-lg-1 align-content-center pt-4">
              {postData.contentHtml != "" &&
                <>
                  <div className="onovo-text">
                    <h2 className="bigTitle">{postData.title}</h2>
                    <p className="tagline">{postData.tagline}</p>
                    {/* Review Stars */}
                    <div className="reviewStars">
                      {Array.from({ length: 4 }, (v, i) => (
                        <i
                          key={i}
                          className={`fa${i < Math.floor(postData.review_stars) ? 's' : 'r'} fa-star`}
                          aria-hidden="true"
                        ></i>
                      ))}
                      {postData.review_stars % 1 !== 0 && (
                        <i className="fas fa-star-half-alt" aria-hidden="true"></i>
                      )}
                      {/* <span className="starRating">{postData.review_stars.toFixed(1)}</span> */}
                    </div>
                    {/* <div><h3 style={{display: "inline"}}>Rs. {postData.price}</h3><span> (Inclusive of Taxes)</span></div> */}
                    
                    {/* PRICE */}
                    <div>
                    <Tab.Container id="list-group-tabs-example" defaultActiveKey="#link1" >
                      <Row className="price_tabs">
                        <Col sm={12}>
                          <Tab.Content>
                            <Tab.Pane eventKey="#link1"><div><h3 style={{ display: "inline" }}>{postData.price}</h3><span> (Exclusive of Taxes)</span></div></Tab.Pane>
                            <Tab.Pane eventKey="#link2"><div><h3 style={{ display: "inline" }}>{postData.price_mrc}</h3><span> (Exclusive of Taxes)</span></div></Tab.Pane>
                          </Tab.Content>
                        </Col>
                      </Row>
                      <Row className="price_heading">
                        <Col sm={6} lg={4} md={6}>
                          <ListGroup>
                            <ListGroup.Item action href="#link1">
                              OTC
                            </ListGroup.Item>
                          </ListGroup>
                        </Col>
                        <Col sm={6} lg={4} md={6}>
                          <ListGroup>
                            <ListGroup.Item action href="#link2">
                              MRC
                            </ListGroup.Item>
                          </ListGroup>
                        </Col>
                      </Row>
                    </Tab.Container>
                    </div>
                    {/* Short Description */}
                    <p className="shortDescription">{postData.short_description}</p>
                    <p className="shortDescription">{postData.short_description2}</p>
                    {/* YEARLY PLANS */}
                    <>
                    <Tab.Container id="yearly-programs"  key={postData.id} style={{display:`${postData.noyear}`}}>
                      <Row className="price_heading">
                        <Col sm={6} lg={4} md={6}>
                          <ListGroup>
                            <ListGroup.Item action href="#three-year">
                              3-Years Plan
                            </ListGroup.Item>
                          </ListGroup>
                        </Col>
                        <Col sm={6} lg={4} md={6}>
                          <ListGroup>
                            <ListGroup.Item action href="#five-year">
                              5-Years Plan
                            </ListGroup.Item>
                          </ListGroup>
                        </Col>
                      </Row>
                      <Row className="price_tabs">
                        <Col sm={12}>
                          <Tab.Content>
                            <Tab.Pane eventKey="#three-year"><div><h6 >{postData.three_year}</h6><span>{postData.note_1}</span></div></Tab.Pane>
                            <Tab.Pane eventKey="#five-year"><div><h6 >{postData.five_year}</h6><span>{postData.note_2}</span></div></Tab.Pane>
                          </Tab.Content>
                        </Col>
                      </Row>
                    </Tab.Container>
                    </>
                    
                    {/* Project Requirement Icons */}
                    <div className="iconSection">
                      {postData.details_icon.items.map((item, index) => (
                        <div className="iconColumn" key={index}>
                          <img src={item.icon} alt={item.label} className="icon" />
                          <h6 className="iconTitle">{item.label}</h6>
                        </div>
                      ))}
                    </div>
                    {/* Description */}
                    <div dangerouslySetInnerHTML={{ __html: postData.contentHtml }} />
                    {/* PROMO */}
                    {postData.contentHtml != "" &&
                      <Card key={postData.id} className="my-3 p-3 rounded promo_offer text-left" style={{display:`${postData.display}`}}>
                        <Card.Header as="h5">SPECIAL OFFER!</Card.Header>
                        <Card.Body>
                          <Card.Title>{postData.promo_title}</Card.Title>
                          <Card.Text>
                            {postData.promo_desc}
                          </Card.Text>
                          <Card.Text>
                            <strong>Offer:</strong> {postData.promo_offer}
                          </Card.Text>
                        </Card.Body>
                      </Card>
                    }
                    
                    {/* Buttons */}
                    <div className="buttonGroup">
                      <Link className="onovo-btn onovo-hover-btn " href="https://wa.me/021111192837">
                        <i className="arrow"><span /></i>
                        <span>Buy Now</span>
                      </Link>
                      <Link onClick={handleShowSurvey} className="onovo-btn onovo-hover-btn " href={postData.id}>
                        <i className="arrow"><span /></i>
                        <span>Book Survey</span>
                      </Link>
                      <Link onClick={() => setModalShow(true)} className="onovo-btn onovo-hover-btn " href={postData.id}>
                        <i className="arrow"><span /></i>
                        <span>Saving Calculator</span>
                      </Link>
                    </div>
                  </div>
                </>
              }
            </div>
          </div>
        </div>
      </section>
      {/* <LogoSlider /> */}
      <ComparisonChart />
      <Services4Section services={props.services} />
      <LogoSlider2 />
      <FAQs title="Frequently Asked Questions" items={faqContent.items} />
      {/* Onovo Navs */}
      <section className="onovo-section">
        <div className="container">

          {/* Navigation */}
          <div className="onovo-page-navigation">
            <div className="onovo-page-navigation-content">
              {prev_id != 0 && prev_id != undefined &&
                <Link href={`/projects/${prev_id}`} className="page-navigation__prev">
                  <span className="onovo-prev onovo-hover-2">
                    <i />
                  </span>
                </Link>
              }
              <Link href="/projects" className="page-navigation__posts">
                <i className="fas fa-th" />
              </Link>
              {next_id != 0 && next_id != undefined &&
                <Link href={`/projects/${next_id}`} className="page-navigation__next">
                  <span className="onovo-next onovo-hover-2">
                    <i />
                  </span>
                </Link>
              }
            </div>
          </div>

        </div>
      </section>
      <ImageView />
      <SurveyModal show={showSurvey} handleClose={handleCloseSurvey} />
      <SavingsCalculatorModal show={modalShow} handleClose={() => setModalShow(false)} />
    </Layouts>
  );
};
export default ProjectDetail;

export async function getStaticPaths() {
  const paths = getAllProjectsIds()

  return {
    paths,
    fallback: false
  }
}

export async function getStaticProps({ params }) {
  const postData = await getProjectData(params.id)
  const allProjects = await getSortedProjectsData()
  const allServices = getSortedServicesData();

  return {
    props: {
      data: postData,
      projects: allProjects,
      services: allServices
    }
  }
}