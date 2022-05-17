import React, { useState } from 'react';
import { View, Text, Pressable, StyleSheet } from 'react-native';


import AddNote from './AddNote';
import Historylist from './NotesHistoryList/HistoryList';

import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';

const Notes = () => {

    const [shown, setShown] = useState(true);
    const toggle = () => {
        setShown(!shown);
    }

    return (
        <View>
            <Text style={styles.header}>Notes</Text>
            <Pressable onPress={toggle} style={styles.toggleButton}>
                <Text style={{ color: 'rgb(78, 78, 78)' }}>{shown ? 'Hide' : 'show'}</Text>
            </Pressable>

            {shown ? <View>
                <Pressable><View style={styles.icon}>
                    <FontAwesome5 style={styles.saveIcon} name={'save'} size={18} color="#4e4e4e" />
                    <Text style={styles.saveButton}>Save</Text>
                </View></Pressable>
                <AddNote />
                <View style={styles.wrapper}>
                    <Text style={styles.title}>History Notes</Text>
                    <Historylist />
                </View>


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
    },
    saveButton: {
        position: 'absolute',
        bottom: -20,
        right: 90,
        marginBottom: 20,
        color: 'rgb(78, 78, 78)',
    },
    title: {
        fontSize: 24,
        color: 'rgb(78, 78, 78)',
        fontFamily: 'sans-serif',
        marginLeft: 20

    },
    wrapper: {
        marginVertical: 15
    },
    icon: {
        flexDirection: 'row'
    },
    saveIcon: {
        position: 'absolute',
        right: 125,
        bottom: 1
    }
})

export default Notes;
