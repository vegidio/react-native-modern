import React, { FunctionComponent } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { useSelector } from 'react-redux';
import { UserState } from '../../store/UserSlice';

const UserInfo: FunctionComponent = () => {
    const { data } = useSelector((state: UserState) => state.user);

    return (
        <>
            <UserRow label="ID:" value={data.id ?? 0} />
            <UserRow label="Login:" value={data.login ?? ''} />
            <UserRow label="Name:" value={data.name ?? ''} />
            <UserRow label="URL:" value={data.html_url ?? ''} />
        </>
    );
};

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
