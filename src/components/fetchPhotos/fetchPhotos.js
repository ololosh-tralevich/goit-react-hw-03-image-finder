import axios from 'axios';

const params = {
  baseURL: 'https://pixabay.com/api/',
  apiKey: '25409970-76d3bd325deb034b2a97ea891',
};

export const fetchPhotos = (searchWord, page) => {
  const data = axios.get(
    `${params.baseURL}?q=${searchWord}&page=${page}&key=${params.apiKey}&image_type=photo&orientation=horizontal&per_page=12`
  );
  // console.log(data)
  return data;
};
