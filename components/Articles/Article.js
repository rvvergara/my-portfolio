import PropTypes from 'prop-types';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';

const Article = ({ article }) => (
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
);

Article.propTypes = {
  article: PropTypes.instanceOf(Object).isRequired,
};

export default Article;
