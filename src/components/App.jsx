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

  typeSearchWord = (ev) => {
    this.setState({
      searchWord: ev.target.value,
    });
  }

  // async fetchPhotos(ev) {
  //   ev.preventDefault();    
  //   const { searchWord, page } = this.state;
  //   try {
  //     const data = await fetchPhotos(searchWord, page);
  //     console.log(data);
  //     this.setState(prevState => {
  //       return { photos: [...prevState.photos, ...data.data.hits] };
  //     });
  //     return;
  //   } catch (err) {
  //     console.log(err);
  //   }
  // }

   async onSearchBtn(ev) {
    // ev.preventDefault();    
    const { searchWord, page } = this.state;
    try {
      const data = await fetchPhotos(searchWord, page);
      console.log(data);  
      // return data;
    } catch (err) {
      console.log(err);
    }
    // return this.data;
  }

    searchPhotos = (ev) => {
    ev.preventDefault();    
    // this.onSearchBtn()
      this.onSearchBtn()
      console.log(this.data)
      // console.log(data)

      //   this.setState({
      //    photos: [data.data.hits] 
      // });
    }




  render() {
    return (
      <>
        <Searchbar
          searchIcon={this.state.searchIcon}
          onSearchBtn={this.searchPhotos.bind(this)}
          typeSearchWord={this.typeSearchWord}
        />
        {/* <ImageGallery/> */}
        <ImageGalleryItem photoArr={this.state.photos} />
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
