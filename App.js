import { Text, TextInput, TouchableHighlight, View } from 'react-native';
import { Styles } from './Style/Style';
import { useState } from 'react';

export default App = () => {

    const [toDo, setToDo] = useState("")
    const [toDos, setToDos] = useState([])
    const [error, showError] = useState("")

    const handleSubmit = () => {
        if(toDo.trim() === ""){
          alert("Enter a valid item")
        }
        setToDos([...toDos,{item:toDo,id:new Date().getTime()}])
    }

    return (
        <View style={Styles.container}> 
            <TextInput style={Styles.toDoInput} placeholder='Enter title...' onChange={(e)=>setToDo(e.nativeEvent.text)} placeholderTextColor="gray" value={toDo}></TextInput>
            <TouchableHighlight style={Styles.addItem} underlayColor="#fff" onPress={handleSubmit}>
                <Text style={Styles.addItemText}>Add Item</Text>
            </TouchableHighlight>

            {
                toDos.sort((a,b)=>b.id - a.id).map(item => {
                    return (
                        <Text style={Styles.listItem} key={item.id}>{item.item}</Text>
                    )
                })
            }

        </View>
    )
}