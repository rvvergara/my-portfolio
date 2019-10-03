import PropTypes from 'prop-types';
import ReactHtmlParser from 'react-html-parser';
import Container from '@material-ui/core/Container';

const Project = ({ project }) => (
  <Container>
    <h1>{project.title}</h1>
    <div>
      { ReactHtmlParser(project.description) }
    </div>
  </Container>
);

Project.propTypes = {
  project: PropTypes.instanceOf(Object).isRequired,
};

export default Project;
