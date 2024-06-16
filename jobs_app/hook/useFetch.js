import { useState, useEffect } from 'react';
import axios from 'axios';
// import { RAPID_API_KEY } from '@env';

// const rapidApiKey = RAPID_API_KEY

const useFetch = (endpoint, query) => {
    const [data, setData] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);

    const options = {
    method: 'GET',
    url: `https://jsearch.p.rapidapi.com/${endpoint}`,
    params: { ...query },
    headers: {
        'x-rapidapi-key': '3572d13ebcmshecf78a3e7ec0a5ap1850acjsna2d00f9e058a',
        'x-rapidapi-host': 'jsearch.p.rapidapi.com'
    }
    };

    const fetchData = async () => {
        setIsLoading(true);
        try {
            const response = await axios.request(options);
            setData(response.data.data);
            setIsLoading(false);
        } catch (error) {
            setError(error);
            alert(error)
        } finally {
            setIsLoading(false);
        }
    }

    useEffect(() => {
        fetchData();
    }, []);

    const refetch = () => {
        setIsLoading(true);
        fetchData();
    }

    return { data, isLoading, error, refetch };
}

export default useFetch;