import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';

const HomeButtonDetail = ({ buttonText, iconName }) => {
    return (
        <View style={styles.container}>
            <FontAwesome5 name={iconName} size={18} color="#4e4e4e" />
            <Text style={styles.Text}>{buttonText}</Text>
            <FontAwesome5 name={'arrow-right'} size={20} color="#7AC692" />
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
        marginHorizontal: 30,
        flexDirection: 'row',
        justifyContent: 'space-between'
    },

    Text: {
        fontFamily: 'tahoma',
        fontSize: 20,
        fontWeight: 'bold',
        color: 'rgb(78, 78, 78)'
    }
})

export default HomeButtonDetail;
