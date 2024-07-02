// components/SearchBar.js
import { SetStateAction, useContext } from 'react';
import { SearchContext } from '../../contexts/SearchContext';

const SearchBar = () => {
  //Here we use the SearchContext to provide and manipulate the state of the search value
  const { searchValue, setSearchValue } = useContext(SearchContext);

  const handleChange = (e: { target: { value: SetStateAction<string> } }) => {
    setSearchValue(e.target.value);
  };

  return (
    <div className="container">
      <form action="" className="flex gap-3">
        <input
          className="text-black p-2"
          type="text"
          value={searchValue}
          onChange={handleChange}
          placeholder="Search..."
        />
        <button type="submit">Search</button>
      </form>
    </div>
  );
};

export default SearchBar;
