import PropTypes from 'prop-types';
import { ReactHTMLConverter } from 'react-html-converter/node';
import Modal from 'react-bootstrap/Modal';

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
      {
        converter.convert(projectShown.description)
      }
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
