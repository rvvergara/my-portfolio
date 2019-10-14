import PropTypes from 'prop-types';

const Project = ({ project }) => (
  <div>
    {project.title}
  </div>
);

Project.propTypes = {
  project: PropTypes.instanceOf(Object).isRequired,
};

export default Project;
