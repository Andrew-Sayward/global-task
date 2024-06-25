// components/SearchBar.js
import { SetStateAction, useContext } from 'react';
import { SearchContext } from '../../contexts/SearchContext';

const SearchBar = () => {
  const { searchValue, setSearchValue } = useContext(SearchContext);

  const handleChange = (e: { target: { value: SetStateAction<string>; }; }) => {
    setSearchValue(e.target.value);
  };

  return (
    <input
      className='text-black m-2'
      type="text"
      value={searchValue}
      onChange={handleChange}
      placeholder="Search..."
    />
  );
};

export default SearchBar;
