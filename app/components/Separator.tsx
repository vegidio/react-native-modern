import React, { FunctionComponent } from 'react';
import { StyleSheet, View } from 'react-native';

type Props = {
    style?: object;
};

const Separator: FunctionComponent<Props> = ({ style }) => {
    return <View style={[styles.separator, style]} />;
};

const styles = StyleSheet.create({
    separator: {
        backgroundColor: 'lightgray',
        height: 1,
        marginVertical: 2,
    },
});

export default Separator;
