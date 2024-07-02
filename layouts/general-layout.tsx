import SearchBar from "@/components/SearchBar/SearchBar";
import NavBar from "@/components/NavBar/NavBar";
import { ReactNode } from "react";
import Footer from "@/components/Footer.tsx/Footer";

const GeneralLayout= ({ children }: { children: ReactNode }) =>{
  return(
    <>
      <NavBar />
      <SearchBar />
      {children}
      <Footer />
    </>
  )
}

export default GeneralLayout;