import React from 'react';
import { View, TextInput, StyleSheet } from 'react-native';

const AddNote = () => {



    return (
        <View style={styles.container}>

            <TextInput
                autoCorrect={false}
                autoCapitalize='none'
                style={styles.searchStyle}
                placeholderTextColor="#b4b4b4"
                placeholder="Add a note..."
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#fff',
        borderColor: '#fff',
        borderWidth: 1,
        borderRadius: 50,
        marginHorizontal: 15,
        marginVertical: 10
    },
    searchStyle: {
        fontStyle: 'italic',
        fontSize: 18,
        fontFamily: 'sans-serif',
        padding: 10,
        marginLeft: 15
    },

})

export default AddNote;
