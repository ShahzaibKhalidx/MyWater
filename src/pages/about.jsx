import { useEffect } from "react";
import dynamic from "next/dynamic";
import Layouts from "@layouts/Layouts";

import { getSortedTeamData } from "@library/team";
import { getSortedServicesData } from "@library/services";

import CountUp from 'react-countup';
import { circleText } from "@common/utilits";

import PageBanner from "@components/PageBanner";
import Team2Section from "@components/sections/Team2"
import PartnersSection from "@components/sections/Partners"
import AwardsSection from "@components/sections/Awards"
import Services4Section from "@components/sections/Services4"

const HistorySlider = dynamic(() => import("@components/sliders/History"), { ssr: false });
const Testimonial2Slider = dynamic(() => import("@components/sliders/Testimonial2"), { ssr: false });

const About = (props) => {
	useEffect(() => {
		circleText();
	}, []);

	const clickedVideoButton = (e) => {
		e.preventDefault();

		e.target.parentNode.classList.add('active');
		let videoIframe = e.target.parentNode.querySelector('.js-video-iframe');
		let videoUrl = videoIframe.dataset.src;
		videoIframe.setAttribute('src', videoUrl);
	}

	return (
		<Layouts header={2}>
			<PageBanner pageTitle={"About Us"} pageDesc={"MyWater, Turn your tap water into purified, mineralized, still or sparkling water."} />

			{/* Onovo About */}
			<section className="onovo-section gap-top-140 gap-bottom-140">
				<div className="container">
					<div className="row">
						<div className="col-xs-12 col-sm-12 col-md-12 col-lg-8">

							{/* Heading */}
							<div className="onovo-heading gap-bottom-60">
								<div className="onovo-subtitle-1">
									<span> Welcome to MyWater </span>
								</div>
								<h2 className="onovo-title-2">
									<span> PAKISTAN’S FIRST SMART <br />WATER PURIFIER  </span>
								</h2>
								<div className="onovo-text">
									<p>MyWater™ provides the highest quality of mineral drinking water using cutting edge technology and
										modern design. Our water purifier is patented making
										it the smartest water system in the world. Through the use of sensors and our smart app you
										can receive live updates and leave the responsibility of maintenance to our team. </p>
								</div>
							</div>

						</div>
						<div className="col-xs-12 col-sm-12 col-md-12 col-lg-3 offset-lg-1 hide-on-mobile">

							{/* Image */}
							<img src="/images/67.png" alt="" />

						</div>
					</div>

					{/* Numbers items */}
					<div className="row gap-row gap-bottom-100">

						{/*number-item*/}
						<div className="col-xs-12 col-sm-12 col-md-4 col-lg-4">
							<div className="onovo-counter">
								<div className="num onovo-text-white js-counter" data-end-value="7">
									<CountUp end="7" duration={7} enableScrollSpy={true} scrollSpyOnce={true} />
								</div>
								<div className="num-after onovo-text-white"> M </div>
								<div className="label"> Bottles Saved</div>
							</div>
						</div>

						{/*number-item*/}
						<div className="col-xs-12 col-sm-12 col-md-4 col-lg-4">
							<div className="onovo-counter">
								<div className="num onovo-text-white js-counter" data-end-value="66">
									<CountUp end="66" duration={7} enableScrollSpy={true} scrollSpyOnce={true} />
								</div>
								<div className="num-after onovo-text-white"> M </div>
								<div className="label"> Litres Consumed </div>
							</div>
						</div>

						{/*number-item*/}
						<div className="col-xs-12 col-sm-12 col-md-4 col-lg-4">
							<div className="onovo-counter">
								<div className="num onovo-text-white js-counter" data-end-value="7">
									<CountUp end="7" duration={7} enableScrollSpy={true} scrollSpyOnce={true} />
								</div>
								<div className="num-after onovo-text-white"> K </div>
								<div className="label"> Happy Customers </div>
							</div>
						</div>

					</div>

					{/* Video */}
					<div className="onovo-video" data-onovo-overlay data-onovo-scroll>
						<div className="image" onClick={(e) => clickedVideoButton(e)} style={{ "backgroundImage": "url(/images/vid.png)" }} />
						<iframe className="js-video-iframe" data-src="https://www.youtube.com/embed/dWOjfNzjDIc?showinfo=0&rel=0&autoplay=1"></iframe>
						<div className="play onovo-circle-text" onClick={(e) => clickedVideoButton(e)}>
							<div className="arrow" />
							<div className="label onovo-text-black onovo-circle-text-label">Upgrade - You Water - Experience - </div>
						</div>
					</div>

					{/* Description */}
					<div className="row gap-top-100">
						<div className="col-xs-12 col-sm-12 col-md-4 col-lg-3">
							<h5 className="text-uppercase">Our Mission</h5>
						</div>
						<div className="col-xs-12 col-sm-12 col-md-8 col-lg-9">
							To serve the highest quality of mineral drinking water using cutting edge technology and modern design. Our products not only give you one of the cleanest drinking water available but also provides you with an experience of a healthier lifestyle by reducing usage of plastic bottles. Your journey with mywater® will transform perspectives on matters such as health, environmental concern and comfort in all aspects of your life. We want to set better standards of a hassle-free service for our customers.
						</div>
					</div>

					{/* Description */}
					<div className="row gap-top-60">
						<div className="col-xs-12 col-sm-12 col-md-4 col-lg-3">
							<h5 className="text-uppercase">Quality Policy</h5>
						</div>
						<div className="col-xs-12 col-sm-12 col-md-8 col-lg-9">
							At Mywater, we are committed to providing the highest quality of mineral drinking water using cutting edge technology and modern design by eliminating the use of plastic bottles. We are dedicated to continuously improve our Quality Management System to comply with ISO 9001 standard and other regulatory requirements by setting attainable and measurable quality objectives to ensure customer satisfaction and enhance our reputation as a reliable and sustainable global manufacturer and distributor of smart home appliances.
						</div>
					</div>

					{/* Gallery */}
					<div className="row gap-top-100">
						<div className="col-xs-12 col-sm-12 col-md-6 col-lg-6">
							<a href="https://play.google.com/store/apps/details?id=com.mywater.customer.app&pli=1" className="mfp-image">
								<img src="/images/about1.jpg" alt="" />
							</a>
						</div>
						<div className="col-xs-12 col-sm-12 col-md-6 col-lg-6 gap-top-60">
							<a href="/products" className="mfp-image">
								<img src="/images/about2.jpg" alt="" />
							</a>
						</div>
					</div>

				</div>
			</section>

			<Services4Section services={props.services} />

			{/* <AwardsSection /> */}

			<HistorySlider />

			{/* <Team2Section team={props.team} /> */}

			<Testimonial2Slider />

			<PartnersSection />

		</Layouts>
	);
};
export default About;

export async function getStaticProps() {
	const allTeam = getSortedTeamData();
	const allServices = getSortedServicesData();

	return {
		props: {
			team: allTeam,
			services: allServices
		}
	}
}