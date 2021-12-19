/* eslint-disable prettier/prettier */
import 'react-native-gesture-handler';

import React from 'react';
import { Button, StyleSheet } from 'react-native';

import { createNativeStackNavigator } from '@react-navigation/native-stack' //Insert screens into a stack
import { NavigationContainer, DefaultTheme } from '@react-navigation/native'; //contains navigator and screen

import HomeScreen from './src/Screens/HomeScreen';
import SearchScreen from './src/Screens/SearchScreen';
import DetailsScreen from './src/Screens/DetailsScreen';

import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import Process from './src/components/icons/process';
import Edit from './src/components/icons/edit';

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
            headerLeft: () => <FontAwesome5 style={styles.icon} name={'arrow-alt-circle-left'} size={20} color="#4e4e4e" />,
            title: 'Picture',
            headerTitleStyle: {
              fontFamily: 'sans-serif',
              fontWeight: 'bold',
              fontSize: 26,
            },
            headerRight: () => {
              <Process />
            }
          })}
        />
        <Stack.Screen
          name="Search"
          component={SearchScreen}
          options={({ navigation }) => ({
            headerLeft: () => <FontAwesome5 style={styles.icon} name={'arrow-alt-circle-left'} size={20} color="#4e4e4e" />,
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
            headerLeft: () => <FontAwesome5 style={styles.icon} name={'arrow-alt-circle-left'} size={20} color="#4e4e4e" />,
            title: 'Model Details',
            headerTitleStyle: {
              fontFamily: 'sans-serif',
              fontWeight: 'bold',
              fontSize: 26,
            },
            headerRight: () => <Edit />
          })}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  icon: {
    marginRight: 5

  }
})

export default App;

