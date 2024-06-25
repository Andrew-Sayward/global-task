import Image from "next/image";
import { Inter } from "next/font/google";
import GeneralLayout from "@/layouts/general-layout";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <GeneralLayout>
      <h1>Home</h1>
    </GeneralLayout>
  );
}

