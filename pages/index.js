import Link from 'next/link';
import projects from '../data/projects';

const Index = () => (
  <div>
    <h1>
      RyanV
    </h1>
    <div>
      This is my portfolio
    </div>
    {
      projects.map(project => (
        <Link
          key={project.id}
          href="/projects/[title]"
          as={`/projects/${project.title}`}
        >
          <h4>
            {project.title}
          </h4>
        </Link>
      ))
    }
  </div>
);
export default Index;
