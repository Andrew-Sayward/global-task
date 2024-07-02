import FooterNewsletter from "@/components/Footer.tsx/FooterNewsletter";
import SearchBar from "@/components/SearchBar/SearchBar";
import { ReactNode } from "react";

const   NewsletterLayout = ({ children }: { children: ReactNode }) =>{
  return(
    <>
      <div className="py-4">
        <SearchBar />
        {children}
        <FooterNewsletter />
      </div>
    </>
  )
}

export default NewsletterLayout;