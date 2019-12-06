import React, { useState } from 'react';
import { View, Text, StyleSheet, ScrollView, ActivityIndicator } from 'react-native';
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
        // This placeholder allows us to wrap all our important elements in a view without having the issues with the View tag
        <> 
            <SearchBar
                term={term}
                onTermChange={setTerm}
                onTermSubmit={() => searchApi(term)}
            />
            {/* <Text style={{ textAlign: "center", fontWeight: "bold" }}>We have found {results.length} results.</Text> */}
            {errorMessage ? <Text style={styles.error}>{errorMessage}</Text> : null}
            {!results.length ? <ActivityIndicator style={styles.loading} size="large" color="#16a085" /> : null }
            <ScrollView showsVerticalScrollIndicator={false} >
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
                    title='Treat Yourself'
                    results={filterResultsByPrice('$$$$')}
                />
            </ScrollView>
            
            
        </>
    );
}

const styles = StyleSheet.create({
    loading: {
        flex: 1,
        justifyContent: 'center',
    },
    error: {
        color: 'red',
        fontWeight: "bold",
    }
});

export default SearchScreen;