import React, { FunctionComponent } from 'react';
import { FlatList, Pressable, StyleSheet, View } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import HomeMenuRow from './HomeMenuRow';

type MenuOption = {
    key: string;
    title: string;
};

const HomeScreen: FunctionComponent = () => {
    const navigation = useNavigation();

    const menuOptions: MenuOption[] = [
        { key: '1', title: 'User' },
        { key: '2', title: 'Repositories' },
    ];

    const onListPress = (item: MenuOption) => navigation.navigate(item.title);

    return (
        <FlatList<MenuOption>
            style={styles.container}
            data={menuOptions}
            ItemSeparatorComponent={() => <View style={styles.separator} />}
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
    separator: {
        backgroundColor: 'lightgray',
        height: 1,
        marginVertical: 2,
    },
});

export default HomeScreen;
