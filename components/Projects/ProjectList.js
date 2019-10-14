import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Project from './Project';
import projects from '../../data/projects';

const ProjectList = () => (
  <Row>
    {projects.map(project => (
      <Col key={project.id} lg={4}>
        <Project project={project} />
      </Col>
    ))}
  </Row>
);

export default ProjectList;
