import { StatusBar } from 'expo-status-bar';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import { StyleSheet, Text, View,Image, Dimensions, Pressable, SafeAreaView, ScrollView, TextInput } from 'react-native';
import OnBoardScreen from './screens/OnBoardScreen';
import HomeScreen from './screens/HomeScreen';
import DetailsScreen from './screens/DetailsScreen';
import COLORS from './const/colors';
import Icon from 'react-native-vector-icons/MaterialIcons';


const Stack = createStackNavigator();

const {width} = Dimensions.get('screen');



export default function App() {

  
  return (

    // <OnBoardScreen/>
    // <HomeScreen/>

    <NavigationContainer>
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="OnBoardScreen" component={OnBoardScreen} />
      <Stack.Screen name="HomeScreen" component={HomeScreen} />
      <Stack.Screen name="DetailsScreen" component={DetailsScreen} />
    </Stack.Navigator>
  </NavigationContainer>

 

  

);

}

const styles = StyleSheet.create({


});
