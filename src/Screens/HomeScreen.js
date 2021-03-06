/* eslint-disable prettier/prettier */
import 'react-native-gesture-handler';
import React from 'react';
import { View, Pressable, StyleSheet } from 'react-native';

import HomeButtonDetail from '../components/HomeButtonDetail';



const HomeScreen = ({ navigation }) => {
    return (
        <>
            <View style={styles.container}>
                <Pressable style={{ marginVertical: 10 }} >

                    <HomeButtonDetail buttonText="Asset Inventory"
                        iconName={"warehouse"} />
                </Pressable>
                <Pressable onPress={() => navigation.navigate('Search')}>
                    <HomeButtonDetail buttonText="Model"
                        iconName={"universal-access"} />
                </Pressable>
                <Pressable style={{ marginTop: 10 }}>
                    <HomeButtonDetail buttonText="Person"
                        iconName={"user-check"} />
                </Pressable>

            </View>
        </>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 0.5,
        justifyContent: 'space-around',
    }


});

export default HomeScreen;
