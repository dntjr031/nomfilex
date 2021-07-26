import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const imagePath = 'https://image.tmdb.org/t/p/w300';

const Container = styled.div`
    font-size: 12px;
`;

const Image = styled.div`
    height: 180px;
    background-size: cover;
    border-radius: 4px;
    background-position: center center;
    background-image: url(${(props) => props.bgUrl});
    transition: opacity 0.2s linear;
`;

const Rating = styled.span`
    position: absolute;
    bottom: 5px;
    right: 5px;
    opacity: 0;
    transition: opacity 0.3s ease;
`;

const ImageContainer = styled.div`
    margin-bottom: 5px;
    position: relative;
    &:hover {
        ${Image} {
            opacity: 0.3;
        }
        ${Rating} {
            opacity: 1;
        }
    }
`;

const Title = styled.span`
    display: block;
    margin-bottom: 3px;
`;

const Year = styled.span`
    font-size: 10px;
    color: rgba(255, 255, 255, 0.5);
`;

const Poster = ({ id, imageUrl, title, rating, year, isMovie = false }) => (
    <Link to={isMovie ? `/movie/${id}` : `/show/${id}`}>
        <Container>
            <ImageContainer>
                <Image
                    bgUrl={
                        imageUrl
                            ? imagePath + imageUrl
                            : require('../assets/images/noPosterSmall.png').default
                    }
                />
                <Rating>
                    <span role="img" aria-label="rating">
                        ⭐️
                    </span>{' '}
                    {rating}/10
                </Rating>
            </ImageContainer>
            <Title>{title.length > 14 ? `${title.substring(0, 13)}...` : title}</Title>
            <Year>{year}</Year>
        </Container>
    </Link>
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
