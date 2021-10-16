import React from 'react';
import PropTypes from 'prop-types';
import ImageGalleryItem from '../ImageGalleryItem';
import RequestAPI from '../../services/apiService';
import Loader from '../Loader';
import IdleMessage from '../IdleMessage/';
import NotFound from '../NotFound';
import Button from '../Button';
import s from './ImageGallery.module.css';

const newRequestAPI = new RequestAPI();

class ImageGallery extends React.Component {
  state = {
    images: [],
    status: 'idle',
  };

  componentDidUpdate(prevProps, prevState) {
    const prevName = prevProps.searchValue;
    const nextName = this.props.searchValue;

    if (prevName !== nextName) {
      this.setState({ status: 'pending' });

      newRequestAPI.value = nextName;
      newRequestAPI.resetPage();
      newRequestAPI.getData().then(result => {
        if (result.hits.length !== 0) {
          return this.setState({ images: result.hits, status: 'resolved' });
        }

        return this.setState({ images: result.hits, status: 'rejected' });
      });
    }
  }

  addImages = () => {
    this.setState({ status: 'pending' });

    newRequestAPI
      .getData()
      .then(result => {
        this.setState(prevState => {
          return {
            images: [...prevState.images, ...result.hits],
            status: 'resolved',
          };
        });
      })
      .finally(() => {
        setTimeout(() => {
          window.scrollTo({
            top: document.documentElement.scrollHeight,
            behavior: 'smooth',
          });
        }, 400);
      });
  };

  render() {
    const { images, status } = this.state;
    const { searchValue } = this.props;

    if (status === 'idle') {
      return <IdleMessage />;
    }

    if (status === 'pending') {
      return (
        <>
          <ul className={s.gallery}>
            <ImageGalleryItem array={images} />
          </ul>
          <Loader />;
        </>
      );
    }

    if (status === 'rejected') {
      return <NotFound value={searchValue} />;
    }

    if (status === 'resolved') {
      return (
        <>
          <ul className={s.gallery}>
            <ImageGalleryItem array={images} />
          </ul>
          <Button addImages={this.addImages} />
        </>
      );
    }
  }
}

ImageGallery.protoType = {
  searchValue: PropTypes.string,
};

export default ImageGallery;
