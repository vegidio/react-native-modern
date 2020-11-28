import React, { FunctionComponent } from 'react';
import { FlatList, Pressable, StyleSheet, View } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import HomeMenuRow from './HomeMenuRow';
import { Separator } from '../../components';

type MenuOption = {
    key: string;
    title: string;
};

const HomeScreen: FunctionComponent = () => {
    const navigation = useNavigation<StackNavigationProp<any>>();

    const menuOptions: MenuOption[] = [
        { key: '1', title: 'User' },
        { key: '2', title: 'Repositories' },
    ];

    const onListPress = (item: MenuOption) => navigation.push(item.title, { username: 'vegidio' });

    return (
        <FlatList<MenuOption>
            style={styles.container}
            data={menuOptions}
            ItemSeparatorComponent={() => <Separator />}
            renderItem={(item) => (
                <Pressable key={item.item.key} onPress={() => onListPress(item.item)}>
                    <HomeMenuRow title={item.item.title} />
                </Pressable>
            )}
        />
    );
};

const styles = StyleSheet.create({
    container: {
        paddingHorizontal: 16,
    },
});

export default HomeScreen;
