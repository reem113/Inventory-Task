import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const DetailItem = ({ property, value }) => {
    return (
        <View style={styles.container}>
            <Text style={styles.property}>{property}</Text>
            <Text style={styles.value}>{value}</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flexDirection: "row",
        justifyContent: 'space-between',
        marginVertical: 5
    },
    property: {
        fontFamily: 'sans-serif',
        fontSize: 20,
        marginLeft: 10,
        color: 'rgb(78, 78, 78)'

    },
    value: {
        fontFamily: 'sans-serif',
        fontSize: 20,
        fontWeight: '900',
        marginRight: 10,
        color: 'rgb(78, 78, 78)'


    }
})

export default DetailItem;
