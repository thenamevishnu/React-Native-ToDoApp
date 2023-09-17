import { Text, TextInput, TouchableHighlight, View } from 'react-native';
import { Styles } from './Style/Style';
import { useState } from 'react';
import {FontAwesome} from "@expo/vector-icons"

export default App = () => {

    const [toDo, setToDo] = useState("")
    const [toDos, setToDos] = useState([])
    const [error, showError] = useState("")

    const handleSubmit = () => {
        if(toDo.trim() === ""){
            showError("Enter A Valid Task!")
            setTimeout(() => {
                showError("")
            }, 2000);
        }else{
            const findIndex = toDos.find(item => item.item.toLowerCase() === toDo.trim().toLowerCase())
            if(findIndex){
                showError("Task Already Exist!")
                setTimeout(() => {
                    showError("")
                }, 2000);
            }else{
                setToDos([...toDos,{item:toDo,createdAt:new Date().getTime(),updatedAt:"",checked:false}])
                setToDo("")
            }
        } 
    }

    const checkBox = (item) => {
        toDos.splice(toDos.indexOf(item),1)
        setToDos([...toDos, {...item,updatedAt:new Date().getTime(),checked:!item.checked}])
    }

    const removeData = (item) => {
        toDos.splice(toDos.indexOf(item),1)
        setToDos([...toDos])
    }

    return (
        <View style={Styles.container}> 
            <TextInput style={Styles.toDoInput} placeholder='Enter Task Name...' onChange={(e)=>setToDo(e.nativeEvent.text)} placeholderTextColor="gray" value={toDo}></TextInput>
           {error && <Text style={Styles.errorText}>{error}</Text>}
            <TouchableHighlight style={Styles.addItem} underlayColor="#fff" onPress={handleSubmit}>
                <Text style={Styles.addItemText}>Add Item</Text>
            </TouchableHighlight>
            {
                toDos.length===0 && 
                    <Text style={{marginHorizontal:20,color:"#F15A59"}}>Note: {"\n\n"}1. Click on the text, it will mark as completed or back to pending list!{"\n\n"}2. Click on the close icon, it will remove the task from the list</Text>
                
            }
            {toDos.filter(item=>item.checked===false).length !==0 && <Text style={Styles.pendingTask}>Pending Tasks ( {toDos.filter(item=>item.checked===false).length} )</Text>}
                {
                    toDos.sort((a,b)=>b.createdAt - a.createdAt).filter(items=>items.checked === false).map(item => {
                        return (
                            <View style={Styles.listItem} key={item.createdAt} >
                                <Text onPress={()=>checkBox(item)}>
                                    <Text style={{fontFamily:"serif",color:"white"}}>{item.item}{"\n"}{new Date(item.createdAt).toLocaleString("default",{day:"2-digit",month:"2-digit",year:"numeric",hour:"2-digit",minute:"2-digit",second:"2-digit",hour12:true})}</Text>
                                </Text>
                                <FontAwesome name='close' style={Styles.closebtn} onPress={()=>removeData(item)}></FontAwesome>
                            </View>
                        )
                    })
                }

                {toDos.filter(item=>item.checked===true).length !==0 && <Text style={Styles.pendingTask}>Completed Tasks ( {toDos.filter(item=>item.checked===true).length} )</Text>}
                {
                    toDos.sort((a,b)=>b.createdAt - a.createdAt).filter(items=>items.checked === true).map(item => {
                        return (
                          <View style={Styles.listItem2} key={item.createdAt} >
                              <Text onPress={()=>checkBox(item)}>
                                  <Text style={{fontFamily:"serif", color:"white"}}>{item.item}{"\n"}{new Date(item.updatedAt).toLocaleString("default",{day:"2-digit",month:"2-digit",year:"numeric",hour:"2-digit",minute:"2-digit",second:"2-digit",hour12:true})}</Text>
                              </Text>
                          </View>
                        )
                    })
                }

        </View>
    )
}