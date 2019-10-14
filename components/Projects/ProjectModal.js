import PropTypes from 'prop-types';
import Modal from 'react-bootstrap/Modal';

const ProjectModal = ({ projectShown, handleClose, isShown }) => (
  <Modal
    show={isShown}
    onHide={handleClose}
  >
    <Modal.Header closeButton>
      <Modal.Title>{projectShown.title}</Modal.Title>
    </Modal.Header>
    <Modal.Body>Project details here</Modal.Body>
  </Modal>
);

ProjectModal.propTypes = {
  handleClose: PropTypes.func.isRequired,
  isShown: PropTypes.bool.isRequired,
  projectShown: PropTypes.instanceOf(Object).isRequired,
};

export default ProjectModal;
