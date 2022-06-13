import { Component } from 'react';
import propTypes from 'prop-types';
import ImageGalleryItem from 'components/ImageGalleryItem/ImageGalleryItem';
import axios from 'axios';
import '../styles.css';
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css';
import { Bars } from 'react-loader-spinner';

class ImageGallery extends Component {
  state = {
    images: [],
    page: 1,
    status: 'idle',
  };
  async getImages() {
    const querry = this.props.request;
    const { page } = this.state;
    const searchRequest = `https://pixabay.com/api/?q=${querry}&page=${page}&key=26794105-00755d3499209d24967edc661&simages_type=photo&orientation=horizontal&per_page=12`;

    try {
      const response = await axios.get(searchRequest);
      return response.data;
    } catch (error) {
      console.log(error.toJSON());
      return error.toJSON();
    }
  }
  async componentDidUpdate(prevProps) {
    const prevRequest = prevProps.request;
    const nextRequest = this.props.request;
    if (prevRequest !== nextRequest && nextRequest !== '') {
      this.setState({ status: 'pending' });
      this.getImages().then(response => {
        let images = [];
        response.hits.map(image => {
          const { id, webformatURL, largeImageURL } = image;
          const img = { id, webformatURL, largeImageURL };
          return images.push(img);
        });
        this.setState({ images, status: 'resolved' });
      });
      this.getImages().catch(() => {
        this.setState({ status: 'rejected' });
      });
    }
  }

  render() {
    const { images, status } = this.state;
    if (status === 'idle') {
      return <h2>Input Your Request</h2>;
    }
    if (status === 'pending') {
      return (
        <h2>
          <Bars width="110" color="#c8553d" />
          Loading...
        </h2>
      );
    }
    if (images.length === 0) {
      return <h2>Sorry there are no such images: {this.props.request}</h2>;
    }

    if (status === 'resolved') {
      return (
        <ul className="ImageGallery">
          {images.map(({ id, webformatURL, largeImageURL }) => (
            <ImageGalleryItem key={id} webformatURL={webformatURL} />
          ))}
        </ul>
      );
    }
  }
}
export default ImageGallery;

// ImageGallery.propTypes = {
//   gallery: propTypes.array.isRequired,
// };
