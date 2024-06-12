import { Modal } from '../../shared/components/Modal/Modal';
import AdModal from '../AdModal/AdModal';
import { sprite } from '../../shared/icons';

import s from './CamperModal.module.css';

const CamperModal = ({ active, setActive, camper }) => {
  return (
    <div>
      <Modal active={active} setActive={setActive}>
        <button onClick={() => setActive(false)} className={s.btnClose}>
          <svg width="16" height="16">
            <use xlinkHref={`${sprite}#icon-close`}></use>
          </svg>
        </button>
        <AdModal camper={camper} />
      </Modal>
    </div>
  );
};

export default CamperModal;
