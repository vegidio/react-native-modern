import React, { createContext } from 'react';
import UserStore from './UserStore';
import AppStore from './AppStore';
import UserListStore from './UserListStore';

const StoreContext = createContext<{
    appStore?: AppStore;
    userStore?: UserStore;
    userListStore?: UserListStore;
}>({});

const StoreProvider = ({ store, children }: any) => {
    return <StoreContext.Provider value={store}>{children}</StoreContext.Provider>;
};

export { StoreContext, StoreProvider };
