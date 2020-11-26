import React, { FunctionComponent, useEffect } from 'react';
import { Text } from 'react-native';
import to from 'await-to-js';
import { GithubService } from '../../services';

const UserScreen: FunctionComponent = () => {
    const service = new GithubService();

    useEffect(() => {
        const fetchData = async () => {
            let [error, user] = await to(service.getUser('vegidioxxxxx'));

            if (error) {
                console.error(error);
                return;
            }

            console.log(user);
        };

        fetchData();
    }, [service]);

    return (
        <>
            <Text>User Screen</Text>
        </>
    );
};

export default UserScreen;
