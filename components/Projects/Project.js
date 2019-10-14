import PropTypes from 'prop-types';
import Card from 'react-bootstrap/Card';

const Project = ({ project, dispatch, handleShow }) => {
  const setProjectShown = () => {
    dispatch({
      type: 'SET_PROJECT',
      project,
    });
    handleShow();
  };

  return (
    <Card onClick={setProjectShown} className="project-card">
      <Card.Title>{project.title}</Card.Title>
      <Card.Img variant="top" src={project.screenshots[0].original} />
    </Card>
  );
};

Project.propTypes = {
  dispatch: PropTypes.func.isRequired,
  handleShow: PropTypes.func.isRequired,
  project: PropTypes.instanceOf(Object).isRequired,
};

export default Project;
