import s from './IdleMessage.module.css';

function IdleMessage() {
  return (
    <>
      <span className={s.message}>Start your search</span>
      <a
        href="https://alexanderkorobchenko.github.io/my-project_Image-search-engine/"
        className={s.link}
      >
        This project in VanillaJS
      </a>
    </>
  );
}

export default IdleMessage;
