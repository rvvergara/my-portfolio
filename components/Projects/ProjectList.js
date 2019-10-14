import { useReducer } from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Project from './Project';
import projectReducer from '../../reducers/project';
import projects from '../../data/projects';

const ProjectList = () => {
  const [projectShown, dispatch] = useReducer(projectReducer, null);
  console.log(projectShown);
  return (
    <Row>
      {projects.map(project => (
        <Col key={project.id} lg={4}>
          <Project project={project} dispatch={dispatch} />
        </Col>
      ))}
    </Row>
  );
};

export default ProjectList;
