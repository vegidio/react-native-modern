import React, { FunctionComponent, useContext } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { observer } from 'mobx-react-lite';
import { StoreContext } from '../../stores';

const UserInfo: FunctionComponent = observer(() => {
    const { userStore } = useContext(StoreContext);

    return (
        <>
            <UserRow label="ID:" value={userStore?.user.id} />
            <UserRow label="Login:" value={userStore?.user.login} />
            <UserRow label="Name:" value={userStore?.user.name} />
            <UserRow label="URL:" value={userStore?.user.htmlUrl} />
        </>
    );
});

type Props = {
    label: string;
    value: any;
};

const UserRow: FunctionComponent<Props> = ({ label, value }) => {
    return (
        <View style={styles.row}>
            <Text style={styles.label}>{label}</Text>
            <Text>{value}</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    row: {
        alignItems: 'center',
        flexDirection: 'row',
        height: 32,
    },
    label: {
        fontWeight: 'bold',
        width: 80,
    },
});

export default UserInfo;
