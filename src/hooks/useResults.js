import { useState, useEffect } from 'react';
import yelp from '../api/yelp';

export default ({term}) => {
    const [results, setResults] = useState([]); // expected to be an array of objects
    const [errorMessage, setErrorMessage] = useState('');

    // Two options to call an api: fetch or axios
    const searchApi = async (searchTerm) => {
        try {
            const response = await yelp.get('/search', {
                params: { // automatically added into the URL
                    limit: 50,
                    location: 'San Jose',
                    term: searchTerm
                }
            });
            setResults(response.data.businesses);
        } catch (err) {
            console.log(err);
            setErrorMessage('Something went wrong!')
        }
    }

    // Calls the api on screen load
    useEffect(() => {
        searchApi(term);
    }, [])

    return [searchApi, results, errorMessage];
};