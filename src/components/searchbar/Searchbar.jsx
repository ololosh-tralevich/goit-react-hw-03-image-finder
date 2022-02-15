import styles from './searchbar.module.css';

const Searchbar = ({ searchIcon }) => {
  return (
    <header>
      <form className={styles.searchForm}>
        <input
          type="text"
          autocomplete="off"
          autofocus
          placeholder="Search images..."
        />
        <button className={styles.submitButton} type="submit">
          <img
            className={styles.searchIcon}
            src={searchIcon}
            width="15px"
            alt="Search Icon"
          />
        </button>
      </form>
    </header>
  );
};

export default Searchbar;
