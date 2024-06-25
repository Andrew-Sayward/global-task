import SearchBar from "@/components/SearchBar/SearchBar";
import NavBar from "@/components/NavBar/NavBar";
import { ReactNode } from "react";

const GeneralLayout= ({ children }: { children: ReactNode }) =>{
  return(
    <>
      <NavBar />
      <SearchBar />
      {children}
    </>
  )
}

export default GeneralLayout;