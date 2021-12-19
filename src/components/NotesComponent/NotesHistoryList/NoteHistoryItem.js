import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const NoteHistoryItem = ({ name, date }) => {
    return (
        <View>
            <Text style={styles.name}>{name}</Text>
            <Text style={styles.date}>{date}</Text>
            <Text style={styles.text}>This item needs to be checked</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    name: {
        fontFamily: 'sans-serif',
        fontWeight: 'bold',
        fontSize: 18,
        color: '#4e4e4e'
    },
    date: {
        fontFamily: 'sans-serif',
        fontStyle: 'italic',
        fontSize: 12,
        color: '#4e4e4e'
    },
    text: {
        fontFamily: 'sans-serif',
        fontSize: 16,
        color: '#4e4e4e'
    }
})

export default NoteHistoryItem;
