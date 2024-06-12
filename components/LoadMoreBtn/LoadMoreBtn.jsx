import Button from '../../shared/components/Button/Button';
import s from './LoadMoreBtn.module.css';

const LoadMoreBtn = ({ onClick }) => {
  return (
    <Button classname={s.loadMoreBtn} onClick={onClick}>
      Load more
    </Button>
  );
};

export default LoadMoreBtn;
