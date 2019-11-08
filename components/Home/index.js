import Jumbotron from 'react-bootstrap/Jumbotron';
import Card from 'react-bootstrap/Card';
import homeContent from '../../data/home';

const HomePage = () => (
  <div>
    <Jumbotron fluid className="problem-intro">
      <h1>Let's Bring Your Ideas To Life</h1>
      <p>
        Are you a startup building something that can change the world? Are you searching for someone who can help you shape your vision and bring it into reality?
      </p>
      <p>
        You may be in the stage of building your MVP or are adding new features to your product. In both cases, you need a partner that is passionate about your technology and your vision.
      </p>
    </Jumbotron>
    <Jumbotron fluid className="my-intro">
      <h2>Hello, I'm Ryan</h2>
      <p>
        I have built awesome applications using Ruby on Rails, NodeJS, NextJS and React.
      </p>
      <p>
        From storyboarding, to mockup design, data-modelling up until deployment, I love working on ideas.
      </p>
      <p>
      At the moment I am adding Machine Learning to my repertoire in order to build more complex apps that can accomplish diverse tasks for its users. Needless to say, I am truly passionate about technology!
      </p>
    </Jumbotron>
  </div>
);

export default HomePage;
