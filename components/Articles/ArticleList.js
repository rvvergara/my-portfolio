import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';
import articles from '../../data/articles';

const ArticleList = () => (
  <Container>
    <h2 className="page-title">Articles</h2>
    {
      articles.map(article => (
        <Row key={article.id} className="article">
          <Col className="article-img">
            <a href={article.link}><Image src={article.pic} fluid /></a>
          </Col>
          <Col className="article-details">
            <h4 className="article-title">
              <a href={article.link}>{article.title}</a>
            </h4>
            <p className="article-excerpt">
              {article.excerpt}
              {' '}
              <strong className="article-link">
                <a href={article.link}>{`Read more from ${article.host}`}</a>
              </strong>
            </p>
          </Col>
        </Row>
      ))
    }
  </Container>
);

export default ArticleList;
