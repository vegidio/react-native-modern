import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { useLocalObservable } from 'mobx-react-lite';
import { HomeScreen, UserScreen, UserListScreen } from './views';
import { AppStore, StoreProvider } from './stores';

const Stack = createStackNavigator();

const App = () => {
    const appStore = useLocalObservable(() => new AppStore());

    return (
        <StoreProvider store={{ appStore }}>
            <NavigationContainer>
                <Stack.Navigator initialRouteName="Home" screenOptions={{ cardStyle: { backgroundColor: 'white' } }}>
                    <Stack.Screen name="Home" component={HomeScreen} />
                    <Stack.Screen name="UserList" component={UserListScreen} />
                    <Stack.Screen name="User" component={UserScreen} />
                </Stack.Navigator>
            </NavigationContainer>
        </StoreProvider>
    );
};

export default App;
