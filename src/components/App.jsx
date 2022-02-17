import { Component } from 'react';

import Searchbar from './searchbar/Searchbar';
import { fetchPhotos } from './fetchPhotos/fetchPhotos';
import ImageGallery from './imageGallery/ImageGallery';
import Loader from './loader/Loader';
import Button from './loadMoreBtn/Button';

import searchIcon from './img/searchIcon.svg';

export class App extends Component {
  state = {
    searchIcon: searchIcon,
    searchWord: '',
    page: 1,
    photos: [],
    totalData: 0,
    loading: false,
    modalOpen: false,
    modalContent: '',
  };

  typeSearchWord = ev => {
    this.setState({
      searchWord: ev.target.value,
    });
  };

  async fetchPhotos() {
    // console.log('fetch page', this.state.page);
    const { searchWord, page } = this.state;
    try {
      const data = await fetchPhotos(searchWord, page);
      if (page === 1) {
        this.setState({
          photos: data.data.hits,
          totalData: data.data.totalHits,
          loading: false,
        });
        return;
      }
      this.setState(prevState => {
        return { photos: [...prevState.photos, ...data.data.hits], loading: false };
      });
    } catch (err) {
      console.log(err);
      this.setState({loading: false})
    }
  }

  searchPhotos = ev => {
    ev.preventDefault();
    this.setState({ page: 1, loading: true});
    this.fetchPhotos();
  };

  loadMore = ev => {
    this.setState({
      page: this.state.page + 1,
    });
  };

  componentDidUpdate(prevProps, prevState) {
    const { page } = this.state;
    if (page !== prevState.page) {
      this.setState({
          loading: true
      });
      this.fetchPhotos();
    }
  }

  render() {
    console.log(this.state.loading)
    return (
      <>
        <Searchbar
          searchIcon={this.state.searchIcon}
          searchPhotos={this.searchPhotos}
          typeSearchWord={this.typeSearchWord}
        />
        <ImageGallery photoArr={this.state.photos} />
        {this.state.loading && <Loader />}
        {/* <Loader></Loader> */}

        {this.state.totalData > 12 ? (
          <Button loadMore={this.loadMore} />
        ) : <></>}
      </>
    );
  }
}


