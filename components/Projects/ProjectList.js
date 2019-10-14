import { useReducer, useState } from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Project from './Project';
import ProjectModal from './ProjectModal';
import projectReducer from '../../reducers/project';
import projects from '../../data/projects';

const ProjectList = () => {
  const [isShown, setIsShown] = useState(false);
  const [projectShown, dispatch] = useReducer(projectReducer, null);

  const handleShow = () => setIsShown(true);
  const handleClose = () => {
    dispatch({
      type: 'SET_PROJECT',
      project: null,
    });
    setIsShown(false);
  };

  return (
    <div>
      {projectShown && (
      <ProjectModal
        projectShown={projectShown}
        handleClose={handleClose}
        isShown={isShown}
      />
      )}
      <Row id="projects">
        {projects.map(project => (
          <Col key={project.id} lg={4}>
            <Project
              project={project}
              dispatch={dispatch}
              handleShow={handleShow}
            />
          </Col>
        ))}
      </Row>
    </div>
  );
};

export default ProjectList;
