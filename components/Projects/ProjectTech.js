import PropTypes from 'prop-types';

const ProjectTech = ({ projectShown }) => (
  <div>
    <strong>Technologies Used:</strong>
    <ul>
      {
        projectShown.technologies.map(tech => (
          <li key={tech}>{tech}</li>
        ))
      }
    </ul>
  </div>
);

ProjectTech.propTypes = {
  projectShown: PropTypes.instanceOf(Object).isRequired,
};

export default ProjectTech;
