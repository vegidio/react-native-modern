import React, { FunctionComponent } from 'react';
import { StyleSheet, Text, View } from 'react-native';

type Props = {
    title: string;
};

const HomeMenuRow: FunctionComponent<Props> = ({ title }) => {
    return (
        <View style={styles.container}>
            <Text>{title}</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        height: 40,
        justifyContent: 'center',
    },
});

export default HomeMenuRow;
