import React from 'react';
import PropTypes from 'prop-types';
export default function ImageGalleryItem({ pictures, onClick }) {
  const elements = pictures.map(({ id, webformatURL, tag, largeImageURL }) => (
    <li key={id}>
      <img
        src={webformatURL}
        alt={tag}
        onClick={() => onClick(largeImageURL)}
      />
    </li>
  ));
  return <ul> {elements}</ul>;
}

ImageGalleryItem.propTypes = {
  onClick: PropTypes.func.isRequired,
  pictures: PropTypes.exact({
    id: PropTypes.string.isRequired,
    webformatURL: PropTypes.string.isRequired,
    tag: PropTypes.string,
    largeImageURL: PropTypes.string.isRequired,
  }),
};
