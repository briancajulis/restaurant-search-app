import React from 'react';
import { View, Text, StyleSheet, FlatList, TouchableOpacity } from 'react-native';
import { withNavigation } from 'react-navigation'; // Allows react navigation to directly give a component navigation props
import ResultDetails from './ResultDetails';

const ResultsList = ({ title, results, navigation }) => {

    // Hides a section if there is not results for a specific price range
    if (!results.length) {
        return null;
    }

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
                            <TouchableOpacity
                                onPress={() => navigation.navigate('ResultShow', {
                                    id: item.id,
                                })}
                            >
                                <ResultDetails
                                    result={item}
                                />
                            </TouchableOpacity>
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

export default withNavigation(ResultsList);