import Link from "next/link"; 
import { useEffect } from "react";
import { showcaseHover } from "@common/utilits";

const Pointers = () => {
	useEffect(() => {
		showcaseHover();
	}, []);

    // Static Data
    const data = {
        title: "Discover Our Featured Projects",
        subtitle: "Showcase",
        numOfItems: 3,
        projects: [
            {
                id: "project-1",
                title: "Modern Water Dispensers",
                category: "Products",
                image: "/path/to/image1.jpg"
            },
            {
                id: "project-2",
                title: "Sustainable Water Solutions",
                category: "Innovations",
                image: "/path/to/image2.jpg"
            },
            {
                id: "project-3",
                title: "Advanced Filtration Systems",
                category: "Technology",
                image: "/path/to/image3.jpg"
            }
        ],
        button: {
            label: "View All Projects",
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
							<span>{data.title}</span>
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
