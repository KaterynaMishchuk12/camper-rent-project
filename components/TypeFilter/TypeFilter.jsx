import Filter from '../../shared/components/Filter/Filter';
import s from './TypeFilter.module.css';

const TypeFilter = () => {
  return (
    <div className={s.wrapper}>
      <p className={s.vehicle}>Vehicle type</p>
      <div className={s.typeContainer}>
        <Filter
          text={'Van'}
          icon={'icon-camperVan'}
          width={'40'}
          height={'28'}
        />
        <Filter
          text={'Fully Integrated'}
          icon={'icon-camperFullyInt'}
          width={'40'}
          height={'28'}
        />
        <Filter
          text={'Alcove'}
          icon={'icon-alcove'}
          width={'40'}
          height={'28'}
        />
      </div>
    </div>
  );
};

export default TypeFilter;
