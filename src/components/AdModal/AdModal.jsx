import { sprite } from '../../shared/icons/index';
import s from './AdModal.module.css';

const AdModal = ({ camper }) => {
  return (
    <div className={s.container}>
      <div className={s.info}>
        <h3 className={s.camperName}>{camper.name}</h3>
        <div className={s.ratingLocation}>
          <svg width="16" height="16">
            <use xlinkHref={`${sprite}#icon-star`}></use>
          </svg>
          <span className={s.rating}>{camper.rating}</span>
          <p className={s.rating}>{`(${camper.reviews.length} Reviews)`}</p>
          <div className={s.location}>
            <svg width="16" height="16">
              <use xlinkHref={`${sprite}#icon-location`}></use>
            </svg>
            <span className={s.description}>{camper.location}</span>
          </div>
        </div>
        <div>
          <h3 className={s.price}>{`UAH ${camper.price}`}</h3>
        </div>
        <div className={s.photoWrap}>
          {camper.gallery.map((image, index) => (
            <div key={index} className={s.photoBox}>
              <img
                src={image}
                alt={`${camper.name} ${index + 1}`}
                className={s.photo}
              />
            </div>
          ))}
        </div>
      </div>
      <p>{camper.description}</p>
    </div>
  );
};

export default AdModal;
