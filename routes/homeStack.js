import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Home from '../screen/Home';
import ReviewDetails from '../screen/ReviewDetails';

const Stack = createStackNavigator();

const Navigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Home'>
        <Stack.Screen name='Home' component={Home} />
        <Stack.Screen name='ReviewDetails' component={ReviewDetails} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Navigator;
