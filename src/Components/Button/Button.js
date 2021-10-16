import PropTypes from 'prop-types';
import s from './Button.module.css';

function Button({ addImages }) {
  return (
    <button type="button" className={s.button} onClick={() => addImages()}>
      Load more
    </button>
  );
}

Button.protoType = {
  addImages: PropTypes.func,
};

export default Button;
