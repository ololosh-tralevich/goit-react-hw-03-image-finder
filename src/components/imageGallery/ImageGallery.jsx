import PropTypes from 'prop-types';

import ImageGalleryItem from '../imageGalleryItem/ImageGalleryItem';
import styles from './imageGallery.module.css';

const ImageGallery = ({ photoArr, openModal }) => {
  return (
    <ul className={styles.galleryList}>
      <ImageGalleryItem photoArr={photoArr} openModal={openModal} />
    </ul>
  );
};

export default ImageGallery;

ImageGallery.propTypes = {
  photoArr: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      webformatURL: PropTypes.string.isRequired,
      alt: PropTypes.string,
      largeImageURL: PropTypes.string.isRequired,
    })
  ).isRequired,
  openModal: PropTypes.func.isRequired,
};
