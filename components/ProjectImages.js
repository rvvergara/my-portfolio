import { useState } from 'react';
import PropTypes from 'prop-types';
import { ReactBnbGallery } from 'react-bnb-gallery';

const ProjectImages = ({ screenshots }) => {
  const [galleryOpened, setGalleryOpened] = useState(false);

  const toggleGallery = () => {
    setGalleryOpened(!galleryOpened);
  };

  return (
    <div>
      <button
        type="button"
        onClick={toggleGallery}
      >
        See Screenshots
      </button>
      <ReactBnbGallery
        show={galleryOpened}
        photos={screenshots}
        onClose={toggleGallery}
      />
    </div>
  );
};

ProjectImages.propTypes = {
  screenshots: PropTypes.instanceOf(Array).isRequired,
};

export default ProjectImages;
