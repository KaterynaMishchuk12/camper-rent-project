import { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Ad from '../components/Ad/Ad';
import getAdverts from 'services/getApi';
import LoadMoreBtn from '../components/LoadMoreBtn/LoadMoreBtn';
import {
  getCampers,
  getCurrentPage,
  getItemsPerPage,
} from '../redux/selectors';
import {
  setCampers as setCampersAction,
  loadMoreCampers,
} from '../redux/campersSlice';
import SideBar from '../shared/components/SideBar/SideBar';
import LoacationForm from '../components/LocationForm/LocationForm';
import EquipmentFilter from '../components/EquipmentFilter/EquipmentFilter';
import TypeFilter from '../components/TypeFilter/TypeFilter';

const CatalogPage = () => {
  const dispatch = useDispatch();
  const campers = useSelector(getCampers);
  const currentPage = useSelector(getCurrentPage);
  const itemsPerPage = useSelector(getItemsPerPage);
  const [displayedCampers, setDisplayedCampers] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await getAdverts();
        dispatch(setCampersAction(data));
      } catch (error) {
        console.error(error.message);
      }
    };

    if (campers.length === 0) {
      fetchData();
    }
  }, [dispatch, campers.length]);

  useEffect(() => {
    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    setDisplayedCampers(campers.slice(0, endIndex));
  }, [campers, currentPage, itemsPerPage]);

  const totalPages = Math.ceil(campers.length / itemsPerPage);
  const showLoadMoreBtn = campers.length > 0 && currentPage < totalPages;

  const loadMore = () => {
    console.log('Load More Clicked');
    dispatch(loadMoreCampers());
  };

  // ************
  useEffect(() => {
    console.log('Campers fetched:', campers);
  }, [campers]);

  useEffect(() => {
    console.log('Displayed campers updated:', displayedCampers);
  }, [displayedCampers]);
  // **************************

  console.log('Current Page:', currentPage);
  console.log('Total Pages:', totalPages);
  console.log('Show Load More Button:', showLoadMoreBtn);
  return (
    <div style={{ display: 'flex', gap: '10px', padding: '60px 40px' }}>
      <SideBar>
        <LoacationForm />
        <EquipmentFilter />
        <TypeFilter />
      </SideBar>
      <div>
        <Ad campers={displayedCampers} />
        {showLoadMoreBtn && <LoadMoreBtn onClick={loadMore} />}
      </div>
    </div>
  );
};

export default CatalogPage;
