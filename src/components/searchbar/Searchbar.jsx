import PropTypes from 'prop-types';

import styles from './searchbar.module.css';

const Searchbar = ({ searchIcon, typeSearchWord, searchPhotos }) => {
  return (
    <header>
      <form className={styles.searchForm} onSubmit={searchPhotos}>
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
          />
        </button>
      </form>
    </header>
  );
};

export default Searchbar;

Searchbar.propTypes = {
  searchIcon: PropTypes.string,
  typeSearchWord: PropTypes.func.isRequired,
  searchPhotos: PropTypes.func.isRequired,
}