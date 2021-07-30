import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Section from '../../Components/Section';
import Message from '../../Components/Message';
import Poster from '../../Components/Poster';
import { Helmet } from 'react-helmet';

const Container = styled.div`
    padding: 20px;
`;

const TVPresenter = ({ topRated, popular, airingToday, loading, error }) => (
    <>
        <Helmet>
            <title>TV | Nomflix</title>
        </Helmet>
        {loading ? null : (
            <Container>
                {topRated && topRated.length && (
                    <Section title="Top Rated Shows">
                        {topRated.map((show) => (
                            <Poster
                                key={show.id}
                                id={show.id}
                                title={show['original_name']}
                                rating={show['vote_average']}
                                imageUrl={show['poster_path']}
                                year={
                                    show['first_air_date'] && show['first_air_date'].substring(0, 4)
                                }
                            />
                        ))}
                    </Section>
                )}
                {popular && popular.length && (
                    <Section title="Popular Shows">
                        {popular.map((show) => (
                            <Poster
                                key={show.id}
                                id={show.id}
                                title={show['original_name']}
                                rating={show['vote_average']}
                                imageUrl={show['poster_path']}
                                year={
                                    show['first_air_date'] && show['first_air_date'].substring(0, 4)
                                }
                            />
                        ))}
                    </Section>
                )}
                {airingToday && airingToday.length && (
                    <Section title="Airing Today">
                        {airingToday.map((show) => (
                            <Poster
                                key={show.id}
                                id={show.id}
                                title={show['original_name']}
                                rating={show['vote_average']}
                                imageUrl={show['poster_path']}
                                year={
                                    show['first_air_date'] && show['first_air_date'].substring(0, 4)
                                }
                            />
                        ))}
                    </Section>
                )}
                {error && <Message color="#e74c3c" text={error} />}
            </Container>
        )}
    </>
);
TVPresenter.propTypes = {
    topRated: PropTypes.array,
    popular: PropTypes.array,
    airingToday: PropTypes.array,
    loading: PropTypes.bool.isRequired,
    error: PropTypes.string,
};

export default TVPresenter;
