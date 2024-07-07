import Layouts from "@layouts/Layouts";
import PageBanner from "@components/PageBanner";
import Link from "next/link";
import ImageView from "@components/ImageView";

import { useRouter } from 'next/router';

import { getSortedProjectsData, getAllProjectsIds, getProjectData } from "@library/projects";

import {
  FacebookShareButton,
  LinkedinShareButton,
  PinterestShareButton,
  RedditShareButton,
  TwitterShareButton
} from "react-share";
import LogoSlider from "@/src/components/sections/LogoSlider";
import ComparisonChart from "@/src/components/sections/ComparisonChart";
import FAQs from "@/src/components/sections/FAQs";
import LogoSlider2 from "@/src/components/sections/LogoSlider2";

const ProjectDetail = (props) => {

  const postData = props.data;
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
        heading: "What types of impurities does the MyWater filtration system remove?",
        content: "The MyWater system effectively removes a wide range of impurities through its advanced multi-stage filtration process:\n- Dual Particle Filtration: Removes dust, particulates, and suspended solids.\n- Reverse Osmosis (RO): Eliminates invisible impurities, including salts and harmful metals.\n- Dual Carbon Filtration: Removes odors and toxic chemicals, enhancing taste.\n- UV Disinfection: Kills bacteria, viruses, protozoa, cysts, and pathogens.\n- Nano-Silver Disinfection: Deactivates various biological contaminants such as viruses and bacteria."
      },
      {
        heading: "How does MyWater ensure the water is safe and healthy to drink?",
        content: "Duis sed odio sit amet nibh vulputate cursus a sit tellus a odio tincdunt ilm auctor Class apten sociosqu a ds Etiam ante ex fermentum litora aorquper conuauris ine odi. Duis sed odio sit amet nibh vulputate cursus a sit tellus a odio tincdunt ilm auctor Class apten sociosqu a ds Et iam ante ex fermentum litora aorquper conuauris ine odi."
      },
      {
        heading: "Can I monitor the performance of my MyWater system?",
        content: "Duis sed odio sit amet nibh vulputate cursus a sit tellus a odio tincdunt ilm auctor Class apten sociosqu a ds Etiam ante ex fermentum litora aorquper conuauris ine odi. Duis sed odio sit amet nibh vulputate cursus a sit tellus a odio tincdunt ilm auctor Class apten sociosqu a ds Et iam ante ex fermentum litora aorquper conuauris ine odi."
      },
      {
        heading: "How does MyWater's filtration system improve the taste of water?",
        content: "Duis sed odio sit amet nibh vulputate cursus a sit tellus a odio tincdunt ilm auctor Class apten sociosqu a ds Etiam ante ex fermentum litora aorquper conuauris ine odi. Duis sed odio sit amet nibh vulputate cursus a sit tellus a odio tincdunt ilm auctor Class apten sociosqu a ds Et iam ante ex fermentum litora aorquper conuauris ine odi."
      },
      {
        heading: "How can I save on my water costs with MyWater?",
        content: "Duis sed odio sit amet nibh vulputate cursus a sit tellus a odio tincdunt ilm auctor Class apten sociosqu a ds Etiam ante ex fermentum litora aorquper conuauris ine odi. Duis sed odio sit amet nibh vulputate cursus a sit tellus a odio tincdunt ilm auctor Class apten sociosqu a ds Et iam ante ex fermentum litora aorquper conuauris ine odi."
      },
      {
        heading: "How do I book a survey or get more information about MyWater?",
        content: "To book a survey or learn more about MyWater, you can visit our website at www.mywater.pk or call us at 021-11-11-WATER (92837)."
      }
    ]
  };
  return (

    <Layouts header={3}>
      {/* <PageBanner pageTitle={postData.title} pageDesc={postData.type} /> */}

      {/* Onovo Project Detail */}
      <section className="onovo-section gap-top-140 projectDetailSection">
        <div className="container">

          <div className="row gap-bottom-80">
            <div className="col-xs-12 col-sm-12 col-md-12 col-lg-6">
              {/* Project Info */}
              {/* Image */}
              <div className="gap-bottom-80">
                <div className="product-image">
                  <img src={postData.product_img} alt={postData.title} />
                </div>
              </div>
            </div>
            {/* META */}
            <div className="col-xs-12 col-sm-12 col-md-12 col-lg-5 offset-lg-1 align-content-center">

              {postData.contentHtml != "" &&
                <>
                  <div className="onovo-text">
                    <h1 className="bigTitle">{postData.title}</h1>
                    <h5 className="tagline">{postData.tagline}</h5>
                    {/* Review Stars */}
                    <div className="reviewStars">
                      {Array.from({ length: 5 }, (v, i) => (
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
                    {/* Short Description */}
                    <p className="shortDescription">{postData.short_description}</p>
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
                    <div className="buttonGroup">
                      <Link className="onovo-btn onovo-hover-btn" href="">
                        <i className="arrow"><span /></i>
                        <span>Buy Now</span>
                      </Link>
                      <Link className="onovo-btn onovo-hover-btn" href="">
                        <i className="arrow"><span /></i>
                        <span>Book Survey</span>
                      </Link>
                    </div>

                  </div>
                </>
              }

            </div>
          </div>
          {/* {typeof postData.gallery != "undefined" &&
            <>
              <div className="row gap-row gallery-items onovo-custom-gallery">

                {postData.gallery.items.map((item, key) => (
                  <div key={`gallery-item-${key}`} className="col-xs-12 col-sm-12 col-md-6 col-lg-6">
                    <div className="gallery-item">
                      <a href={item.image} className="mfp-image">
                        <img src={item.image} alt={item.alt} />
                      </a>
                    </div>
                  </div>
                ))}

              </div>
            </>
          } */}
        </div>
      </section>
      <LogoSlider />
      <ComparisonChart />
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

  return {
    props: {
      data: postData,
      projects: allProjects
    }
  }
}