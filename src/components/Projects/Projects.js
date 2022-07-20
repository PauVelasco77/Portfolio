import ProjectCard from "../ProjectCard/ProjectCard";
import styled from "@emotion/styled";

const ProjectsContainer = styled.div`
  padding: 20px;
`;

const Projects = () => {
  return (
    <ProjectsContainer>
      <ProjectCard />
    </ProjectsContainer>
  );
};

export default Projects;
