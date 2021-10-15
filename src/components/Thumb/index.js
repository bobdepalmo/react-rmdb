import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

// Styles
import { Image } from './Thumb.styles';

const Thumb = ({ image, movieId, clickable }) => (
  <div>
    {clickable ? (
      <Link to={`/movie/${movieId}`}>
        <Image src={image} clickable={clickable} alt='movie-thumb' />
      </Link>
    ) : (
      <Image src={image} clickable={clickable} alt='movie-thumb' />
    )}
  </div>
);

Image.propTypes = {
  image: PropTypes.string,
  movieId: PropTypes.number,
  clickable: PropTypes.bool,
};

export default Thumb;
