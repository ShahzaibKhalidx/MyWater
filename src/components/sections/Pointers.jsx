import Link from "next/link"; 
import { useEffect } from "react";
import { showcaseHover } from "@common/utilits";

const Pointers = () => {
	useEffect(() => {
		showcaseHover();
	}, []);

    // Static Data
    const data = {
        title: "The Mineral Water of Your Choice",
        subtitle: "Your daily drinking Water",
        numOfItems: 4,
        projects: [
            {
                id: "project-1",
                title: "Regular Mineral Water",
				description: "Medium pH, High TDS",
                category: "1.",
                image: "/images/services/a.jpg"
            },
            {
                id: "project-2",
                title: "Ultra Pure Water",
				description: "Low pH, Low TDS",
                category: "2.",
                image: "/images/services/b.jpg"
            },
            {
                id: "project-3",
                title: "Alkaline Water",
				description: "High pH, Low TDS",
                category: "3.",
                image: "/images/services/c.jpg"
            },
			{
                id: "project-4",
                title: "Spring Water",
				description: "Medium pH, Medium TDS",
                category: "4.",
                image: "/images/services/d.jpg"
            }
        ],
        button: {
            label: "Read More",
            link: "/projects"
        }
    };

    return (
        <>
            {/* Showcase Section */}
			<section className="onovo-section gap-bottom-140" style={{"borderBottom": "1px solid #555"}}>
				<div className="container">

					{/* Heading */}
					<div className="onovo-heading gap-bottom-40">
						<div className="onovo-subtitle-1">
							<span>{data.subtitle}</span>
						</div>
						<h2 className="onovo-title-2">
							The Mineral Water<br/>of Your Choice
						</h2>
					</div>

					{/* Showcase */}
					<div className="onovo-showcase gap-bottom-40">
						<div className="img-circle onovo-circle-move" />

						{/* Showcase Items */}
						<div className="onovo-showcase-items">
                            {data.projects.slice(0, data.numOfItems).map((item, key) => (
								<div key={`showcase-item-${key}`} className="onovo-showcase-item">
									<div className="category">
										<Link href={`/projects/${item.id}`}>
											<span data-splitting data-onovo-scroll>
												<span>{item.category}</span>
											</span>
										</Link>
									</div>
									<h3 className="title">
										<Link href={`/projects/${item.id}`}>
											<span className="onovo-lnk" data-splitting data-onovo-scroll>{item.title}</span>
										</Link>
									</h3>
									<div className="image" data-onovo-overlay data-onovo-scroll>
										<span className="img" style={{"backgroundImage": `url(${item.image})`}} />
									</div>
								</div>
                            ))}
						</div>
					</div>

					{/* Button */}
					<Link className="onovo-btn onovo-hover-btn" href={data.button.link}>
						<i className="arrow">
							<span />
						</i>
						<span>{data.button.label}</span>
					</Link>

				</div>
			</section>
        </>
    );
};

export default Pointers;
