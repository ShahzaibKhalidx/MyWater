import Layouts from "@layouts/Layouts";
import dynamic from "next/dynamic";

import { getSortedProjectsData } from "@library/projects";

import PageBanner from "@components/PageBanner";

const ProjectsGrid = dynamic( () => import("@components/ProjectsGrid"), { ssr: false } );

const Portfolio = (props) => {
  return (
    <Layouts header={2}>
      <PageBanner pageTitle={"MyWater Collection"} pageDesc={"Explore our exclusive range of water dispensers, each designed to provide you with the purest hydration experience."} />

      <ProjectsGrid projects={props.projects} layout={"grid"} masonry />
      
    </Layouts>
  );
};
export default Portfolio;

export async function getStaticProps() {
  const allProjects = getSortedProjectsData();

  return {
    props: {
      projects: allProjects
    }
  }
}