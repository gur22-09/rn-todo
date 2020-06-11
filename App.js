import React,{useState} from 'react';
import {StyleSheet, Text, View, TextInput, Button, ScrollView, FlatList} from 'react-native';

import TodoItems from './components/todoItems'; 
import TodoInput from './components/todoInput';

export default function App() {

   
    const[todoList,setTodoList] = useState([]);
    
    

  
   
    const handlePress = (todo)=>{
         setTodoList(prevState=>[...prevState,{value:todo,key:`${todo}${Math.random().toString()}`}]);
         
    }
    return (
        <View style={styles.screen}>
            <TodoInput
             onPress={handlePress}
            />
            <TodoItems
             todoList={todoList} 
            />
              
        </View>
    );
}

const styles = StyleSheet.create({
    screen: {
        padding: 50
    }
});
