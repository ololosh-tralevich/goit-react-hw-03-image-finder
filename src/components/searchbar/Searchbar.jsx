import fetchImg from '../fetchPhotos/fetchPhotos'

import styles from './searchbar.module.css';

const Searchbar = ({ searchIcon, typeSearchWord, onSearchBtn }) => {
  return (
    <header>
      <form className={styles.searchForm}>
        <input
          type="text"
          autoComplete="off"
          autoFocus
          placeholder="Search images..."
          onChange={typeSearchWord}
        />
        <button className={styles.submitButton} type="submit">
          <img
            className={styles.searchIcon}
            src={searchIcon}
            width="15px"
            alt="Search Icon"
            onClick={onSearchBtn}
          />
        </button>
      </form>
    </header>
  );
};

export default Searchbar;
