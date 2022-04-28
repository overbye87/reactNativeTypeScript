import React from 'react';

import {NavigationContainer} from '@react-navigation/native';

import ForgotPassword from './src/pages/ForgotPassword';
import SignIn from './src/pages/SignIn';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="SignIn"
          component={SignIn}
          options={{title: 'Sign In'}}
        />
        <Stack.Screen
          name="ForgotPassword"
          component={ForgotPassword}
          options={{title: 'ForgotPassword'}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
