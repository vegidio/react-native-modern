import React, { Component } from 'react';
import { FlatList, StyleSheet, TouchableHighlight, View } from 'react-native';
import HomeMenuRow from './HomeMenuRow';

type MenuOption = {
    key: string;
    title: string;
};

class HomeScreen extends Component {
    private menuOptions: MenuOption[] = [
        { key: '1', title: 'User' },
        { key: '2', title: 'Repositories' },
    ];

    private onListPress(item: MenuOption) {
        console.log(item.title);
    }

    render() {
        return (
            <FlatList<MenuOption>
                style={styles.container}
                ItemSeparatorComponent={() => <View style={styles.separator} />}
                data={this.menuOptions}
                renderItem={(item) => (
                    <TouchableHighlight key={item.item.key} onPress={() => this.onListPress(item.item)}>
                        <HomeMenuRow title={item.item.title} />
                    </TouchableHighlight>
                )}
            />
        );
    }
}

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
