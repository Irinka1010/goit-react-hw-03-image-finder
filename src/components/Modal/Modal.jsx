import React, { Component } from 'react';
import { createPortal } from 'react-dom';
import css from './Modal.module.css';
const modalRoot = document.querySelector('#modal-root');
export default class Modal extends Component {
  componentDidMount() {
    window.addEventListener('keydown', this.hendleKeydown);
  }
  componentWillUnmount() {
    window.removeEventListener('keydown', this.hendleKeydown);
  }
  hendleKeydown = e => {
    if (e.code === 'Escape') {
      console.log('rere');
      this.props.onClose();
    }
  };
  hendeleBackdropClick = ev => {
    if (ev.currentTarget === ev.target) {
      this.props.onClose();
    }
  };

  render() {
    const { bigPicture } = this.props;
    return createPortal(
      <div className={css.ModalBackdrop} onClick={this.hendeleBackdropClick}>
        <div className={css.ModalContent}>
          <img src={bigPicture} alt="" />
        </div>
      </div>,
      modalRoot
    );
  }
}
