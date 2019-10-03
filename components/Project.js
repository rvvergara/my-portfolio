import PropTypes from 'prop-types';
import ReactHtmlParser from 'react-html-parser';
import Container from '@material-ui/core/Container';
import ProjectImages from './ProjectImages';

const Project = ({ project }) => (
  <Container>
    <h1>{project.title}</h1>
    <div>
      { ReactHtmlParser(project.description) }
    </div>
    <ProjectImages screenshots={project.screenshots} />
  </Container>
);

Project.propTypes = {
  project: PropTypes.instanceOf(Object).isRequired,
};

export default Project;
