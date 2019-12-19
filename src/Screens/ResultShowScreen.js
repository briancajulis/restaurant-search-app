import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, FlatList, Image, TouchableOpacity, Linking } from 'react-native';
import yelp from '../api/yelp';
import { withOrientation } from 'react-navigation';

const ResultShowScreen = ({ navigation }) => {
    const [result, setResult] = useState(null);
    console.log(result);

    const id = navigation.getParam('id');
    // console.log(id);
    // console.log(result);

    const getResult = async (id) => {
        const response = await yelp.get(`/${id}`);
        setResult(response.data);
    };

    useEffect(()=> {
        getResult(id);
    },[]);

    onYelpBtnPress = (url) => {
        Linking.openURL(url).catch(err => console.log(err));
    }

    onCallBtnPress = (phone) => {
        Linking.openURL(`tel: ${phone}`).catch(err => console.log(err));
    }

    if(!result) {
        return null;
    }

    return (
        <View style={styles.container}>
            <FlatList
                horizontal
                data={result.photos}
                keyExtractor={photo => photo} // we use the photo url as the key
                renderItem={({item}) => {
                    return(
                        <View>
                            <Image
                                style={styles.image}
                                source={{uri: item}}
                            />
                        </View>
                    );
                }}
            />
            <Text style={{textAlign: "center", marginTop: 10}}>Star Rating: {result.rating}, {result.review_count} Reviews</Text>
            <View style={styles.btnContainer}>
                <TouchableOpacity
                    onPress={() => onCallBtnPress(result.phone)}
                >
                    <Text style={styles.button}>Call Now</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    onPress={() => onYelpBtnPress(result.url)}
                >
                    <Text style={styles.button}>Check Out On Yelp</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
};

// Changes the header title in navigation
ResultShowScreen.navigationOptions = ({ navigation }) => ({
    title: navigation.getParam('name')
})

const styles = StyleSheet.create({
    container: {
        marginTop: 15,
    },
    resultName: {
        fontWeight: "bold",
        marginVertical: 15,
        textAlign: "center",
        fontSize: 20,
    },
    image: {
        height: 200,
        width: 300,
        borderRadius: 5,
        marginHorizontal: 10,
    },
    button: {
        backgroundColor: '#16a085',
        paddingHorizontal: 10,
        paddingVertical: 7,
        color: 'white',
        fontWeight: 'bold',
    },
    btnContainer: {
        marginTop: 20,
        flexDirection: 'row',
        justifyContent: 'space-around',
    }
});

export default ResultShowScreen;