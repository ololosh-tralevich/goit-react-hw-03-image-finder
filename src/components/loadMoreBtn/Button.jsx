import styles from './button.module.css';

const Button = ({ loadMore }) => {
  return (
    <footer>
      <button className={styles.button} onClick={loadMore}>
        Load More
      </button>
    </footer>
  );
};

export default Button;
