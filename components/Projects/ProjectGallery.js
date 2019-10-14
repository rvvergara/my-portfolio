import PropTypes from 'prop-types';
import Gallery from 'react-image-gallery';

const ProjectGallery = ({ screenshots }) => (
  <Gallery
    items={screenshots}
    sizes={5}
    slideOnThumbnailHover
  />
);


ProjectGallery.propTypes = {
  screenshots: PropTypes.instanceOf(Object).isRequired,
};

export default ProjectGallery;
