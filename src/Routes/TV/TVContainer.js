import React from 'react';
import TVPresenter from './TVPresenter';
import { tvApi } from '../../api';

export default class TVContainer extends React.Component {
    state = {
        topRated: null,
        popular: null,
        airingToday: null,
        error: null,
        loading: true,
    };

    async componentDidMount() {
        try {
            const {
                data: { results: topRated },
            } = await tvApi.topRated();
            const {
                data: { results: popular },
            } = await tvApi.popular();
            const {
                data: { results: airingToday },
            } = await tvApi.airingToday();

            this.setState({
                topRated,
                popular,
                airingToday,
            });
        } catch (e) {
            this.setState({
                error: "Can't find TV information.",
            });
        } finally {
            this.setState({
                loading: false,
            });
        }
    }

    render() {
        const { popular, airingToday, topRated, loading, error } = this.state;
        return (
            <TVPresenter
                topRated={topRated}
                popular={popular}
                airingToday={airingToday}
                loading={loading}
                error={error}
            />
        );
    }
}
