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
        {' '}
  | Ryan Vergara - FullStack Developer
      </title>
    </Head>
    <Header />
    <Container id="main-container">
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
