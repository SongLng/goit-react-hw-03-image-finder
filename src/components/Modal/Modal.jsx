import React, { Component } from 'react';
import { createPortal } from 'react-dom';
import s from '../Modal/Modal.module.css';

const modalRoot = document.querySelector('#modal-root');

export default class Modal extends Component {
  componentDidMount() {
    window.addEventListener('keydown', e => {
      if (e.code === 'Escape') {
        this.props.onClose();
      }
    });
  }
  componentWillUnmount() {
    // console.log('componentWillUnmount');
  }

  render() {
    return createPortal(
      <div className={s.backdrop}>
        <div className={s.content}>{this.props.children}</div>
      </div>,
      modalRoot
    );
  }
}
