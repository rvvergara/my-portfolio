import PropTypes from 'prop-types';
import { ReactHTMLConverter } from 'react-html-converter/node';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Modal from 'react-bootstrap/Modal';
import ProjectGallery from './ProjectGallery';
import ProjectTech from './ProjectTech';

const Test = ({ text }) => (
  <div>{text}</div>
);

const converter = new ReactHTMLConverter();
converter.registerComponent('test', Test);

const ProjectModal = ({ projectShown, handleClose, isShown }) => (
  <Modal
    show={isShown}
    onHide={handleClose}
    size="xl"
  >
    <Modal.Header closeButton>
      <Modal.Title>{projectShown.title}</Modal.Title>
    </Modal.Header>
    <Modal.Body>
      <Row className="project-showcase">
        <Col lg={8}>
          <ProjectGallery screenshots={projectShown.screenshots} />
        </Col>
        <Col lg={4}>
          <ProjectTech projectShown={projectShown} />
        </Col>
      </Row>
      <Row className="project-description">
        {
            converter.convert(projectShown.description)
          }
      </Row>
    </Modal.Body>
  </Modal>
);

ProjectModal.propTypes = {
  handleClose: PropTypes.func.isRequired,
  isShown: PropTypes.bool.isRequired,
  projectShown: PropTypes.instanceOf(Object).isRequired,
};

Test.propTypes = {
  text: PropTypes.string.isRequired,
};

export default ProjectModal;
