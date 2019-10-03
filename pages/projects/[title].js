import PropTypes from 'prop-types';
import projects from '../../data/projects';
import Project from '../../components/Project';

const ProjectPage = ({ project }) => (
  <Project project={project} />
);

ProjectPage.getInitialProps = ({ query }) => {
  const { title } = query;
  const project = projects.find(project => project.title === title);

  return { project };
};

ProjectPage.propTypes = {
  project: PropTypes.instanceOf(Object).isRequired,
};

export default ProjectPage;
