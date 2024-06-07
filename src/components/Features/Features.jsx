import { sprite } from '../../shared/icons/index';
import Button from '../../shared/components/Button/Button';
import s from './Features.module.css';

// const Features = ({ details }) => {
//   const features = [
//     { id: 'airConditioner', label: 'Air Conditioner' },
//     { id: 'wifi', label: 'Wi-Fi' },
//     { id: 'heating', label: 'Heating' },
//     { id: 'kitchen', label: 'Kitchen' },
//     { id: 'bathroom', label: 'Bathroom' },
//     { id: 'beds', label: 'Beds' },
//     { id: 'TV', label: 'TV' },
//     { id: 'microwave', label: 'Microwave' },
//     { id: 'shower', label: 'Shower' },
//     { id: 'toilet', label: 'Toilet' },
//     { id: 'freezer', label: 'Freezer' },
//     { id: 'hob', label: 'Hob' },
//     { id: 'radio', label: 'Radio' },
//     { id: 'CD', label: 'CD' },
//     { id: 'water', label: 'Water' },
//     { id: 'gas', label: 'Gas' },
//   ];

//   return (
//     <div className={s.featuresContainer}>
//       {features.map((feature) => (
//         <Button key={feature.id} className={s.featureBtn}>
//           {details[feature.id]
//             ? `${feature.label}: ${details[feature.id]}`
//             : `No ${feature.label}`}
//         </Button>
//       ))}
//     </div>
//   );
// };
// export default Features;
const Features = ({ camper }) => {
  return (
    <div className={s.featuresContainer}>
      <ul className={s.featuresList}>
        <li>
          <Button>
            <svg width="20" height="20">
              <use xlinkHref={`${sprite}#icon-users`}></use>
            </svg>
            <span>{camper.adults}adults</span>
          </Button>
        </li>
        <li>
          <Button>
            <svg width="20" height="20">
              <use xlinkHref={`${sprite}#icon-automatic`}></use>
            </svg>
            <span>{camper.transmission}</span>
          </Button>
        </li>
        <li>
          <Button>
            <svg width="20" height="20">
              <use xlinkHref={`${sprite}#icon-petrol`}></use>
            </svg>
            <span>Petrol</span>
          </Button>
        </li>
        <li>
          {/* тут треба зробити умову якщо в кітчен не нал, то виводити */}
          <Button>
            <svg width="20" height="20">
              <use xlinkHref={`${sprite}#icon-kitchen`}></use>
            </svg>
            <span>Kitchen</span>
          </Button>
        </li>
        <li>
          <Button>
            <svg width="20" height="20">
              <use xlinkHref={`${sprite}#icon-bed`}></use>
            </svg>
            <span>{camper.details.beds}beds</span>
          </Button>
        </li>
        <li>
          {/* тут треба зробити умову якщо в airCondit не null, то виводити */}
          <Button>
            <svg width="20" height="20">
              <use xlinkHref={`${sprite}#icon-conditioner`}></use>
            </svg>
            <span>AC</span>
          </Button>
        </li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
      </ul>
    </div>
  );
};
export default Features;
