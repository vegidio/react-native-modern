import React, { FunctionComponent } from 'react';
import { StyleSheet, Text, View } from 'react-native';

type Props = {
    title: string;
};

const HomeMenuRow: FunctionComponent<Props> = (props) => {
    return (
        <View style={styles.container}>
            <Text>{props.title}</Text>
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
