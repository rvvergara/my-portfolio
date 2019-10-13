import Head from 'next/head';
import Container from 'react-bootstrap/Container';
import Header from './Header';
import '../../scss/main.scss';

const Layout = ({ title, children }) => (
  <div>
    <Head>
      <title>
        { title }
      </title>
    </Head>
    <Header />
    <Container>
      { children }
    </Container>
  </div>
);

export default Layout;
