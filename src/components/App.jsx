import { Component } from 'react';

import Searchbar from './searchbar/Searchbar';
import { fetchPhotos } from './fetchPhotos/fetchPhotos';
import ImageGallery from './imageGallery/ImageGallery';
import Loader from './loader/Loader';
import Button from './loadMoreBtn/Button';
import Modal from './photoModal/Modal';

import searchIcon from './img/searchIcon.svg';

import styles from './photoModal/modal.module.css';

export class App extends Component {
  state = {
    searchIcon: searchIcon,
    searchWord: '',
    page: 1,
    photos: [],
    totalData: 0,
    loading: false,
    errMessage: null,
    modalOpen: false,
    modalContent: '',
  };

  typeSearchWord = ev => {
    this.setState({
      searchWord: ev.target.value,
    });
  };

  async fetchPhotos() {
    const { searchWord, page } = this.state;
    try {
      const data = await fetchPhotos(searchWord, page);
      this.setState(prevState => {
        return {
          photos: [...prevState.photos, ...data.hits],
          totalData: data.totalHits,
          loading: false,
        };
      });
    } catch (err) {
      console.log(err);
      this.setState({ loading: false, errMessage: err });
    }
  }

  searchPhotos = ev => {
    ev.preventDefault();
    this.setState({ page: 1, loading: true });
    this.fetchPhotos();
  };

  loadMore = ev => {
    this.setState(prevState => {
      return { page: prevState.page + 1 };
    });
  };

  componentDidUpdate(prevProps, prevState) {
    const { page } = this.state;
    if (page !== prevState.page) {
      this.setState({
        loading: true,
      });
      this.fetchPhotos();
    }
  }

  openModal = photo => {
    this.setState({ modalOpen: true, modalContent: photo.largeImageURL });
  };

  closeModal = () => {
    this.setState({ modalOpen: false, modalContent: '' });
  };

  render() {
    return (
      <>
        <Searchbar
          searchIcon={this.state.searchIcon}
          searchPhotos={this.searchPhotos}
          typeSearchWord={this.typeSearchWord}
        />
        <ImageGallery photoArr={this.state.photos} openModal={this.openModal} />
        {this.state.loading && <Loader />}
        {this.state.modalOpen && (
          <Modal
            modalContent={this.state.modalContent}
            closeModal={this.closeModal}
          >
            <img
              className={styles.modalImg}
              src={this.state.modalContent}
              alt="Big"
              loading="lazy"
            />
          </Modal>
        )}

        {this.state.totalData > 12 ? (
          <Button loadMore={this.loadMore} />
        ) : (
          <></>
        )}
      </>
    );
  }
}
