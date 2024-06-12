import s from './Features.module.css';
import OneFeature from '../OneFeature/OneFeature';

const Features = ({ camper }) => {
  const { adults, transmission, details } = camper;

  const features = [
    { id: 'icon-users', label: 'adults', value: adults },
    { id: 'icon-automatic', label: '', value: transmission },
    { id: 'icon-petrol', label: 'Petrol', value: '' },
    details.kitchen && { id: 'icon-kitchen', label: '', value: 'Kitchen' },
    { id: 'icon-bed', label: 'beds', value: details.beds },
    { id: 'icon-air', label: 'AC', value: '' },
    details.airConditioner > 0 && {
      id: 'icon-conditioner',
      label: 'air conditioner',
      value: details.airConditioner,
    },
    details.CD > 0 && { id: 'icon-cd', label: 'CD', value: details.CD },
    details.radio > 0 && {
      id: 'icon-radio',
      label: 'Radio',
      value: details.radio,
    },
    details.hob > 0 && { id: 'icon-hob', label: 'hob', value: details.hob },
    details.shower > 0 && { id: 'icon-shower', label: 'Shower', value: '' },
    details.microwave > 0 && {
      id: 'icon-microwave',
      label: 'Microwave',
      value: '',
    },
    details.water && { id: 'icon-water', label: 'Water', value: '' },
    details.gas && { id: 'icon-gas', label: 'Gas', value: '' },
    details.freezer > 0 && {
      id: 'icon-freezer',
      label: 'Freezer',
      value: details.freezer,
    },
    details.toilet > 0 && {
      id: 'icon-toilet',
      label: 'Toilet',
      value: details.toilet,
    },
  ].filter(Boolean);

  return (
    <div className={s.featuresContainer}>
      <ul className={s.featuresList}>
        {features.slice(0, 6).map((feature) => (
          <li key={feature.id}>
            <OneFeature
              icon={feature.id}
              label={feature.label}
              value={feature.value}
            />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Features;
