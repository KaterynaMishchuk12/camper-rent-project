import { useNavigate } from 'react-router-dom';
import Button from 'shared/components/Button/Button';

import s from './Welcome.module.css';

const Welcome = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate('/catalogue');
  };
  return (
    <div className={s.wrapper}>
      <h1>Planning an adventure trip? You`re at the right place!</h1>
      <h2>Choose a camper and start your journey</h2>
      <Button onClick={handleClick}>Find camper</Button>
    </div>
  );
};

export default Welcome;
