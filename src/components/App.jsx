import { Component } from 'react';
import { TailSpin } from 'react-loader-spinner';

import Searchbar from './searchbar/Searchbar';
import { fetchPhotos } from './fetchPhotos/fetchPhotos';
import ImageGallery from './imageGallery/ImageGallery';
// import ImageGalleryItem from './imageGalleryItem/ImageGalleryItem';
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
        });
        return;
      }
      this.setState(prevState => {
        return { photos: [...prevState.photos, ...data.data.hits] };
      });
    } catch (err) {
      console.log(err);
    }
  }

  searchPhotos = ev => {
    ev.preventDefault();
    this.setState({ page: 1 });
    this.fetchPhotos();
  };

  loadMore = ev => {
    this.setState({
      page: this.state.page + 1,
    });
  };

  componentDidUpdate(prevProps, prevState) {
    const { searchWord, page } = this.state;
    if (page !== prevState.page) {
      // this.setState({
      //     loading: true
      // });
      this.fetchPhotos();
    }
  }

  render() {
    return (
      <>
        <Searchbar
          searchIcon={this.state.searchIcon}
          searchPhotos={this.searchPhotos}
          typeSearchWord={this.typeSearchWord}
        />
        <ImageGallery photoArr={this.state.photos} />
        {/* <ImageGalleryItem photoArr={this.state.photos} /> */}

        {this.state.totalData > 12 ? (
          <Button loadMore={this.loadMore} />
        ) : <></>}
      </>
    );
  }
}

// <TailSpin
//     heigth="100"
//     width="100"
//     color='grey'
//     ariaLabel='loading'
//   />
