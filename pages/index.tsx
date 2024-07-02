import Image from 'next/image';
import { Inter } from 'next/font/google';
import GeneralLayout from '@/layouts/general-layout';
import Link from 'next/link';
import HomepageCard from '@/components/HomepageCard/HomepageCard';
import HomepageData from '@/Data/HomepageData';

const inter = Inter({ subsets: ['latin'] });

export default function Home() {
  return (
    //Here we define the layout and contain the Homepage within it, in later version of Next we will be able to simly use a Layout file    
    <GeneralLayout>
      <div className="home-body container">
        <h1 className="mt-12">Welcome to Global Store</h1>
        <h2>Discover the Future of Shopping</h2>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
          {HomepageData.map((data) => {
            return (
              <HomepageCard
                key={data.title}
                title={data.title}
                subtitle={data.subtitle}
                description={data.description}
                link={data.link}
              />
            );
          })}
        </div>
        <h3 className="mt-12">Why Choose Us?</h3>
        <ul className="list-disc">
          <li>
            Premium Quality: We offer only the finest products, ensuring
            top-notch quality and durability.
          </li>
          <li>
            Affordable Prices: Enjoy luxury and style without breaking the bank.
          </li>
          <li>
            Customer Satisfaction: Our priority is your happiness. We offer
            hassle-free returns and excellent customer service.
          </li>
          <li>
            Join our community and experience shopping like never before. Global
            Store – where technology, elegance, and fashion meet.
          </li>
        </ul>
        <p>
          Affordable Prices: Enjoy luxury and style without breaking the bank.
        </p>
        <Link href={'/products'}>Start Shopping Today</Link>
      </div>
    </GeneralLayout>
  );
}
