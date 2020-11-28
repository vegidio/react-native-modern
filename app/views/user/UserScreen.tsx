import React, { FunctionComponent, useContext, useEffect } from 'react';
import { Button, Text } from 'react-native';
import { useNavigation, useRoute } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { observer, useLocalObservable } from 'mobx-react-lite';
import { StoreContext, StoreProvider, UserStore } from '../../stores';

const UserScreen: FunctionComponent = observer(() => {
    const navigation = useNavigation<StackNavigationProp<any>>();
    const userStore = useLocalObservable(() => new UserStore());
    const { username } = useRoute().params as any;

    useEffect(() => {
        userStore.fetchUser(username);
    }, [userStore, username]);

    const onListPress = () => {
        navigation.push('User', { username: 'johnie' });
    };

    return (
        <StoreProvider store={{ userStore: userStore }}>
            <UserInfo />
            <Button title={'Novo'} onPress={() => onListPress()} />
        </StoreProvider>
    );
});

const UserInfo: FunctionComponent = observer(() => {
    const { userStore } = useContext(StoreContext);

    return (
        <>
            <Text>{userStore?.user.id}</Text>
            <Text>{userStore?.user.login}</Text>
            <Text>{userStore?.user.name}</Text>
            <Text>{userStore?.user.htmlUrl}</Text>
        </>
    );
});

export default UserScreen;
