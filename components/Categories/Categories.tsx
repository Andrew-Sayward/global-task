import styles from './categories.module.scss';

type Props = {
  categories: string[];
  setIsCategory: Function;
};

const Categories = (props: Props) => {
  return (
    <div>
      <ul className={styles.categories} style={{ width: '360px' }}>
        <li
          onClick={() => {
            props.setIsCategory('');
          }}
        >
          <span>All Categories</span>
        </li>
        {props.categories.map((category, index) => {
          console.log(category); // Debugging line
          return (
            <li
              key={index}
              onClick={() => {
                props.setIsCategory(category);
              }}
            >
              <span>{category}</span>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Categories;
