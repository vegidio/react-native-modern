import React, { FunctionComponent } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { User } from '../../models';

type Props = {
    user: User;
};

const UserListRow: FunctionComponent<Props> = ({ user }) => {
    return (
        <View style={styles.container}>
            <Text>{user.username}</Text>
            <Text>{user.age}</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        flexDirection: 'row',
        height: 40,
        justifyContent: 'space-between',
        paddingHorizontal: 16,
    },
});

export default UserListRow;
