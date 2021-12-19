import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
const Edit = () => {
    return (
        <View style={styles.container}>
            <FontAwesome5 style={styles.icon} name={'pencil-alt'} size={16} color="#4e4e4e" />
            <Text style={styles.text}>Edit</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        borderColor: '#4e4e4e',
        borderRadius: 10,
        backgroundColor: '#fff',
        justifyContent: 'space-between',
        padding: 10
    },
    text: {
        fontSize: 12,
        color: '#4e4e4e',
        marginHorizontal: 5
    }
})

export default Edit;
