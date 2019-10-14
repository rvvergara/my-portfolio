import PropTypes from 'prop-types';

const ProjectTech = ({ projectShown }) => (
  <div>
    <h4>Technologies Used:</h4>
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
