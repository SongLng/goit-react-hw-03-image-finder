import PropTypes from 'prop-types';
import { ImageGalleryItem } from '../ImageGalleryItem/ImageGalleryItem';
import '../styles.css';

export const ImageGallery = ({ data, onClick }) => {
  const imageClick = e => {
    if (e.target.nodeName !== 'IMG') {
      return;
    }

    onClick(Number(e.target.dataset.id));
  };

  return (
    <>
      <ul className="ImageGallery" onClick={imageClick}>
        {data.map(data => (
          <ImageGalleryItem images={data} />
        ))}
      </ul>
    </>
  );
};

ImageGallery.propTypes = {
  data: PropTypes.arrayOf(PropTypes.object.isRequired),
};
