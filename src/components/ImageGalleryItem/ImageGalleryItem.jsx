import propTypes from 'prop-types';

const ImageGalleryItem = ({ webformatURL }) => {
  return (
    <li className="ImageGalleryItem">
      <img src={webformatURL} alt="pictures" />
    </li>
  );
};

export default ImageGalleryItem;
ImageGalleryItem.propTypes = {
  webformatURL: propTypes.string.isRequired,
};
