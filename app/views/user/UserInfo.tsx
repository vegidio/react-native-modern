import React, { FunctionComponent, useContext } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { observer } from 'mobx-react-lite';
import { StoreContext } from '../../stores';

const UserInfo: FunctionComponent = observer(() => {
    const { userStore } = useContext(StoreContext);

    return (
        <>
            <UserRow label="ID:" value={userStore?.user.objectId} />
            <UserRow label="Creation:" value={userStore?.user.createdAt?.toISOString()} />
            <UserRow label="User:" value={userStore?.user.username} />
            <UserRow label="Verified:" value={String(userStore?.user.emailVerified ?? '')} />
            <UserRow label="Age:" value={userStore?.user.age} />
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
        width: 88,
    },
});

export default UserInfo;
