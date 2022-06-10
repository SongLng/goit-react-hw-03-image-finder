import React, { Component } from 'react';
import Modal from './Modal/Modal';

class App extends Component {
  state = {
    showModal: false,
  };

  componentDidMount() {}
  componentDidUpdate() {}

  toggleModal = () => {
    this.setState(({ showModal }) => ({
      showModal: !showModal,
    }));
  };

  render() {
    const { showModal } = this.state;

    return (
      <>
        <button type="button" onClick={this.toggleModal}>
          Open Modal
        </button>
        {showModal && (
          <Modal onClose={this.toggleModal}>
            <h1>Modal content</h1>
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit.
              Necessitatibus obcaecati vitae praesentium officia in eum nobis
              qui recusandae minus iusto quo exercitationem cum debitis facilis,
              commodi ratione sequi consequatur molestiae.
            </p>
            <button type="button" onClick={this.toggleModal}>
              Close Modal
            </button>
          </Modal>
        )}
      </>
    );
  }
}

export { App };
