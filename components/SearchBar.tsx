// components/SearchBar.js
import { SetStateAction, useContext } from 'react';
import { SearchContext } from '../contexts/SearchContext';

const SearchBar = () => {
  const { searchValue, setSearchValue } = useContext(SearchContext);

  const handleChange = (e: { target: { value: SetStateAction<string>; }; }) => {
    setSearchValue(e.target.value);
  };

  return (
    <input
      type="text"
      value={searchValue}
      onChange={handleChange}
      placeholder="Search..."
    />
  );
};

export default SearchBar;
