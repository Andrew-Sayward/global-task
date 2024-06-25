import SearchBar from "@/components/SearchBar/SearchBar";
import { ReactNode } from "react";

const   NewsletterLayout = ({ children }: { children: ReactNode }) =>{
  return(
    <>
      <SearchBar />
      {children}
    </>
  )
}

export default NewsletterLayout;