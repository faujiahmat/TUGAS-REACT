import Navbar from '../../organisms/Navbar';
import CardProduct from '../../organisms/CardProduct';
import { useEffect, useState } from 'react';
import { fetchDataCall } from '../../../service/foods.service';

export default function Homepage() {
  const [dataFoods, setDataFoods] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const fetchData = async () => {
    setIsLoading(true);
    const data = await fetchDataCall();
    if (data.data.results) {
      setIsLoading(false);
      setDataFoods(data.data.results);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="max-w-[1880px] font-roboto p-5">
      <Navbar setDataFoods={setDataFoods} setIsLoading={setIsLoading} />
      {isLoading ? 'Loading..' : <></>}
      <main className="grid grid-cols-4 gap-4">
        {dataFoods.map((item, idx) => (
          <CardProduct key={idx} item={item} />
        ))}
      </main>
    </div>
  );
}
