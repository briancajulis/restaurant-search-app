import React, { useState } from 'react';
import {View, Text, StyleSheet} from 'react-native';
import SearchBar from '../Components/SearchBar';

const SearchScreen = () => {
    const [term, setTerm] = useState('');
    // Two options to call an api: fetch or axios

    return (
        <View>
            <SearchBar
                term={term}
                onTermChange={newTerm => setTerm(newTerm)}
                onTermSubmit={() => console.log('term was submitted')}
            />
            <Text>Search Screen</Text>
            <Text>{term}</Text>
        </View>
    );
}

const style = StyleSheet.create({

});

export default SearchScreen;