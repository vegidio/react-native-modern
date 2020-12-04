import React, { FunctionComponent, useContext } from 'react';
import { StyleSheet, Switch, Text, View } from 'react-native';
import { observer } from 'mobx-react-lite';
import { StoreContext } from '../../stores';

export const HomeSourceSelector: FunctionComponent = observer(() => {
    const { appStore } = useContext(StoreContext);

    return (
        <View style={styles.container}>
            <Switch
                trackColor={{ true: 'red', false: 'blue' }}
                ios_backgroundColor="blue"
                onValueChange={() => appStore?.toggleDataSource()}
                value={appStore?.isRest}
            />
            <Text style={styles.text}>{!appStore?.isRest ? 'REST' : 'GraphQL'}</Text>
        </View>
    );
});

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        flexDirection: 'row',
        height: 40,
        justifyContent: 'center',
    },
    text: {
        marginLeft: 16,
        width: 64,
    },
});

export default HomeSourceSelector;
