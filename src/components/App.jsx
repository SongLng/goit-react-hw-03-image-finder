import React, { Component } from 'react';
import { ToastContainer } from 'react-toastify';
import Modal from './Modal/Modal';
import Searchbar from './Searchbar/Searchbar';
// import ImageGalleryItem from './ImageGalleryItem/ImageGalleryItem';
import ImageGallery from './ImageGallery/ImageGallery';
import ImageGalleryItem from './ImageGalleryItem/ImageGalleryItem';

class App extends Component {
  state = {
    showModal: false,
    input: '',
  };

  componentDidMount() {}
  componentDidUpdate() {}

  handleFormSubmit = input => {
    this.setState({ input });
  };

  toggleModal = () => {
    this.setState(({ showModal }) => ({
      showModal: !showModal,
    }));
  };

  render() {
    const { showModal } = this.state;

    return (
      <>
        <Searchbar onSubmit={this.handleFormSubmit} />
        <button type="button" onClick={this.toggleModal}>
          Open Modal
        </button>
        {showModal && (
          <Modal onClose={this.toggleModal}>
            <button type="button" onClick={this.toggleModal}>
              Close Modal
            </button>
          </Modal>
        )}
        <ToastContainer />

        <ImageGallery request={this.state.input} />
      </>
    );
  }
}

export { App };
