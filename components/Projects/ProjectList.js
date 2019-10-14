import Project from './Project';
import projects from '../../data/projects';

const ProjectList = () => projects.map(project => (
  <Project project={project} key={project.id} />
));

export default ProjectList;
