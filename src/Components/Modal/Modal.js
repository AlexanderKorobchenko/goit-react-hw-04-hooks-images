import { useEffect } from 'react';
import { createPortal } from 'react-dom';
import PropTypes from 'prop-types';
import s from './Modal.module.css';

function Modal({ closeModal, children }) {
  useEffect(() => {
    document.addEventListener('keydown', escFunction, false);

    // returned function will be called on component unmount
    return () => {
      document.removeEventListener('keydown', escFunction, false);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const escFunction = e => {
    if (e.keyCode === 27) {
      closeModal();
    }
  };

  return createPortal(
    <div
      className={s.backdrop}
      onClick={e => {
        if (e.target.nodeName === 'IMG') {
          return;
        }

        closeModal();
      }}
    >
      <div className={s.window}>{children}</div>
    </div>,
    document.getElementById('modal-root'),
  );
}

Modal.protoType = {
  closeModal: PropTypes.func,
};

export default Modal;
