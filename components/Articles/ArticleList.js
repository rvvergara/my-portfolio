import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';
import articles from '../../data/articles';

const ArticleList = () => (
  <Container>
    {
      articles.map(article => (
        <Row key={article.id} className="article">
          <Col>
            <Image src={article.pic} fluid />
          </Col>
          <Col>
            {article.title}
          </Col>
        </Row>
      ))
    }
  </Container>
);

export default ArticleList;
