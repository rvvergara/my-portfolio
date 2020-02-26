import PropTypes from 'prop-types';
import { ReactHTMLConverter } from 'react-html-converter/node';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Modal from 'react-bootstrap/Modal';
import { FaGithub, FaLink } from 'react-icons/fa';
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
        <Col lg={4} className="project-tech">
          <span className="project-links">
            <a href={projectShown.repository} title="Repository" target="blank"><FaGithub /></a>
          </span>
          {'  '}
          <span className="project-links">
            <a href={projectShown.demoLink} title="Live Demo" target="blank"><FaLink /></a>
          </span>
          <ProjectTech projectShown={projectShown} />
        </Col>
      </Row>
      <Row className="project-description">
        <div className="description-title">
          <strong>Description</strong>
        </div>
        <div className="description-body">
          {
              converter.convert(projectShown.description)
            }
        </div>
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
