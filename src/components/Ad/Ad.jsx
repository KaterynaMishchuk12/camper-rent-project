import Button from '../../shared/components/Button/Button';
import Features from '../Features/Features';
import CamperModal from '../CamperModal/CamperModal';
import { useState } from 'react';
import { sprite } from '../../shared/icons/index';

import s from './Ad.module.css';

const Ad = ({ campers }) => {
  const [modalActive, setModalActive] = useState(false);
  const [selectedCamper, setSelectedCamper] = useState(null);

  const cropDescription = (description, maxLength = 120) => {
    if (description.length <= maxLength) {
      return description;
    }
    return description.slice(0, maxLength) + '...';
  };

  const handleShowMore = (camper) => {
    setSelectedCamper(camper);
    setModalActive(true);
  };
  return (
    <div className={s.container}>
      <ul>
        {campers.map((camper) => (
          <li key={camper._id} className={s.li}>
            <div className={s.wrapper}>
              <div className={s.photoWrap}>
                <img
                  src={camper.gallery[0]}
                  alt={camper.name}
                  // width="290"
                  // height="310"
                  className={s.photo}
                />
              </div>
              <div className={s.info}>
                <div className={s.title}>
                  <h3 className={s.camperName}>{camper.name}</h3>
                  <div className={s.priceHeart}>
                    <h3 className={s.price}>{camper.price}</h3>
                    <Button className={s.heartBtn}>
                      <svg width="24" height="24" className={s.icon}>
                        <use xlinkHref={`${sprite}#icon-heart`}></use>
                      </svg>
                    </Button>
                  </div>
                </div>
                <div className={s.ratingLocation}>
                  <svg width="16" height="16">
                    <use xlinkHref={`${sprite}#icon-star`}></use>
                  </svg>
                  <span className={s.rating}>{camper.rating}</span>
                  <p
                    className={s.rating}
                  >{`(${camper.reviews.length} Reviews)`}</p>
                  <div className={s.location}>
                    <svg width="16" height="16">
                      <use xlinkHref={`${sprite}#icon-location`}></use>
                    </svg>
                    <span className={s.description}>{camper.location}</span>
                  </div>
                </div>
                <p className={s.description}>
                  {cropDescription(camper.description)}
                </p>
                <div className={s.featuresWrap}>
                  <div className={s.features}>
                    <Features camper={camper} />
                  </div>
                  <Button
                    className={s.showMoreBtn}
                    onClick={() => handleShowMore(camper)}
                  >
                    Show More
                  </Button>
                </div>
              </div>
            </div>
          </li>
        ))}
      </ul>
      {modalActive && (
        <CamperModal
          active={modalActive}
          setActive={setModalActive}
          camper={selectedCamper}
        />
      )}
    </div>
  );
};

export default Ad;
