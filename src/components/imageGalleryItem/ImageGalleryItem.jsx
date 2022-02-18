import {nanoid} from 'nanoid'

import styles from './imageGalleryItem.module.css';

const ImageGalleryItem = ({ photoArr, openModal }) => {
  if (!photoArr.length) {
    return <></>;
  }
  const partOfCode = photoArr.map(photo => {
    return (
      <li className={styles.galleryListItem} key={nanoid()} onClick={() => openModal(photo)}>
        <img
          className={styles.galleryListItemImg}
          src={photo.webformatURL}
          alt={photo.tags}
          loading="lazy"
        ></img>
      </li>
    );
  });
  return <>{partOfCode}</>;
};

export default ImageGalleryItem;
