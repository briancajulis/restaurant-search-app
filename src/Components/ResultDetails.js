import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';

const ResultDetails = ({ result }) => {
    return (
        <View>
            <Text>{result.name}</Text>
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

export default ResultDetails;