import { ReactHTMLConverter } from 'react-html-converter/node';
import PropTypes from 'prop-types';
import Card from 'react-bootstrap/Card';

const Test = ({ text }) => (
  <div>{text}</div>
);

const converter = new ReactHTMLConverter();
converter.registerComponent('test', Test);

const Project = ({ project, dispatch }) => {
  const setProjectShown = () => {
    dispatch({
      type: 'SET_PROJECT',
      project,
    });
  };

  return (
    <Card onClick={setProjectShown}>
      <Card.Img variant="top" src={project.screenshots[0].photo} />
      <Card.Title>{project.title}</Card.Title>
      <div className="card-text">
        {converter.convert(project.description)}
      </div>
    </Card>
  );
};

Project.propTypes = {
  project: PropTypes.instanceOf(Object).isRequired,
};

export default Project;
