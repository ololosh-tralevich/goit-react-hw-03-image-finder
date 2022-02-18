import { Component } from 'react';
import { createPortal } from 'react-dom';

import styles from './modal.module.css';

const modalRoot = document.getElementById('modal-root');

class Modal extends Component {
  componentWillMount() {
    document.addEventListener('keydown', this.close);
  }

  componentWillUnmount() {
    document.removeEventListener('keydown', this.close);
  }

  close = ev => {
    if (ev.code === 'Escape') {
      return this.props.closeModal();
    }
    if (ev.target === ev.currentTarget) {
      this.props.closeModal();
    }
  };

  render() {
    // console.log(this.props.modalContent);
    return createPortal(
      <div onClick={this.close} className={styles.modalOverlay}>
        <div className={styles.modal}>
          <button onClick={this.close} className={styles.closeModalBtn}>
            X
          </button>
          <img className={styles.modalImg} src={this.props.modalContent} alt={'big'} loading='lazy'></img>
        </div>
      </div>,
      modalRoot
    );
  }
}

export default Modal;
