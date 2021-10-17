import { useState } from 'react';
import PropTypes from 'prop-types';
import Modal from '../Modal';
import s from './ImageGalleryItem.module.css';

function ImageGalleryItem({ array }) {
  const [showModal, setshowModal] = useState(false);

  const openModal = e => {
    setshowModal(e.target.dataset.set);
  };

  const closeModal = () => {
    setshowModal(false);
  };

  return (
    <>
      {array.map(element => {
        return (
          <li className={s.card} key={element.id}>
            <img
              onClick={openModal}
              className={s.image}
              src={element.webformatURL}
              alt={element.id}
              data-set={element.largeImageURL}
            />
            {/* <div className={s.stats}>
                <p className={s.item}>
                  <i className={s.icons}>thumb_up</i>
                  {element.likes}
                </p>
                <p className={s.item}>
                  <i className={s.icons}>visibility</i>
                  {element.views}
                </p>
                <p className={s.item}>
                  <i className={s.icons}>comment</i>
                  {element.comments}
                </p>
                <p className={s.item}>
                  <i className={s.icons}>cloud_download</i>
                  {element.downloads}
                </p>
              </div> */}
          </li>
        );
      })}
      {showModal && (
        <Modal closeModal={closeModal}>
          <img src={showModal} alt="modal_picture" className={s.bigimg} />
        </Modal>
      )}
    </>
  );
}

ImageGalleryItem.protoType = {
  array: PropTypes.array,
};

export default ImageGalleryItem;
