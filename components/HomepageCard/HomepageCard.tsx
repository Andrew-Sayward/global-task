import HomepageCardTypes from '@/models/HomepageCard';
import Link from 'next/link';
import styles from './homepage-card.module.scss';

const HomepageCard = ({
  title,
  subtitle,
  description,
  link,
}: HomepageCardTypes) => {
  return (
    <div className={styles.homepageCard}>
      <h3>{title}</h3>
      <p>{subtitle}</p>
      <p>
        {description}
      </p>
      <Link href={link}>Shop Now</Link>
    </div>
  );
};

export default HomepageCard;
