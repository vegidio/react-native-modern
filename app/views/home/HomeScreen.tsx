import React, { FunctionComponent } from 'react';
import { FlatList, Pressable, SafeAreaView, StyleSheet, View } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { Separator } from '../../components';
import HomeMenuRow from './HomeMenuRow';
import HomeSourceSelector from './HomeSourceSelector';

type MenuOption = {
    key: string;
    title: string;
};

const HomeScreen: FunctionComponent = () => {
    const navigation = useNavigation<StackNavigationProp<any>>();

    const menuOptions: MenuOption[] = [
        { key: '1', title: 'Users' },
        { key: '2', title: 'Posts' },
    ];

    const onListPress = (item: MenuOption) => navigation.push(item.title, { username: 'vegidio' });

    return (
        <SafeAreaView style={styles.safearea}>
            <View style={styles.container}>
                <FlatList<MenuOption>
                    data={menuOptions}
                    ItemSeparatorComponent={() => <Separator />}
                    renderItem={(item) => (
                        <Pressable key={item.item.key} onPress={() => onListPress(item.item)}>
                            <HomeMenuRow title={item.item.title} />
                        </Pressable>
                    )}
                />

                <HomeSourceSelector />
            </View>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    safearea: {
        flex: 1,
    },
    container: {
        flex: 1,
        paddingHorizontal: 16,
    },
});

export default HomeScreen;
