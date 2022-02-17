import ImageGalleryItem from '../imageGalleryItem/ImageGalleryItem';
import styles from './imageGallery.module.css'

const ImageGallery = ({photoArr}) => {
    // console.log(photoArr)
  return <ul className={styles.galleryList}><ImageGalleryItem photoArr={photoArr}/></ul>;
};

export default ImageGallery;
