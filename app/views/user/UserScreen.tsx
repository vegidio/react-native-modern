import React, { FunctionComponent } from 'react';
import { StyleSheet, View } from 'react-native';
import { useSelector } from 'react-redux';
import { LoadingErrorOverlay, Separator } from '../../components';
import { NetworkState } from '../../services';
import { UserState } from '../../store/UserSlice';

import UserInfo from './UserInfo';
import UserFetch from './UserFetch';

const UserScreen: FunctionComponent = () => {
    const { state } = useSelector((userState: UserState) => userState.user);

    return (
        <View style={styles.container}>
            <UserFetch />
            <Separator style={styles.separator} />
            {state === NetworkState.Idle ? (
                <UserInfo />
            ) : (
                <LoadingErrorOverlay
                    error={state === NetworkState.Error ? 'Error connecting to the server.' : undefined}
                />
            )}
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 16,
    },
    separator: {
        marginVertical: 8,
    },
});

export default UserScreen;
