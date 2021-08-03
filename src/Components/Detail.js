import React from 'react';
import PropTypes from 'prop-types';
import Loader from './Loader';
import { Helmet } from 'react-helmet';
import styled from 'styled-components';
import DetailTab from './DetailTab';
import Message from './Message';

const Container = styled.div`
  height: calc(100vh - 50px);
  width: 100%;
  position: relative;
  padding: 50px;
`;

const Backdrop = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-image: url(${(props) => props.bgImage});
  background-size: cover;
  background-position: center center;
  filter: blur(3px);
  opacity: 0.5;
  z-index: 0;
`;

const Content = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  position: relative;
  z-index: 1;
`;

const Cover = styled.div`
  width: 30%;
  background-image: url(${(props) => props.bgImage});
  background-size: cover;
  background-position: center center;
  filter: blur(0);
  height: 100%;
  border-radius: 5px;
`;

const Data = styled.div`
  width: 70%;
  margin-left: 40px;
`;

const Title = styled.h3`
  font-size: 70px;
`;

const ImdbLink = styled.a`
  display: inline-flex;
  justify-content: center;
  align-items: center;
  border-bottom: 1px solid transparent;
  &:hover {
    border-bottom-color: white;
  }
  &::after {
    font-size: 38px;
    padding-left: 5px;
    content: '🔗';
  }
`;

const ItemContainer = styled.div`
  margin: 20px 0;
`;

const Item = styled.span``;

const Divider = styled.span`
  margin: 0 10px;
`;

const Overview = styled.p`
  font-size: 20px;
  opacity: 0.7;
  line-height: 1.5;
  width: 90%;
`;

const imagePath = 'https://image.tmdb.org/t/p/original';

const Detail = ({ loading, result, error, isMovie }) =>
  loading ? (
    <>
      <Helmet>
        <title>Loading | Nomflix</title>
      </Helmet>
      <Loader />
    </>
  ) : (
    <>
      <Helmet>
        <title>{result?.original_title || result?.original_name || ''} | Netflix</title>
      </Helmet>
      {result && (
        <Container>
          <Backdrop
            bgImage={
              result && result['backdrop_path']
                ? `${imagePath}${result['backdrop_path']}`
                : require('../assets/images/noPosterSmall.png').default
            }
          />
          <Content>
            <Cover
              bgImage={
                result && result['backdrop_path']
                  ? `${imagePath}${result['poster_path']}`
                  : require('../assets/images/noPosterSmall.png').default
              }
            />
            <Data>
              <Title>
                <ImdbLink
                  href={`https://www.imdb.com/title/${result.imdb_id}`}
                  rel="noreferrer"
                  title="Go to IMDB"
                  target="_blank">
                  {result.original_title ? result.original_title : result.original_name}
                </ImdbLink>
              </Title>
              <ItemContainer>
                <Item>
                  {result.release_date
                    ? result.release_date.substring(0, 4)
                    : result.first_air_date.substring(0, 4)}
                </Item>
                <Divider>•</Divider>
                <Item>{result.runtime ? result.runtime : result.episode_run_time[0]} min</Item>
                <Divider>•</Divider>
                <Item>
                  {result.genres &&
                    result.genres.map((genre, index) =>
                      index === result.genres.length - 1 ? genre.name : `${genre.name} / `,
                    )}
                </Item>
              </ItemContainer>
              <Overview>{result.overview}</Overview>
              <DetailTab result={result} isMovie={isMovie} />
            </Data>
          </Content>
        </Container>
      )}
      {error && <Message color="#95a5a6" text={error} />}
    </>
  );

Detail.propTypes = {
  result: PropTypes.object,
  loading: PropTypes.bool.isRequired,
  error: PropTypes.string,
};

export default Detail;
