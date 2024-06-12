import { sprite } from '../../shared/icons';
import Button from '../../shared/components/Button/Button';

import s from './OneFeature.module.css';

const OneFeature = ({ icon, label, value }) => {
  return (
    <div className={s.container}>
      <Button className={s.featureBtn}>
        <svg width="20" height="20">
          <use xlinkHref={`${sprite}#${icon}`}></use>
        </svg>
        <span>
          {value} {label}
        </span>
      </Button>
    </div>
  );
};

export default OneFeature;
