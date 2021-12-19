import 'react-native-gesture-handler';
import React, { useState } from 'react';
import { View, Text, StyleSheet, Pressable } from 'react-native';

import DetailItem from './DetailItem';

const ModelDetails = () => {

    const [shown, setShown] = useState(true);
    const toggle = () => {
        setShown(!shown);
        console.log(shown);
    }
    return (
        <View>
            <Text style={styles.header}>Image Info</Text>
            <Pressable onPress={toggle} style={styles.toggleButton}><Text style={{ color: 'rgb(78, 78, 78)' }}>{shown ? 'Hide' : 'show'}</Text></Pressable>
            {shown ? <View >
                <DetailItem
                    property='Model'
                    value='Gt2000' />
                <DetailItem
                    property='Model Name'
                    value='Gt2000' />
                <DetailItem
                    property='Model Type'
                    value='Hello' />
                <DetailItem
                    property='Cost'
                    value='' />
                <DetailItem
                    property='Category'
                    value='' />
                <DetailItem
                    property='Additional Description'
                    value='' />
            </View> : null}
        </View>
    );
}

const styles = StyleSheet.create({
    header: {
        fontSize: 28,
        fontFamily: 'sans-serif',
        fontWeight: 'bold',
        color: 'rgb(78, 78, 78)',
        marginLeft: 10,
        marginVertical: 10,
        position: 'relative'
    },
    toggleButton: {
        position: 'absolute',
        top: 15,
        right: 15,
    }
})

export default ModelDetails;
