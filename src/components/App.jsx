import { Component } from 'react';
import { TailSpin } from 'react-loader-spinner';

import Searchbar from './searchbar/Searchbar';
import { fetchPhotos } from './fetchPhotos/fetchPhotos';
import ImageGallery from './imageGallery/ImageGallery';
import ImageGalleryItem from './imageGalleryItem/ImageGalleryItem';
import Loader from './loader/Loader';
import Button from './loadMoreBtn/Button';

import searchIcon from './img/searchIcon.svg';

export class App extends Component {
  state = {
    searchIcon: searchIcon,
    searchWord: '',
    page: 1,
    photos: [],
  };

  typeSearchWord(ev) {
    // console.log(ev.target.value);
    this.setState({
      searchWord: ev.target.value,
    });
  }

  async fetchPhotos(ev) {
    ev.preventDefault();
    const { searchWord, page } = this.state;
    try {
      const data = await fetchPhotos(searchWord, page);
      console.log(data.data.hits);
      this.setState(prevState => {
        return { photos: [...prevState.photos, ...data.data.hits] };
      });
      // return;
    } catch (err) {
      console.log(err);
    }
  }

  render() {
    return (
      <>
        <Searchbar
          searchIcon={this.state.searchIcon}
          onSearchBtn={this.fetchPhotos.bind(this)}
          typeSearchWord={this.typeSearchWord.bind(this)}
        />
        {/* <ImageGallery /> */}
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
