import s from './Header.module.scss';

const Header = () => {
  return (
    <div>
      <svg className={s.svg} width="20" height="20">
        <use href="#users"></use>
      </svg>
      <h1>Home Page</h1>
    </div>
  );
};

export default Header;
