import React, { FunctionComponent } from 'react';
import { StyleSheet, View } from 'react-native';

const Separator: FunctionComponent = () => {
    return <View style={styles.separator} />;
};

const styles = StyleSheet.create({
    separator: {
        backgroundColor: 'lightgray',
        height: 1,
        marginVertical: 2,
    },
});

export default Separator;
