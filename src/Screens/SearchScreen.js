import React, { useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import SearchBar from '../Components/SearchBar';
import ResultsList from '../Components/ResultsList';
import useResults from '../hooks/useResults';

const SearchScreen = () => {
    const [term, setTerm] = useState('');
    const [searchApi, results, errorMessage] = useResults(term);

    const filterResultsByPrice = (price) => {
        // price === '$' || '$$' || '$$$'
        return results.filter(result => {
            return result.price === price
        })
    }

    return (
        <View>
            <SearchBar
                term={term}
                onTermChange={setTerm}
                onTermSubmit={() => searchApi(term)}
            />
            <Text>Search Screen</Text>
            <Text>We have found {results.length} results.</Text>
            <ResultsList 
                title='Cost Effective'
                results={filterResultsByPrice('$')}
            />
            <ResultsList
                title='Bit Pricier'
                results={filterResultsByPrice('$$')}
            />
            <ResultsList
                title='Big Spender'
                results={filterResultsByPrice('$$$')}
            />
            <ResultsList
                title='Big Spender'
                results={filterResultsByPrice('$$$$')}
            />
            {errorMessage ? <Text style={styles.error}>{errorMessage}</Text> : null}
        </View>
    );
}

const styles = StyleSheet.create({
    error: {
        color: 'red',
        fontWeight: "bold",
    }
});

export default SearchScreen;