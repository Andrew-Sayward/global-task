import styles from './footer.module.scss';

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className="container">
        <div className={styles.content}>
          <p>© 2022 Your Website. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
