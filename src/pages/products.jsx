import Layouts from "@layouts/Layouts";
import dynamic from "next/dynamic";
import { getSortedProjectsData } from "@library/projects";


const ProjectsGrid = dynamic( () => import("@components/ProjectsGrid"), { ssr: false } );

const Portfolio = (props) => {
  return (
    <Layouts header={3}>
      <ProjectsGrid projects={props.projects} layout={"grid"} sideFilter masonry/>   
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