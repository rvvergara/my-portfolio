import PropTypes from 'prop-types';
import ReactHtmlParser from 'react-html-parser';
import Container from '@material-ui/core/Container';
import ProjectImages from './ProjectImages';

const Project = ({ project }) => (
  <Container>
    <h1>{project.title}</h1>
    <div>
      <a href={project.repository}>Repository</a>
      &nbsp;
      &nbsp;
      <a href={project.demoLink}>Demo</a>
    </div>
    {project.screenshots.length > 0 && <ProjectImages screenshots={project.screenshots} />}
    <div>
      { ReactHtmlParser(project.description) }
    </div>
  </Container>
);

Project.propTypes = {
  project: PropTypes.instanceOf(Object).isRequired,
};

export default Project;
