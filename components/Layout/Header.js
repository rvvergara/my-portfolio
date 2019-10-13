import Link from 'next/link';
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Navbar from 'react-bootstrap/Navbar';
import MainNav from './MainNav';

const Header = () => (
  <Navbar
    bg="light"
    expand="lg"
  >
    <Container>
      <Link href="/">
        <Navbar.Brand href="/">
          <Row>
            <Col sm={6}>
            Ryan Vergara
            </Col>
            <Col sm={6}>
              <span className="subtitle">Fullstack Developer</span>
            </Col>
          </Row>
        </Navbar.Brand>
      </Link>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <MainNav />
    </Container>
  </Navbar>
);

export default Header;
