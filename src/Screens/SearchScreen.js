import 'react-native-gesture-handler';
import React, { useState } from 'react';
import { View, StyleSheet, FlatList, Pressable } from 'react-native';

import SearchBar from '../components/SearchBar';
import ImageItem from '../components/ImageItem';

const SearchScreen = ({ navigation }) => {

    const data =
        [{ id: 1, src: require('../Images/pexels-anete-lusina-4792283.jpg'), caption: "Printer" },
        { id: 2, src: require('../Images/Monitor.jpg'), caption: "LCD" },
        { id: 3, src: require('../Images/cartridges-3324117_640.jpg'), caption: "Printer Inks" },
        { id: 4, src: require('../Images/pexels-karsten-madsen-18105.jpg'), caption: "Laptop" },
        ]


    const [term, setTerm] = useState("");

    return (
        <View>
            <SearchBar
                term={term}
                onTermChange={newTerm => setTerm(newTerm)}

            />
            <FlatList
                style={styles.flatlist}
                data={data}
                numColumns={2}
                ItemSeparatorComponent={() => {
                    return <View style={
                        styles.separator
                    } />
                }}
                keyExtractor={item => item.id}
                renderItem={({ item }) => {
                    return (
                        <Pressable
                            onPress={() => navigation.navigate('Details', { id: item.id })}>
                            <ImageItem
                                imgPath={item.src}
                                imgDescription={item.caption} />

                        </Pressable>
                    )
                }} />
        </View>
    );
}

const styles = StyleSheet.create({
    flatlist: {
        flexDirection: "column",
        marginHorizontal: 20,
    },
    separator: {
        backgroundColor: '#E3E3E3',
        height: 2,
        flex: 1,
        marginVertical: 5
    }
})

export default SearchScreen;
