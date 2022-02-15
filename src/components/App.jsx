import { Component } from 'react';
import { TailSpin } from  'react-loader-spinner'

import Searchbar from './searchbar/Searchbar';
import ImageGallery from './imageGallery/ImageGallery';
import ImageGalleryItem from './imageGalleryItem/ImageGalleryItem'
import Loader from './loader/Loader'
import Button from './loadMoreBtn/Button'

import searchIcon from './img/searchIcon.svg';

export class App extends Component {
  state = {
    searchIcon: searchIcon,
  };

  render() {
    return (
      <>
        <Searchbar searchIcon={this.state.searchIcon} />
        <ImageGallery />
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