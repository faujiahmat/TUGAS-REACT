import { useEffect, useState } from 'react';
import { searchDataCall } from '../../../service/foods.service';

const SearchBar = ({ setDataFoods, setIsLoading }) => {
  const [searchValue, setSearchValue] = useState('');
  const searchData = async (query) => {
    setIsLoading(true);
    const data = await searchDataCall(query);
    if (data) {
      setIsLoading(false);
      setDataFoods(data.data.results);
    }
  };
  const onChangeSearch = (e) => {
    setSearchValue(e.target.value);
  };

  useEffect(() => {
    const delayBounce = setTimeout(() => {
      searchData(searchValue);
    }, 2000);
    return () => clearTimeout(delayBounce);
  }, [searchValue]);

  return (
    <input
      type="search"
      className="w-60 h-8 rounded-lg bg-[#fbcaca]"
      value={searchValue}
      onChange={onChangeSearch}
    />
  );
};

export default SearchBar;
