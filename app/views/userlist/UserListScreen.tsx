import React, { FunctionComponent, useEffect } from 'react';
import { FlatList, Pressable, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { observer, useLocalObservable } from 'mobx-react-lite';
import { Separator } from '../../components';
import { StoreProvider, UserListStore } from '../../stores';
import { User } from '../../models';
import UserListRow from './UserListRow';

const UserListScreen: FunctionComponent = observer(() => {
    const navigation = useNavigation<StackNavigationProp<any>>();
    const userListStore = useLocalObservable(() => new UserListStore());

    useEffect(() => {
        userListStore.fetchUsers();
    }, [userListStore]);

    const onListPress = (user: User) => navigation.push('User', { objectId: user.objectId });

    return (
        <StoreProvider store={{ userListStore }}>
            <FlatList<User>
                style={styles.container}
                ItemSeparatorComponent={() => <Separator />}
                data={userListStore.users}
                keyExtractor={(item) => item.objectId!}
                renderItem={(item) => (
                    <Pressable onPress={() => onListPress(item.item)}>
                        <UserListRow user={item.item} />
                    </Pressable>
                )}
            />
        </StoreProvider>
    );
});

const styles = StyleSheet.create({
    container: {
        paddingHorizontal: 16,
    },
});

export default UserListScreen;
