import Link from 'next/link';
import projects from '../data/projects';

const ProjectList = () => projects.map(project => (
  <Link
    key={project.id}
    href="/projects/[title]"
    as={`/projects/${project.title}`}
  >
    <a>
      <h4>
        {project.title}
      </h4>
    </a>
  </Link>
));

export default ProjectList;
