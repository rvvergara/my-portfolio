import PropTypes from 'prop-types';
import Head from 'next/head';
import Container from 'react-bootstrap/Container';
import Header from './Header';
import Footer from './Footer';
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
    <Footer />
  </div>
);

Layout.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.instanceOf(Object).isRequired,
};

export default Layout;
