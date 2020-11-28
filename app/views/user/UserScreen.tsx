import React, { FunctionComponent } from 'react';
import { useLocalObservable } from 'mobx-react-lite';
import { StoreProvider, UserStore } from '../../stores';
import { Separator } from '../../components';
import UserInfo from './UserInfo';
import UserFetch from './UserFetch';

const UserScreen: FunctionComponent = () => {
    const userStore = useLocalObservable(() => new UserStore());

    return (
        <StoreProvider store={{ userStore: userStore }}>
            <UserFetch />
            <Separator />
            <UserInfo />
        </StoreProvider>
    );
};

export default UserScreen;
