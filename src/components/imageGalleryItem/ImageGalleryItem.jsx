import styles from './imageGalleryItem.module.css';

const ImageGalleryItem = ({ photoArr }) => {
  if (!photoArr.length) {
    return <></>;
  }
  console.log(photoArr);
  const partOfCode = photoArr.map(photo => {
    return (
      <li className={styles.galleryListItem} key={photo.id}>
        <img
          className={styles.galleryListItemImg}
          src={photo.webformatURL}
          alt={photo.tags}
        ></img>
      </li>
    );
  });
  return <>{partOfCode}</>;
};

export default ImageGalleryItem;
