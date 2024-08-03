import React from "react";
import { useEffect } from "react";
import Layouts from "@layouts/Layouts";
import dynamic from "next/dynamic";

import { getSortedPostsData } from "@library/posts";
import { getSortedProjectsData } from "@library/projects";
import { getSortedTeamData } from "@library/team";

import { circleText } from "@common/utilits";

//import HeroSection from "@components/sections/Hero";
import ServicesSection from "@components/sections/Services";
import AboutSection from "@components/sections/About";
// import ShowcaseSection from "@components/sections/Showcase";
// import TeamSection from "@components/sections/Team";
import VideoSection from "@components/sections/Video";
import VideoSection2 from "@components/sections/Video2";
import CountersSection from "@components/sections/Counters";
// import CallToActionSection from "@components/sections/CallToAction";
// import CallToAction2Section from "@components/sections/CallToAction2";
// import LatestPostsSection from "@components/sections/LatestPosts";
import PartnersSection from "@components/sections/Partners"
// import Pointers from "../components/sections/Pointers";
import CTASection from "../components/sections/CTASection";
import MobileApp from "../components/sections/MobileApp";
import PromotionCards from "../components/sections/PromotionCards";

const HeroSection = dynamic( () => import("@components/sections/Hero"), { ssr: false } );
const TickerSlider = dynamic( () => import("@components/sliders/Ticker"), { ssr: false } );
const TestimonialSlider = dynamic( () => import("@components/sliders/Testimonial"), { ssr: false } );
const HistorySlider = dynamic( () => import("@components/sliders/History"), { ssr: false } );

const Home1 = (props) => {
  useEffect(() => {
    circleText();
  }, []);

  return (
    <Layouts header={2}>
      <>
        <HeroSection />
        <ServicesSection />
        <AboutSection />
        <VideoSection2 />
        <HistorySlider />
        <MobileApp/>
        <TickerSlider />
        <PromotionCards />
        <TestimonialSlider />
        <VideoSection />
        <CountersSection />
        <CTASection/>
        <PartnersSection paddingTop={2}/>
        {/* <CallToActionSesction /> */}
        {/* <CallToAction2Section /> */}
        {/* <LatestPostsSection posts={props.posts} /> */}
        {/* <ShowcaseSection projects={props.projects} /> */}
        {/* <Pointers/> */}
        {/* <TeamSection team={props.team} /> */}
      </>
    </Layouts>
  );
};
export default Home1;

export async function getStaticProps() {
  const allPosts = getSortedPostsData();
  const allProjects = getSortedProjectsData();
  const allTeam = getSortedTeamData();

  return {
    props: {
      posts: allPosts,
      projects: allProjects,
      team: allTeam
    }
  }
}