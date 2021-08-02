import React, { useCallback, useEffect, useState } from 'react';
import DetailComponent from '../Components/Detail';
import { movieApi, tvApi } from '../api';

const useDetail = (pathname, id) => {
    const [result, setResult] = useState(null);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(true);
    const [isMovie] = useState(pathname.includes('/movie/'));

    const getData = useCallback(async () => {
        let newValue = null;
        try {
            if (isMovie) {
                ({ data: newValue } = await movieApi.movieDetail(id));
            } else {
                ({ data: newValue } = await tvApi.showDetail(id));
            }
            setResult(newValue);
        } catch (e) {
            setError("Can't find anything.");
        }
        setLoading(false);
        return newValue;
    }, [id, isMovie]);

    useEffect(() => {
        getData();
    }, [getData]);

    return { result, error, loading, isMovie };
};

const Detail = ({
    match: {
        params: { id },
    },
    location: { pathname },
    history: { push },
}) => {
    const parsedId = parseInt(id);
    if (isNaN(parsedId)) {
        push('/');
    }
    const state = useDetail(pathname, parsedId);

    return <DetailComponent {...state} />;
};

export default Detail;
