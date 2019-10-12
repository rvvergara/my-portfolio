import Link from 'next/link';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import MainNav from './MainNav';

const Header = ({ activeKey }) => (
  <Navbar
    bg="light"
    expand="lg"
  >
    <Container>
      <Link href="/">
        <Navbar.Brand href="/">
            Ryan Vergara
        </Navbar.Brand>
      </Link>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <MainNav activeKey={activeKey} />
    </Container>
  </Navbar>
);

export default Header;
