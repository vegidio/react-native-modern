import React, { FunctionComponent, useState } from 'react';
import { Button, StyleSheet, Text, TextInput, View } from 'react-native';
import { useDispatch } from 'react-redux';
import { userFetch } from '../../store/UserSlice';

const UserFetch: FunctionComponent = () => {
    const dispatch = useDispatch();
    const [username, setUsername] = useState('vegidio');

    const onFetch = () => {
        dispatch(userFetch(username));
    };

    return (
        <>
            <View style={styles.row}>
                <Text style={styles.label}>Username:</Text>
                <TextInput
                    style={styles.input}
                    autoCapitalize="none"
                    autoCorrect={false}
                    onChangeText={(text) => setUsername(text.trim())}
                    placeholder="Enter the username"
                    value={username}
                />
            </View>

            <Button disabled={username.length === 0} title="Fetch" onPress={() => onFetch()} />
        </>
    );
};

const styles = StyleSheet.create({
    row: {
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'row',
        height: 32,
    },
    label: {
        fontWeight: 'bold',
        width: 88,
    },
    input: {
        width: 128,
    },
});

export default UserFetch;
