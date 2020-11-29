import React, { FunctionComponent } from 'react';
import { StyleSheet, View } from 'react-native';
import { observer, useLocalObservable } from 'mobx-react-lite';
import { StoreProvider, UserStore } from '../../stores';
import { NetworkState } from '../../services';
import { LoadingErrorOverlay, Separator } from '../../components';
import UserInfo from './UserInfo';
import UserFetch from './UserFetch';

const UserScreen: FunctionComponent = observer(() => {
    const userStore = useLocalObservable(() => new UserStore());

    return (
        <StoreProvider store={{ userStore: userStore }}>
            <View style={styles.container}>
                <UserFetch />
                <Separator style={styles.separator} />
                {userStore.state === NetworkState.Idle ? (
                    <UserInfo />
                ) : (
                    <LoadingErrorOverlay
                        error={userStore.state === NetworkState.Error ? 'Error connecting to the server.' : undefined}
                    />
                )}
            </View>
        </StoreProvider>
    );
});

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
