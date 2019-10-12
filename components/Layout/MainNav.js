import Link from 'next/link';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

const MainNav = ({ activeKey }) => (
  <Navbar.Collapse id="basic-navbar-nav">
    <Nav className="justify-content-end" activeKey={activeKey}>
      <Nav.Item>
        <Link href="/">
          <Nav.Link href="/">Home</Nav.Link>
        </Link>
      </Nav.Item>
      <Nav.Item>
        <Link href="/projects">
          <Nav.Link href="/projects">Projects</Nav.Link>
        </Link>
      </Nav.Item>
    </Nav>
  </Navbar.Collapse>
);

export default MainNav;
