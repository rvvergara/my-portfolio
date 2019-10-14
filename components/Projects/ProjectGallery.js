import PropTypes from 'prop-types';
import Gallery from 'react-amazon-gallery';

const ProjectGallery = ({ screenshots }) => {
  const images = screenshots.map(screenshot => screenshot.photo);

  return (
    <Gallery
      images={images}
      width={600}
      height={300}
    />
  );
};


ProjectGallery.propTypes = {
  screenshots: PropTypes.instanceOf(Object).isRequired,
};

export default ProjectGallery;
