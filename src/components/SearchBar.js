import React from 'react';
import { View, TextInput, StyleSheet } from 'react-native';


const SearchBar = ({ term, onTermChange }) => {
    return (
        <View style={styles.container}>
            <TextInput
                autoCorrect={false}
                autoCapitalize='none'
                style={styles.searchStyle}
                value={term}
                onChangeText={newTerm => onTermChange(newTerm)}
                placeholder="Type to Search..."
                placeholderTextColor="#B4B4B4"

            />

        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#F0F0F0',
        borderColor: '#F0F0F0',
        borderWidth: 1,
        borderRadius: 50,
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginHorizontal: 30,
        marginVertical: 10,

    },
    searchStyle: {
        flex: 1,
        fontStyle: 'italic',
        fontSize: 24,
        fontFamily: 'sans-serif',
        padding: 15,

    },
})

export default SearchBar;
