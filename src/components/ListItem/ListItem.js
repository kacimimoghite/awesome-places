import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';

const listItem = (props) => (
    <TouchableOpacity onPress={props.onItemPressed}>
        <View style={styles.listItem}>
            <Image style={styles.image} source={props.placeImage}/>
            <Text>{props.placeName}</Text>
        </View>
    </TouchableOpacity>
);

const styles = StyleSheet.create({
    listItem: {
        width: "100%",
        marginBottom: 5,
        padding: 10,
        backgroundColor: "#eee",
        flexDirection: 'row',
        alignItems: 'center'
    },
    image: {
        width: 40,
        height: 40,
        marginRight: 8
    }
});

export default listItem;