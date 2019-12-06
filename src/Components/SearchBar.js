import React from 'react';
import { View, Text, StyleSheet, TextInput } from 'react-native';
import { Feather } from '@expo/vector-icons'

const SearchBar = ({term, onTermChange, onTermSubmit}) => {
    return (
        <View style={styles.container}>
            <Feather name="search" style={styles.icon}/>
            <TextInput
                style={styles.textInput}
                placeholder="Search"
                value={term}
                onChangeText={onTermChange}
                autoCapitalize='none'
                autoCorrect={false}
                onEndEditing={onTermSubmit}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#f0eeee',
        borderRadius: 10,
        marginHorizontal: 20,
        flexDirection: 'row',
        height: 70,
        marginVertical: 20,
        padding: 10,
    },
    textInput: {
        paddingLeft: 10,
        flex: 1,
        justifyContent: "center",
        fontSize: 18
    },
    icon: {
        fontSize: 35,
        alignSelf: 'center'
    }
});

export default SearchBar;