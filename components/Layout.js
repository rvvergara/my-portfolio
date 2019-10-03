import Head from 'next/head';
import '../styles/main.scss';

const Layout = ({ children, title }) => (
  <div className="root">
    <Head>
      <title>
        RyanV - Software Developer |
        {' '}
        {title}
      </title>
    </Head>
    <div>
      { children }
    </div>
  </div>
);

export default Layout;
