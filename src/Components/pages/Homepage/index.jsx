import Navbar from '../../organisms/Navbar';
import CardProduct from '../../organisms/CardProduct';
import { useEffect, useState } from 'react';
import { fetchDataCall } from '../../../service/foods.service';

export default function Homepage() {
  const [dataFoods, setDataFoods] = useState([]);

  const fetchData = async () => {
    const data = await fetchDataCall();
    setDataFoods(data.data.results);
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="max-w-[1880px] font-roboto p-5">
      <Navbar />
      <main className="grid grid-cols-4 gap-4">
        {dataFoods.map((item, idx) => (
          <CardProduct key={idx} item={item} />
        ))}
      </main>
    </div>
  );
}
