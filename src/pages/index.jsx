import React from "react";
import { useEffect } from "react";
import Layouts from "@layouts/Layouts";
import dynamic from "next/dynamic";
import { getSortedPostsData } from "@library/posts";
import { getSortedProjectsData } from "@library/projects";
import { getSortedTeamData } from "@library/team";
import { circleText } from "@common/utilits";
import ServicesSection from "@components/sections/Services";
import AboutSection from "@components/sections/About";
import VideoSection from "@components/sections/Video";
import VideoSection2 from "@components/sections/Video2";
import CountersSection from "@components/sections/Counters";
import PartnersSection from "@components/sections/Partners"
import CTASection from "../components/sections/CTASection";
import MobileApp from "../components/sections/MobileApp";
import PromotionCards from "../components/sections/PromotionCards";
const Hero2Slider = dynamic(() => import("@components/sliders/Hero2"), { ssr: false });
const TickerSlider = dynamic(() => import("@components/sliders/Ticker"), { ssr: false });
const TestimonialSlider = dynamic(() => import("@components/sliders/Testimonial"), { ssr: false });
const HistorySlider = dynamic(() => import("@components/sliders/History"), { ssr: false });


const Home1 = (props) => {
  useEffect(() => {
    circleText();
  }, []);

  return (

    <Layouts header={2}>
      <>
        <Hero2Slider />
        <ServicesSection />
        <AboutSection />
        <VideoSection2 />
        <HistorySlider />
        <MobileApp />
        <TickerSlider />
        <PromotionCards />
        <TestimonialSlider />
        <VideoSection />
        <CountersSection />
        <CTASection />
        <PartnersSection paddingTop={2} />
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