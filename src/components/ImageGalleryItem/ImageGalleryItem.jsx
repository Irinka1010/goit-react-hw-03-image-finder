const ImageGalleryItem = ({ pictures, onClick }) => {
  const elements = pictures.map(({ id, webformatURL, largeImageURL }) => (
    <li key={id}>
      <img src={webformatURL} alt="" />
    </li>
  ));
  return <ul> {elements}</ul>;
};
export default ImageGalleryItem;
