import Button from 'shared/components/Button/Button';
import { sprite } from '../../shared/icons/index';
import s from './Ad.module.css';

const Ad = ({ campers }) => {
  const cropDescription = (description, maxLength = 120) => {
    if (description.length <= maxLength) {
      return description;
    }
    return description.slice(0, maxLength) + '...';
  };
  return (
    <div className={s.container}>
      <ul>
        {campers.map((camper) => (
          <li key={camper._id}>
            <div className={s.info}>
              <img src="" alt={camper.name} width="400" height="340" />
              <div className={s.camperTitle}>
                <h3>{camper.name}</h3>
                <h3>{camper.price}</h3>
                <svg width="24" height="24" className={s.icon}>
                  <use xlinkHref={`${sprite}#icon-map-pin`}></use>
                </svg>
              </div>
              <div className={s.ratingLocation}></div>
              <div className={s.ratingLocation}></div>
              <p className={s.description}>
                {cropDescription(camper.description)}
              </p>
            </div>
            <Button className={s.showMoreBtn}>Show More</Button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Ad;
