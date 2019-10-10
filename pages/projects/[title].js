import PropTypes from 'prop-types';
import projects from '../../data/projects';
import Project from '../../components/Project';
import Layout from '../../components/Layout';

const ProjectPage = ({ project, title }) => (
  <Layout title={title}>
    <Project project={project} />
  </Layout>
);

ProjectPage.getInitialProps = ({ query }) => {
  const { title } = query;
  const project = projects.find(project => project.title === title);

  return { project, title };
};

ProjectPage.propTypes = {
  project: PropTypes.instanceOf(Object).isRequired,
};

export default ProjectPage;
