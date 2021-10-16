import s from './Loader.module.css';

function Loader() {
  return (
    <div className={s.loader}>
      <div className={s.circle}></div>
      <div className={s.circle}></div>
      <div className={s.circle}></div>
    </div>
  );
}

export default Loader;
