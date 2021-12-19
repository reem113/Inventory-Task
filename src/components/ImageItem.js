import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

const ImageItem = ({ imgDescription, imgPath }) => {
    return (
        <View style={styles.container}>
            <Image
                style={styles.img}
                source={imgPath} />
            <Text style={styles.text}>{imgDescription}</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        display: 'flex',
        flexDirection: 'column',
        marginHorizontal: 15,
        marginVertical: 12,
        shadowColor: 'rgb(78, 78, 78)',
        shadowOffset: {
            width: 0,
            height: 4,
        },
        shadowOpacity: 0.30,
        shadowRadius: 4.65,

        elevation: 8,
    },

    img: {
        width: 150,
        height: 100,
        borderRadius: 25,
        backgroundColor: '#fff',
    },
    text: {
        fontFamily: 'sans-serif',
        color: 'rgb(78, 78, 78)',
        fontWeight: 'bold',
        fontSize: 18,
        textAlign: 'center',
        marginTop: 3
    }
})

export default ImageItem;
