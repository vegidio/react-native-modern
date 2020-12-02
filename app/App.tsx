import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { HomeScreen, UserScreen } from './views';
import { Provider } from 'react-redux';
import store from './store';

const Stack = createStackNavigator();

const App = () => {
    return (
        <Provider store={store}>
            <NavigationContainer>
                <Stack.Navigator initialRouteName="Home" screenOptions={{ cardStyle: { backgroundColor: 'white' } }}>
                    <Stack.Screen name="Home" component={HomeScreen} />
                    <Stack.Screen name="User" component={UserScreen} />
                </Stack.Navigator>
            </NavigationContainer>
        </Provider>
    );
};

export default App;
