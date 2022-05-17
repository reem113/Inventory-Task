import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';

const Process = () => {
    return (
        <View style={styles.container}>
            <FontAwesome5 style={styles.icon} name={'check-circle'} size={20} color="#7AC692" />
            <Text style={{ color: '#7AC692', fontSize: 10 }}>Process</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'column',
        justifyContent: 'space-between',
    },
    icon: {
        alignSelf: 'center'
    }
})

export default Process;
