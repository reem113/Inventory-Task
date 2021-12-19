import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const HomeButtonDetail = ({ buttonText }) => {
    return (
        <View style={styles.container}>
            <Text style={styles.Text}>{buttonText}</Text>
        </View >
    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#EAEAEA',
        borderWidth: 1,
        borderColor: '#EAEAEA',
        borderRadius: 50,
        padding: 20,
        marginHorizontal: 30
    },

    Text: {
        fontFamily: 'tahoma',
        fontSize: 20,
        fontWeight: 'bold',
        color: 'rgb(78, 78, 78)'
    }
})

export default HomeButtonDetail;
