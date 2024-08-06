import PageBanner from "@components/PageBanner";
import Layouts from "@layouts/Layouts";
import Link from "next/link";

import { getSortedTeamData } from "@library/team";

import CallToActionSection from "@components/sections/CallToAction";
import PartnersSection from "@components/sections/Partners"
import Testimonial2Slider from "../components/sliders/Testimonial2";

const Team = (props) => {
	return (
		<Layouts header={2}>
			<PageBanner pageTitle={"Meet our Team"} pageDesc={"Meet our devoted company family."} />
			<section className="onovo-section gap-top-40 gap-bottom-140">
				<div className="my-container">
					{/* Team Card */}
					<div className="onovo-team-detail">
						<div className="row gap-140 gap-top-60 gap-bottom-0">
							<div className="col-xs-12 col-sm-12 col-md-6 col-lg-6">
								<img loading="lazy" src="/images/team/shahrukh.png" className="team-detail-img" alt="" />
							</div>
							<div className="col-xs-12 col-sm-12 col-md-6 col-lg-6 align-self-center">
								<h2>
									<span data-splitting data-onovo-scroll>Shahrukh Nadeem</span>
								</h2>
								<h5>
									<span data-splitting data-onovo-scroll>CEO</span>
								</h5>
								<div className="onovo-team-info">
									<ul>
										<li>
											<div className="onovo-text">
												<div data-splitting data-onovo-scroll>
													<p>At Mywater, we are inspired by a simple yet profound idea: that everyone deserves access to clean, drinking water. Our journey began with a desire to make a positive impact on health of our people and the environment. We wanted to challenge the status quo and create a solution that would transform everyday tap water into something extraordinary.
														<br/>At mywater, we’ve harnessed cutting-edge technology to revolutionize the way we think about hydration. Our innovative dispensers, equipped with IoT devices, not only purify water but also monitor its quality in real-time. This means our customers can enjoy the peace of mind that comes with knowing their water is fresh, safe, and infused with essential minerals.
														<br/>But mywater is more than just a product; it’s a movement. We’re committed to reducing plastic waste and promoting sustainability. With each refill, our customers contribute to a healthier planet, and that’s something we can all be proud of.
														As we continue to grow and evolve, I want to thank you for being a part of our journey. Together, we are redefining hydration and creating a brighter future for generations to come. Here’s to enjoying every drop!</p>
												</div>
											</div>
										</li>
									</ul>
								</div>
								<div className="onovo-social-1 mb-5">
									<ul>
										<li>
											<a className="onovo-social-link onovo-hover-2" href="https://www.linkedin.com/in/shahrukh-nadeem-74774246/" title="title" target="_blank">
												<i aria-hidden="true" className="fab fa-linkedin-in" />
											</a>
										</li>
									</ul>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>
			{/* Onovo Team */}
			<section className="onovo-section gap-bottom-140">
				<div className="container">
					{/* Team items */}
					<div className="row gap-row align-center justify-content-center">
						{props.team.map((item, key) => (
							<div key={`team-item-${key}`} className="col-xs-12 col-sm-12 col-md-6 col-lg-3">
								<div className="onovo-team-two">
									<div className="onovo-team-two-item">
										<div className="image onovo-hover-3 onovo-hover-black-30" data-onovo-overlay data-onovo-scroll>
											<Link href={""}>
												<img src={item.image} alt={item.name} />
											</Link>
											<div className="onovo-social-2">
												<ul>
													{item.social.map((link, link_key) => (
														<li key={`team-item-${key}-link-${link_key}`}>
															<a key={`teamsocial-item-${link_key}`} className="onovo-social-link onovo-hover-2" href={link.link} title={link.title} target="_blank" style={{background:"#fff"}}>
																<i aria-hidden="true" className={link.icon} />
															</a>
														</li>
													))}
												</ul>
											</div>
										</div>
										<div className="desc">
											<h5 className="title">
												<Link href={`/team/${item.id}`} className="onovo-lnk">
													<span data-splitting data-onovo-scroll>{item.name}</span>
												</Link>
											</h5>
											<div className="onovo-subtitle-1">
												<span data-splitting data-onovo-scroll>{item.role}</span>
											</div>
										</div>
									</div>
								</div>
							</div>
						))}
						{/* Button */}
						{/* <div className="col-xs-12 col-sm-12 col-md-6 col-lg-3 align-center align-self-center">
							<Link className="onovo-btn-circle onovo-hover-2" href={'/contact'}>
								<i className="arrow">
									<span />
								</i>
							</Link>
						</div> */}
					</div>
				</div>
			</section>
			{/* <CallToActionSection /> */}
			{/* <Testimonial2Slider /> */}
			<PartnersSection/>

		</Layouts>
	);
};
export default Team;

export async function getStaticProps() {
	const allTeam = getSortedTeamData();

	return {
		props: {
			team: allTeam
		}
	}
}