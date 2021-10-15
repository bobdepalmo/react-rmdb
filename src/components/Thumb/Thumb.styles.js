import styled from 'styled-components';

export const Image = styled.img`
  width: 100%;
  height: 100%;
  max-width: 720px;
  transition: all 0.3s;
  object-fit: cover;
  animation: animateMovieThumb 0.5s;
  transition: transform 0.3s;
  cursor: pointer;
  ${(props) =>
    props.clickable
      ? `
      &:hover {transform: scale(1.02);} 
      &:active {transform: scale(1);} 
      border-radius: 20px;`
      : `
      border-radius: 20px 0px 0px 20px;
      @media screen and (max-width: 768px) {
        border-radius: 20px 20px 0px 0px;
      }
      `};

  @keyframes animateMovieThumb {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
`;
