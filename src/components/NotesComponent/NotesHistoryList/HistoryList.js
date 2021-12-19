import React from 'react';
import { View, FlatList, StyleSheet } from 'react-native';

import NoteHistoryItem from './NoteHistoryItem';

const Historylist = () => {

    const data = [{ id: 1, name: "Jennifer Smith", date: "03.02.2021-15:00PM" },
    { id: 2, name: "Jennifer Smith", date: "03.02.2021-15:00PM" }]
    return (
        <View style={styles.container}>
            <FlatList
                data={data}
                keyExtractor={item => item.id}
                ItemSeparatorComponent={() => {
                    return <View style={
                        styles.separator
                    } />
                }}
                renderItem={
                    ({ item }) => {
                        return (
                            <NoteHistoryItem
                                name={item.name}
                                date={item.date} />
                        )
                    }
                } />

        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#fff',
        padding: 10,
        marginHorizontal: 15,
        marginVertical: 5,
        borderRadius: 20
    },
    separator: {
        backgroundColor: '#E3E3E3',
        height: 1,
        flex: 1,
        marginVertical: 5
    }
})

export default Historylist;
