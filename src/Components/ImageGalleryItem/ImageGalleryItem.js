import React from 'react';
import PropTypes from 'prop-types';
import Modal from '../Modal';
import s from './ImageGalleryItem.module.css';

class ImageGalleryItem extends React.Component {
  state = {
    showModal: false,
  };

  openModal = e => {
    this.setState({ showModal: e.target.dataset.set });
  };

  closeModal = () => {
    this.setState({ showModal: false });
  };

  render() {
    return (
      <>
        {this.props.array.map(element => {
          return (
            <li className={s.card} key={element.id}>
              <img
                onClick={this.openModal}
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
        {this.state.showModal && (
          <Modal closeModal={this.closeModal}>
            <img
              src={this.state.showModal}
              alt="modal_picture"
              className={s.bigimg}
            />
          </Modal>
        )}
      </>
    );
  }
}

ImageGalleryItem.protoType = {
  array: PropTypes.array,
};

export default ImageGalleryItem;
