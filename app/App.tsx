import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { HomeScreen, UserScreen } from './views';

const Stack = createStackNavigator();

const App = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName="Home" screenOptions={{ cardStyle: { backgroundColor: 'white' } }}>
                <Stack.Screen name="Home" component={HomeScreen} />
                <Stack.Screen name="User" component={UserScreen} />
            </Stack.Navigator>
        </NavigationContainer>
    );
};

export default App;
