import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
// Styles
import { Wrapper, Content, Text } from './HeroImage.styles';

const HeroImage = ({ movieId, image, title, text }) => (
  <Link to={`/movie/${movieId}`}>
    <Wrapper image={image}>
      <Content>
        <Text>
          <h1>{title}</h1>
          <p>{text}</p>
        </Text>
      </Content>
    </Wrapper>
  </Link>
);

HeroImage.propTypes = {
  movieId: PropTypes.number,
  image: PropTypes.string,
  title: PropTypes.string,
  text: PropTypes.string,
};

export default HeroImage;
