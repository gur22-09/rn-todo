import React from 'react';
import {StyleSheet, Text, View, TextInput, Button} from 'react-native';

export default function App() {
    return (
        <View style={styles.screen}>
            <View style={styles.inputContainer}>
                <TextInput style={styles.inputContainer} placeholder='Your Todos'/>
                <Button title='ADD'/>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    screen: {
        padding: 50
    },
    inputContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    input: {
        borderBottomColor: 'black',
        borderBottomWidth: 1,
        width: '80%'
    }
});
