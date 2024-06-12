import { Modal } from '../../shared/components/Modal/Modal';
import AdModal from '../AdModal/AdModal';
import { sprite } from '../../shared/icons';
import { Link, Outlet } from 'react-router-dom';
import { Suspense } from 'react';

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
        <div>
          <Link to={`features`}>Features</Link>
          <Link to={`reviews`}>Reviews</Link>
        </div>

        <Suspense fallback={<b>Loading data...</b>}>
          <Outlet />
        </Suspense>
      </Modal>
    </div>
  );
};

export default CamperModal;
