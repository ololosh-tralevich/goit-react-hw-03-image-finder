
const ImageGalleryItem = ({ photoArr }) => {
  const partOfCode = photoArr.map(photo => {
    return (
      <li key={photo.id}>
        <img src={photo.webformatURL}></img>
      </li>
    );
  });
  return <ul>{partOfCode}</ul>;
};

export default ImageGalleryItem;
