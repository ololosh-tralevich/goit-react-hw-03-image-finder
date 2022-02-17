
import styles from './button.module.css';

const Button = ({loadMore}) => {
  return (
    <button className={styles.button} onClick={loadMore}>
      Load More
    </button>
  );
};

export default Button;
