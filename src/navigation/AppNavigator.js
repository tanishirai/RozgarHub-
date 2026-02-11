// src/navigation/AppNavigator.js
import React from 'react';
import { StatusBar } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import WelcomeScreen from '../screens/WelcomeScreen';
import GetStartedScreen from '../screens/GetStartedScreen';
import AboutWorkScreen from '../screens/AboutWorkScreen';
import LoginScreen from '../screens/LoginScreen';
import HomeScreen from '../screens/HomeScreen';
import HereJobScreen from '../screens/HereJobScreen';
import RateJobScreen from '../screens/RateJobScreen';
import ActiveJobsScreen from '../screens/ActiveJobsScreen';
import JobDetailScreen from '../screens/JobDetailScreen';

const Stack = createNativeStackNavigator();

const AppNavigator = () => {
  return (
    <NavigationContainer>
      <StatusBar barStyle="dark-content" backgroundColor="#F5F7FA" />
      <Stack.Navigator
        initialRouteName="Welcome"
        screenOptions={{
          headerStyle: { backgroundColor: '#4A90E2' },
          headerTintColor: '#fff',
          headerTitleStyle: { fontWeight: 'bold' },
        }}
      >
        <Stack.Screen name="Welcome" component={WelcomeScreen} options={{ headerShown: false }} />
        <Stack.Screen name="GetStarted" component={GetStartedScreen} options={{ title: "Let's Get Started" }} />
        <Stack.Screen name="AboutWork" component={AboutWorkScreen} options={{ title: 'About Your Work' }} />
        <Stack.Screen name="Login" component={LoginScreen} options={{ title: 'Login' }} />
        <Stack.Screen name="Home" component={HomeScreen} options={{ headerShown: false }} />
        <Stack.Screen name="HereJob" component={HereJobScreen} options={{ title: 'Available Jobs' }} />
        <Stack.Screen name="RateJob" component={RateJobScreen} options={{ title: 'Rate the Job' }} />
        <Stack.Screen name="ActiveJobs" component={ActiveJobsScreen} options={{ title: 'My Active Jobs' }} />
        <Stack.Screen name="JobDetail" component={JobDetailScreen} options={{ title: 'Job Details' }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigator;
