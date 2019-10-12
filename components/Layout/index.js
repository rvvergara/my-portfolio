import Head from 'next/head';
import Container from 'react-bootstrap/Container';
import Header from './Header';
import '../../scss/main.scss';

const Layout = ({ title, children, activeKey }) => (
  <div>
    <Head>
      <title>
        { title }
      </title>
    </Head>
    <Header activeKey={activeKey} />
    <Container>
      { children }
    </Container>
  </div>
);

export default Layout;
