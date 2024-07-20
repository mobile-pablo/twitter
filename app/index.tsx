import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import Dashboard from './ui/feature/dashboard/dashboard.jsx';

const Stack = createStackNavigator();

const App = () => {
  return (
    <SafeAreaProvider>
      <NavigationContainer independent = {true}>
        <Stack.Navigator
          initialRouteName="Dashboard"
          screenOptions={{ headerShown: false }} // Hide headers globally
        >
          <Stack.Screen 
            name="Dashboard" 
            component={Dashboard} 
            options={{ headerShown: true }} // Show header for the Dashboard screen only
          />
        </Stack.Navigator>
      </NavigationContainer>
    </SafeAreaProvider>
  );
};

export default App;
