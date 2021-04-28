
import React from 'react';

import ImageGallery from 'react-image-gallery';
import './Gallery.css';
import "../../../node_modules/react-image-gallery/styles/css/image-gallery.css";

class Gallery extends React.Component {

  render() {
    const images = [
      {
        original: 'https://picsum.photos/2000',
        thumbnail: 'https://picsum.photos/2000',
      },
      {
        original: 'https://picsum.photos/2000',
        thumbnail: 'https://picsum.photos/2000'
      },
      {
        original: 'https://picsum.photos/2000',
        thumbnail: 'https://picsum.photos/2000'
      },
      {
        original: 'https://picsum.photos/2000',
        thumbnail: 'https://picsum.photos/2000'
      },
      {
        original: 'https://picsum.photos/2000',
        thumbnail: 'https://picsum.photos/2000'
      },
      {
        original: 'https://picsum.photos/2000',
        thumbnail: 'https://picsum.photos/2000'
      },
      {
        original: 'https://picsum.photos/2000',
        thumbnail: 'https://picsum.photos/2000'
      },
      {
        original: 'https://picsum.photos/2000',
        thumbnail: 'https://picsum.photos/2000'
      },
      {
        original: 'https://picsum.photos/2000',
        thumbnail: 'https://picsum.photos/2000'
      },
      {
        original: 'https://picsum.photos/2000',
        thumbnail: 'https://picsum.photos/2000'
      },
      {
        original: 'https://picsum.photos/2000',
        thumbnail: 'https://picsum.photos/2000'
      },
      {
        original: 'https://picsum.photos/2000',
        thumbnail: 'https://picsum.photos/2000'
      },
      {
        original: 'https://picsum.photos/2000',
        thumbnail: 'https://picsum.photos/2000'
      },
      {
        original: 'https://picsum.photos/2000',
        thumbnail: 'https://picsum.photos/2000'
      },
      {
        original: 'https://picsum.photos/2000',
        thumbnail: 'https://picsum.photos/2000'
      },
      {
        original: 'https://picsum.photos/2000',
        thumbnail: 'https://picsum.photos/2000'
      },
      {
        original: 'https://picsum.photos/2000',
        thumbnail: 'https://picsum.photos/2000'
      },
      {
        original: 'https://picsum.photos/2000',
        thumbnail: 'https://picsum.photos/2000'
      },
      {
        original: 'https://picsum.photos/2000',
        thumbnail: 'https://picsum.photos/2000'
      },
      {
        original: 'https://picsum.photos/2000',
        thumbnail: 'https://picsum.photos/2000'
      },
      {
        original: 'https://picsum.photos/2000',
        thumbnail: 'https://picsum.photos/2000'
      },
      {
        original: 'https://picsum.photos/2000',
        thumbnail: 'https://picsum.photos/2000'
      },
      {
        original: 'https://picsum.photos/2000',
        thumbnail: 'https://picsum.photos/2000'
      },
      {
        original: 'https://picsum.photos/2000',
        thumbnail: 'https://picsum.photos/2000'
      },
      {
        original: 'https://picsum.photos/2000',
        thumbnail: 'https://picsum.photos/2000'
      },
      {
        original: 'https://picsum.photos/2000',
        thumbnail: 'https://picsum.photos/2000'
      },
      {
        original: 'https://picsum.photos/2000',
        thumbnail: 'https://picsum.photos/2000'
      },
      {
        original: 'https://picsum.photos/2000',
        thumbnail: 'https://picsum.photos/2000'
      },
      {
        original: 'https://picsum.photos/2000',
        thumbnail: 'https://picsum.photos/2000'
      },
      {
        original: 'https://picsum.photos/2000',
        thumbnail: 'https://picsum.photos/2000'
      },
      {
        original: 'https://picsum.photos/2000',
        thumbnail: 'https://picsum.photos/2000'
      },
      {
        original: 'https://picsum.photos/2000',
        thumbnail: 'https://picsum.photos/2000'
      },
      {
        original: 'https://picsum.photos/2000',
        thumbnail: 'https://picsum.photos/2000'
      },
      {
        original: 'https://picsum.photos/2000',
        thumbnail: 'https://picsum.photos/2000'
      },
      {
        original: 'https://picsum.photos/2000',
        thumbnail: 'https://picsum.photos/2000'
      },
      {
        original: 'https://picsum.photos/2000',
        thumbnail: 'https://picsum.photos/2000'
      },
      {
        original: 'https://picsum.photos/2000',
        thumbnail: 'https://picsum.photos/2000'
      },
      {
        original: 'https://picsum.photos/2000',
        thumbnail: 'https://picsum.photos/2000'
      },
      {
        original: 'https://picsum.photos/2000',
        thumbnail: 'https://picsum.photos/2000'
      },
      {
        original: 'https://picsum.photos/2000',
        thumbnail: 'https://picsum.photos/2000'
      },
      {
        original: 'https://picsum.photos/2000',
        thumbnail: 'https://picsum.photos/2000'
      },
      {
        original: 'https://picsum.photos/2000',
        thumbnail: 'https://picsum.photos/2000'
      },
      {
        original: 'https://picsum.photos/2000',
        thumbnail: 'https://picsum.photos/2000'
      },
      {
        original: 'https://picsum.photos/2000',
        thumbnail: 'https://picsum.photos/2000'
      },
      {
        original: 'https://picsum.photos/2000',
        thumbnail: 'https://picsum.photos/2000'
      },
      {
        original: 'https://picsum.photos/2000',
        thumbnail: 'https://picsum.photos/2000'
      },
      {
        original: 'https://picsum.photos/2000',
        thumbnail: 'https://picsum.photos/2000'
      },
      {
        original: 'https://picsum.photos/2000',
        thumbnail: 'https://picsum.photos/2000'
      },
      {
        original: 'https://picsum.photos/2000',
        thumbnail: 'https://picsum.photos/2000'
      },
      {
        original: 'https://picsum.photos/2000',
        thumbnail: 'https://picsum.photos/2000'
      },
      {
        original: 'https://picsum.photos/2000',
        thumbnail: 'https://picsum.photos/2000'
      },
      {
        original: 'https://picsum.photos/2000',
        thumbnail: 'https://picsum.photos/2000'
      },
      {
        original: 'https://picsum.photos/2000',
        thumbnail: 'https://picsum.photos/2000'
      },
      {
        original: 'https://picsum.photos/2000',
        thumbnail: 'https://picsum.photos/2000'
      },
      {
        original: 'https://picsum.photos/2000',
        thumbnail: 'https://picsum.photos/2000'
      },
      {
        original: 'https://picsum.photos/2000',
        thumbnail: 'https://picsum.photos/2000'
      }
    ]

    return (
      <ImageGallery items={images} />
    );
  }

}

export default Gallery