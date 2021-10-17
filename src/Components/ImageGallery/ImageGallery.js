import { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import ImageGalleryItem from '../ImageGalleryItem';
import RequestAPI from '../../services/apiService';
import Loader from '../Loader';
import IdleMessage from '../IdleMessage/';
import NotFound from '../NotFound';
import Button from '../Button';
import s from './ImageGallery.module.css';

const newRequestAPI = new RequestAPI();

function ImageGallery({ searchValue }) {
  const [images, setImages] = useState([]);
  const [status, setStatus] = useState('idle');

  useEffect(() => {
    if (searchValue === '') {
      return;
    }

    setStatus('pending');

    newRequestAPI.value = searchValue;
    newRequestAPI.resetPage();
    newRequestAPI
      .getData()
      .then(result => {
        if (result.hits.length !== 0) {
          setImages(result.hits);
          setStatus('resolved');
          return;
        }

        setImages(result.hits);
        setStatus('rejected');
        return result;
      })
      .catch(err => console.warn(err));
  }, [searchValue]);

  const addImages = () => {
    setStatus('pending');

    newRequestAPI
      .getData()
      .then(result => {
        setImages([...images, ...result.hits]);
        setStatus('resolved');
        return result;
      })
      .catch(err => console.warn(err))
      .finally(() => {
        setTimeout(() => {
          window.scrollTo({
            top: document.documentElement.scrollHeight,
            behavior: 'smooth',
          });
        }, 400);
      });
  };

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
        <Button addImages={addImages} />
      </>
    );
  }
}

ImageGallery.protoType = {
  searchValue: PropTypes.string,
};

export default ImageGallery;
