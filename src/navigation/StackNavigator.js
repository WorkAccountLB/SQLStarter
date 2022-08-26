import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import styles from '../constants/styles';

import HomeScreen from '../screens/HomeScreen.js';
import RegisterUser from '../screens/RegisterUser';
import UpdateUser from '../screens/UpdateUser';
import ViewUser from '../screens/ViewUser';
import ViewAllUser from '../screens/ViewAllUser';
import DeleteUser from '../screens/DeleteUser';

const ContentNavigator = createStackNavigator();

const NavStack = () => {
  return (
    <ContentNavigator.Navigator
      screenOptions={screenOptionStyle}
      initialRouteName="HomeScreen">
      <ContentNavigator.Screen
        name="HomeScreen"
        component={HomeScreen}
        options={{title: 'Home Screen'}}
      />
      <ContentNavigator.Screen
        name="RegisterUser"
        component={RegisterUser}
        options={{title: 'Register User'}}
      />
      <ContentNavigator.Screen
        name="UpdateUser"
        component={UpdateUser}
        options={{title: 'Update User'}}
      />
      <ContentNavigator.Screen
        name="ViewUser"
        component={ViewUser}
        options={{title: 'View User'}}
      />
      <ContentNavigator.Screen
        name="ViewAllUser"
        component={ViewAllUser}
        options={{title: 'View All User'}}
      />
      <ContentNavigator.Screen
        name="DeleteUser"
        component={DeleteUser}
        options={{title: 'Delete User'}}
      />
    </ContentNavigator.Navigator>
  );
};

const screenOptionStyle = {
  //Navigation Headers turned off as Headers to be created within Screens.
  headerShown: true,
  headerStyle: {
    backgroundColor: styles.headerBackgroundColor,
  },
  headerTintColor: styles.headerTintColor,
  headerBackTitle: 'Back',
  backgroundColor: styles.generalBackgroundColor,
};

export {NavStack};
