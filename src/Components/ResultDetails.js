import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';

const ResultDetails = ({ result }) => {
    return (
        <View style={styles.container}>
            <Image
                style={styles.image}
                source={{uri: result.image_url}}
            />
            <Text style={styles.name}>{result.name}</Text>
            <Text>{result.rating} Stars, {result.review_count} Reviews</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        marginHorizontal: 20,
    },
    title: {
        fontWeight: "bold",
        marginVertical: 5,
        marginLeft: 10,
        fontSize: 20,
    },
    image: {
        width: 250,
        height: 120,
        borderRadius: 5,
    },
    name: {
        fontWeight: 600,
        fontSize: 13,
        marginTop: 10
    }
});

export default ResultDetails;