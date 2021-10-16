import PropTypes from 'prop-types';
import s from './NotFound.module.css';

function NotFound({ value }) {
  return <span className={s.message}>Not found "{value}"</span>;
}

NotFound.protoType = {
  value: PropTypes.string,
};

export default NotFound;
