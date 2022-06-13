import React, { Component } from 'react';
import { createPortal } from 'react-dom';
import s from '../Modal/Modal.module.css';
import ImageGalleryItem from 'components/ImageGalleryItem/ImageGalleryItem';

const modalRoot = document.querySelector('#modal-root');

export default class Modal extends Component {
  componentDidMount() {
    window.addEventListener('keydown', this.handleKeydown);
  }
  componentWillUnmount() {
    window.removeEventListener('keydown', this.handleKeydown);
  }
  handleKeydown = e => {
    if (e.code === 'Escape') {
      this.props.onClose();
    }
  };
  handleBackdropClick = e => {
    if (e.currentTarget === e.target) {
      this.props.onClose();
    }
  };
  render() {
    return createPortal(
      <div className={s.backdrop} onClick={this.handleBackdropClick}>
        <div className={s.content}>{this.props.children}</div>
      </div>,
      modalRoot
    );
  }
}
