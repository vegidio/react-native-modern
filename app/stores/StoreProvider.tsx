import React, { createContext } from 'react';
import UserStore from './UserStore';

const StoreContext = createContext<{ userStore?: UserStore }>({});

const StoreProvider = ({ store, children }: any) => {
    return <StoreContext.Provider value={store}>{children}</StoreContext.Provider>;
};

export { StoreContext, StoreProvider };
