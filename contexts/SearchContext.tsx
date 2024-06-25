import { createContext, useState, Dispatch, SetStateAction, ReactNode } from 'react';

export const SearchContext = createContext<{ searchValue: string; setSearchValue: Dispatch<SetStateAction<string>> }>({ searchValue: '', setSearchValue: () => {} });

export const SearchProvider = ({ children }: { children: ReactNode }) => {
  const [searchValue, setSearchValue] = useState('');

  return (
    <SearchContext.Provider value={{ searchValue, setSearchValue }}>
      {children}
    </SearchContext.Provider>
  );
};