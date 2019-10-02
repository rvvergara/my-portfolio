import projects from '../../data/projects';

const Project = ({ project }) => (
  <div>
    {project.title}
  </div>
);

Project.getInitialProps = ({ query }) => {
  const { title } = query;
  const project = projects.find(project => project.title === title);

  return { project };
};

export default Project;
