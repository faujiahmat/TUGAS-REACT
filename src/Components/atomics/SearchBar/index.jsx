import { useState } from 'react';
import { searchDataCall } from '../../../service/foods.service';

const SearchBar = ({ setDataFoods, setIsLoading }) => {
  const [searchValue, setSearchValue] = useState('');
  const searchData = async (query) => {
    setIsLoading(true);
    const data = await searchDataCall(query);
    if (data.data.results) {
      setIsLoading(false);
      setDataFoods(data.data.results);
    }
  };

  const onChangeSearch = (e) => {
    setSearchValue(e.target.value);
    searchData(e.target.value);
    console.log(e.target.value);
  };

  return (
    <input
      value={searchValue}
      onChange={onChangeSearch}
      type="search"
      className="w-60 h-8 rounded-lg bg-[#fbcaca] "
    />
  );
};

export default SearchBar;
