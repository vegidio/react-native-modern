import React, { FunctionComponent } from 'react';
import { ActivityIndicator, Image, StyleSheet, Text, View } from 'react-native';
import { Images } from '../assets/images';

type Props = {
    error?: string;
};

const LoadingErrorOverlay: FunctionComponent<Props> = ({ error }) => {
    return (
        <View style={styles.container}>
            {error ? <Image style={styles.icon} source={Images.CloudOff} /> : <ActivityIndicator size="large" />}
            <Text style={styles.message}>{error ?? 'Loading...'}</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        backgroundColor: 'white',
        flexDirection: 'column',
        flexGrow: 1,
        justifyContent: 'center',
    },
    icon: {
        aspectRatio: 1,
        height: undefined,
        width: 40,
    },
    message: {
        paddingTop: 16,
    },
});

export default LoadingErrorOverlay;
