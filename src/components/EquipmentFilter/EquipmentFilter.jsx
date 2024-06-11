import Filter from '../../shared/components/Filter/Filter';
import s from './EquipmentFilter.module.css';

const EquipmentFilter = () => {
  return (
    <div className={s.wrapper}>
      <p className={s.vehicle}>Vehicle equipment</p>
      <div className={s.EquipContainer}>
        <Filter text={'AC'} icon={'icon-air'} width={'32'} height={'32'} />
        <Filter
          text={'Automatic'}
          icon={'icon-automatic'}
          width={'32'}
          height={'32'}
        />
        <Filter
          text={'Kitchen'}
          icon={'icon-kitchen'}
          width={'32'}
          height={'32'}
        />
        <Filter text={'TV'} icon={'icon-tv'} width={'32'} height={'32'} />
        <Filter
          text={'Shower/WC'}
          icon={'icon-shower'}
          width={'32'}
          height={'32'}
        />
      </div>
    </div>
  );
};

export default EquipmentFilter;
