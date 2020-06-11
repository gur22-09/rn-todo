import React from 'react';
import {FlatList,Text,View,StyleSheet} from 'react-native';



const styles = StyleSheet.create({
    items:{
        backgroundColor:'#ccc',
        padding:10,
        marginVertical:10,
        borderWidth:1,
        borderColor:'black'
    }
});

const TodoItems = ({todoList})=>(
    <FlatList
    renderItem={(itemData)=>
    <View style={styles.items}>
    <Text>
     {itemData.item.value}
    </Text>
    </View>}
    data={todoList}
   />
);


export default TodoItems;