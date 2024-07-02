import SearchBar from "@/components/SearchBar/SearchBar";
import { ReactNode } from "react";

const   NewsletterLayout = ({ children }: { children: ReactNode }) =>{
  return(
    <>
      <div className="py-4">
        <SearchBar />
        {children}
      </div>
    </>
  )
}

export default NewsletterLayout;