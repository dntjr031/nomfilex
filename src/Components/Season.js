import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { getImage } from '../api';

const Container = styled.div`
  font-size: 12px;
  width: 15%;
`;

const Image = styled.div`
  height: 240px;
  background-size: contain;
  border-radius: 4px;
  background-position: center center;
  background-repeat: no-repeat;
  background-image: url(${(props) => props.bgUrl});
  transition: opacity 0.2s linear;
`;

const ImageContainer = styled.div`
  margin-bottom: 5px;
  position: relative;
  &:hover {
    ${Image} {
      opacity: 0.85;
    }
  }
`;

const Title = styled.span`
  display: inline-flex;
  margin-bottom: 3px;
  width: 50%;
`;

const Year = styled.span`
  width: 50%;
  display: inline-flex;
  justify-content: flex-end;
  font-size: 10px;
  color: rgba(255, 255, 255, 0.5);
`;

const Poster = ({ imageUrl, title, year }) => (
  <Container>
    <ImageContainer>
      <Image
        bgUrl={
          imageUrl ? getImage(imageUrl) : require('../assets/images/noPosterSmall.png').default
        }
      />
    </ImageContainer>
    <Title>{title.length > 14 ? `${title.substring(0, 13)}...` : title}</Title>
    <Year>{year}</Year>
  </Container>
);

Poster.propTypes = {
  id: PropTypes.number.isRequired,
  imageUrl: PropTypes.string,
  title: PropTypes.string.isRequired,
  rating: PropTypes.number,
  year: PropTypes.string,
  isMovie: PropTypes.bool,
};

export default Poster;
