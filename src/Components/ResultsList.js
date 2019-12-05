import React from 'react';
import { View, Text, StyleSheet, FlatList, Image } from 'react-native';
import ResultDetails from './ResultDetails';

const ResultsList = ({ title, results }) => {

    return (
        <View>
            <Text style={styles.title}>{title}</Text>
            <FlatList
                horizontal
                data={results}
                keyExtractor={(result) => result.id}
                renderItem={({ item }) => {
                    return (
                        <ResultDetails
                            result={item}
                        />
                    );
                }}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    title: {
        fontWeight: "bold",
        marginVertical: 5,
        marginLeft: 10,
        fontSize: 20
    }
});

export default ResultsList;