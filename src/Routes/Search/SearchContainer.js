import React from 'react';
import SearchPresenter from './SearchPresenter';
import { movieApi, tvApi } from '../../api';

export default class SearchContainer extends React.Component {
    state = {
        movieResults: null,
        tvResults: null,
        searchTerm: '',
        error: null,
        loading: true,
    };

    componentDidMount() {
        this.setState({
            loading: false,
        });
    }

    handleSubmit = (e) => {
        e.preventDefault();
        const { searchTerm } = this.state;
        if (searchTerm !== '') {
            this.searchByTerm();
        }
    };

    updateTerm = (e) => {
        const {
            target: { value },
        } = e;
        this.setState({
            searchTerm: value,
        });
    };

    searchByTerm = async () => {
        this.setState({
            loading: true,
        });
        const { searchTerm } = this.state;
        try {
            const {
                data: { results: movieResults },
            } = await movieApi.search(searchTerm);
            const {
                data: { results: tvResults },
            } = await tvApi.search(searchTerm);

            this.setState({
                loading: true,
                movieResults,
                tvResults,
            });
        } catch (e) {
            console.log('error');
            this.setState({
                error: "Can't find result",
            });
        } finally {
            this.setState({
                loading: false,
            });
        }
    };

    render() {
        const { movieResults, tvResults, searchTerm, loading, error } = this.state;
        return (
            <SearchPresenter
                movieResults={movieResults}
                tvResults={tvResults}
                searchTerm={searchTerm}
                loading={loading}
                error={error}
                handleSubmit={this.handleSubmit}
                updateTerm={this.updateTerm}
            />
        );
    }
}
