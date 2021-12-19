import React from 'react';
import { View, StyleSheet } from 'react-native';

import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';

const Process = () => {
    return (
        <View>
            <FontAwesome5 style={styles.icon} name={'check-circle'} size={20} color="#4e4e4e" />
            <Text style={{ color: 'black', fontSize: 16 }}>Process</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        display: 'flex',
        flexDirection: 'column'
    }
})

export default Process;
