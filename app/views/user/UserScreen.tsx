import React, { FunctionComponent, useEffect } from 'react';
import { Text } from 'react-native';
import GithubService from '../../services/GithubService';

const UserScreen: FunctionComponent = () => {
    const service = new GithubService();

    useEffect(() => {
        console.log('Entrou');

        const fetchData = async () => {
            const user = await service.getUser('vegidio');
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
