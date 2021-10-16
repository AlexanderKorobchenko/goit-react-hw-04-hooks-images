import React from 'react';
import { createPortal } from 'react-dom';
import PropTypes from 'prop-types';
import s from './Modal.module.css';

class Modal extends React.Component {
  componentDidMount() {
    document.addEventListener('keydown', this.escFunction, false);
  }

  componentWillUnmount() {
    document.removeEventListener('keydown', this.escFunction, false);
  }

  escFunction = e => {
    if (e.keyCode === 27) {
      this.props.closeModal();
    }
  };

  render() {
    return createPortal(
      <div
        className={s.backdrop}
        onClick={e => {
          if (e.target.nodeName === 'IMG') {
            return;
          }

          this.props.closeModal();
        }}
      >
        <div className={s.window}>{this.props.children}</div>
      </div>,
      document.getElementById('modal-root'),
    );
  }
}

Modal.protoType = {
  closeModal: PropTypes.func,
};

export default Modal;
