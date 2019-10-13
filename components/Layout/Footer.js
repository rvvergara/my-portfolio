import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const Footer = () => (
  <footer className="main-footer">
    <Container>
      <Row>
        <Col className="social-links">
          <Row>
            <Col className="social-link-item">
              <a href="https://github.com/rvvergara">Github</a>
            </Col>
            <Col className="social-link-item">
              <a href="https://linkedin.com/in/rvvergara">LinkedIn</a>
            </Col>
            <Col className="social-link-item">
              <a href="https://twitter.com/coachryanv">Twitter</a>
            </Col>
          </Row>
        </Col>
        <Col className="copyright">
          2019 Ryan Vergara
        </Col>
      </Row>
    </Container>
  </footer>
);

export default Footer;
