import Container from 'react-bootstrap/Container';
import articles from '../../data/articles';
import Article from './Article';

const ArticleList = () => (
  <Container>
    <h2 className="page-title">Articles</h2>
    {
      articles.map(article => (
        <Article key={article.id} article={article} />
      ))
    }
  </Container>
);

export default ArticleList;
