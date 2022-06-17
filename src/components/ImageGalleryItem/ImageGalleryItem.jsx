import PropTypes from 'prop-types';
import '../styles.css';
export const ImageGalleryItem = ({ images }) => {
  return images.map(({ id, src, alt }) => {
    return (
      <li className="ImageGalleryItem" key={id}>
        <img
          className="ImageGalleryItem-image"
          src={src}
          alt={alt}
          data-id={id}
        />
      </li>
    );
  });
};

ImageGalleryItem.propTypes = {
  images: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      src: PropTypes.string.isRequired,
      alt: PropTypes.string.isRequired,
    })
  ),
};
