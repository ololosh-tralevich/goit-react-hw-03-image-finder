import ImageGalleryItem from '../imageGalleryItem/ImageGalleryItem';
import styles from './imageGallery.module.css'

const ImageGallery = ({photoArr, openModal}) => {
  return <ul className={styles.galleryList}><ImageGalleryItem photoArr={photoArr}  openModal={openModal}/></ul>;
};

export default ImageGallery;
