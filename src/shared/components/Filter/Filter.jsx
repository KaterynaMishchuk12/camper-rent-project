import { sprite } from '../../icons';
import s from './Filter.module.css';

const Filter = ({ icon, width, height, text }) => {
  return (
    <div className={s.container}>
      <svg width={width} height={height}>
        <use xlinkHref={`${sprite}#${icon}`}></use>
      </svg>
      <p>{text}</p>
    </div>
  );
};

export default Filter;
