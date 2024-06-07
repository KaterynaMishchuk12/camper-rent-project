import { useEffect, useState } from 'react';
import Ad from '../components/Ad/Ad';
import getAdverts from 'services/getApi';

const CatalogPage = () => {
  const [campers, setCampers] = useState([]);

  useEffect(() => {
    async function getData() {
      try {
        const data = await getAdverts();
        setCampers(data);
        console.log(data);
      } catch (error) {
        console.log(error.message);
      }
    }
    getData();
  }, []);

  return (
    <>
      <Ad campers={campers} />
    </>
  );
};

export default CatalogPage;
