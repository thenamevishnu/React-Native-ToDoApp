import { StyleSheet } from "react-native";

export const Styles = StyleSheet.create({
    container:{
        flex:1,
        alignItems:"center",
        backgroundColor:"#1b1f24"
    },
    toDoInput:{
        fontFamily:"serif",
        marginTop:100,
        width:350,
        borderWidth:2,
        borderColor:"black",
        padding:8,
        borderColor:"#555",
        borderRadius:15,
        color:"#fff"
    },
    addItemText:{ 
        fontFamily:"serif",
        color:"#ffffff"
    },
    addItem:{
        backgroundColor:"#635985",
        paddingHorizontal:40,
        paddingVertical:8,
        marginTop:10,
        borderRadius:12,
        shadowColor:"black",
        shadowOpacity:1,
        shadowOffset:{
            width:2,
            height:2
        },
        shadowRadius:5,
        elevation:4,
        marginBottom:10
    },
    listItem:{
        borderRadius:15,
        color:"#fff",
        padding:15,
        marginVertical:5,
        width:350,
        backgroundColor:"#F15A59",
        color:"white"
    },
    listItem2:{
        borderRadius:15,
        color:"#fff",
        padding:15,
        marginVertical:5,
        width:350,
        backgroundColor:"#4E9F3D",
        color:"white",
    },
    errorText:{
        marginTop:3,
        color:"#F15A59",
        fontFamily:"monospace"
    },
    listView:{
        marginTop:30
    },
    // checkboxNotChecked:{
    //     width: 20,
    //     height: 20,
    //     borderWidth: 1,
    //     borderRadius:5,
    //     borderColor: 'white'
    // },
    // checkboxChecked:{
    //     width: 20,
    //     height: 20,
    //     borderWidth: 1,
    //     borderRadius:5,
    //     borderColor: 'white',
    //     backgroundColor:"#4E9F3D",
    //     flex:1,
    //     alignItems:"center",
    //     color:"white"
    // },
    itemName:{
       marginLeft:10,
       maxWidth:350
    },
    pendingTask:{
        fontSize:18,
        color:"#fff",
        marginTop:8
    },
    centerfy:{
        padding:10
    },
    closebtn:{
        position:"absolute",
        right:3,
        top:3,
        fontSize:20,
        color:"#fff"
    }
})