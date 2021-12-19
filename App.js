/* eslint-disable prettier/prettier */
import 'react-native-gesture-handler';

import React from 'react';
import { Button, StyleSheet } from 'react-native';

import { createNativeStackNavigator } from '@react-navigation/native-stack' //Insert screens into a stack
import { NavigationContainer, DefaultTheme } from '@react-navigation/native'; //contains navigator and screen

import HomeScreen from './src/Screens/HomeScreen';
import SearchScreen from './src/Screens/SearchScreen';
import DetailsScreen from './src/Screens/DetailsScreen';

// import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
// import Icon from 'react-native-vector-icons/FontAwesome';

const Stack = createNativeStackNavigator();

const MyTheme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    background: 'rgb(244, 244, 244)',
    card: 'rgb(222, 222, 222)',
    text: 'rgb(78, 78, 78)'
  },
};


const App = () => {
  return (
    <NavigationContainer theme={MyTheme}>
      <Stack.Navigator
        initialRouteName="Home"
      >
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={({ navigation }) => ({
            // headerLeft: () => <Icon name="rocket" size={30} color="#900" onPress={navigation.goBack()} />,
            title: 'Picture',
            headerTitleStyle: {
              fontFamily: 'sans-serif',
              fontWeight: 'bold',
              fontSize: 26,
            },
            headerRight: () => <Button title='go'></Button>
          })}
        />
        <Stack.Screen
          name="Search"
          component={SearchScreen}
          options={({ navigation }) => ({
            headerLeft: () => <Button title='back'></Button>,
            title: 'Model',
            headerTitleStyle: {
              fontFamily: 'sans-serif',
              fontWeight: 'bold',
              fontSize: 26,
            },
          })}
        />
        <Stack.Screen
          name="Details"
          component={DetailsScreen}
          options={({ navigation }) => ({
            // headerLeft: () => <Button title='back' onPress={navigation.goBack()}></Button>,
            title: 'Model Details',
            headerTitleStyle: {
              fontFamily: 'sans-serif',
              fontWeight: 'bold',
              fontSize: 26,
            },
            headerRight: () => <Button title='edit'></Button>
          })}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({})

export default App;

