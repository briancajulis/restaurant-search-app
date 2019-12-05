import React, { useState } from 'react';
import {View, Text, StyleSheet} from 'react-native';
import SearchBar from '../Components/SearchBar';
import yelp from '../api/yelp';

const SearchScreen = () => {
    const [term, setTerm] = useState('');
    const [results, setResults] = useState([]); // expected to be an array of objects
    // Two options to call an api: fetch or axios

    const searchApi = async () => {
        const response = await yelp.get('/search', {
            params: { // automatically added into the URL
                limit: 50,
                location: 'San Jose',
                term
            }
        });
        setResults(response.data.businesses);
    }

    return (
        <View>
            <SearchBar
                term={term}
                onTermChange={setTerm}
                onTermSubmit={searchApi}
            />
            <Text>Search Screen</Text>
            <Text>We have found {results.length} results.</Text>
        </View>
    );
}

const style = StyleSheet.create({

});

export default SearchScreen;