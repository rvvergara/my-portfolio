import ProjectList from '../components/ProjectList';
import Layout from '../components/Layout';

const Index = () => (
  <Layout title="Home">
    <div>
      <h1>
        RyanV
      </h1>
      <div>
        This is my portfolio
      </div>
      <ProjectList />
    </div>
  </Layout>
);
export default Index;
