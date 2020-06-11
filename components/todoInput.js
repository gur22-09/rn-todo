import React,{useState} from 'react';
import {View,TextInput,Button,StyleSheet} from 'react-native';



const styles  = StyleSheet.create({
    inputContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    input: {
       
        borderBottomWidth: 1,
        width: '80%'
    }
});

const TodoInput = ({onPress})=>{
    const [todo,setTodo] = useState('');

    const handleChangeText = (newTodo)=>{
        setTodo(newTodo)  
    };

    return (
        <View style={styles.inputContainer}>
                <TextInput 
                 style={styles.input} 
                 placeholder='Your Todos'
                 value={todo}
                 onChangeText={handleChangeText}
                 />
                <Button 
                 title='ADD'
                 onPress={onPress.bind(this,todo)}
                />
        </View>
    )
} 



export default TodoInput;