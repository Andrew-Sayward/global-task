import SearchBar from "@/components/SearchBar";
import { ReactNode } from "react";

const GeneralLayout= ({ children }: { children: ReactNode }) =>{
  return(
    <>
      <SearchBar />
      {children}
    </>
  )
}

export default GeneralLayout;