import React from 'react';
import { View, Text, StyleSheet, FlatList, Image } from 'react-native';
import ResultDetails from './ResultDetails';

const ResultsList = ({ title, results }) => {
    return (
        <View>
            <Text style={styles.title}>{title}</Text>
            <FlatList
                showsHorizontalScrollIndicator={false}
                horizontal
                data={results}
                keyExtractor={(result) => result.id}
                renderItem={({ item }) => {
                    return (
                        <View>
                            <ResultDetails
                                result={item}
                            />
                        </View>
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
        marginTop: 15,
        marginLeft: 20,
        fontSize: 20
    }
});

export default ResultsList;