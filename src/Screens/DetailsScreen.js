import React from 'react';
import { View, Image, Text, StyleSheet } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';


import ModelDetails from '../components/DetailsComponent/ModelDetails';
import Notes from '../components/NotesComponent/Notes';

const DetailsScreen = ({ navigation }) => {
    // const id = navigation.getParam('id');
    return (
        <ScrollView>
            <View style={styles.container}>
                <Image style={styles.img}
                    source={require('../Images/pexels-anete-lusina-4792283.jpg')} />
                <View style={styles.separator}></View>
                <ModelDetails />
                <View style={styles.separator}></View>
                <Notes />
            </View>
        </ScrollView>
    );
}

const styles = StyleSheet.create({

    container:
    {

        backgroundColor: '#EAEAEA',
        margin: 20,
        borderRadius: 15

    },
    img: {
        width: "70%",
        height: 150,
        alignSelf: 'center',
        borderRadius: 15,
        marginVertical: 20,
    },
    separator: {
        height: 1,
        width: "90%",
        backgroundColor: '#E1E1E1',
        alignSelf: 'center',
        marginVertical: 5,
    }
})

export default DetailsScreen;
