import React,{ Component } from "react";
import { View,Text,StyleSheet } from 'react-native'

class PostView extends Component{
    render(){
         const { params } = this.props.navigation.state;
        return(
            <View style={{ flex:1,backgroundColor:'white' }}>
               <Text  style={{ fontSize:30,fontStyle:'italic',fontWeight:'bold',marginTop:10, textAlign:'center' }}>Post View</Text>
               <Text style={styles.textStyle}>Title</Text>
               <View style={styles.backgroundView}>
               <Text>{params.contentData.title}</Text>
               </View>
               <Text style={styles.textStyle}>Body</Text>
               <View style={styles.backgroundView}>
               <Text>{params.contentData.body}</Text>
               </View>
            </View>
        )
    }
}


export default PostView;


const styles = StyleSheet.create({

    backgroundView:{
        backgroundColor:'#87CEEB',
        width:'90%',
        alignSelf:'center',
        borderRadius:10,
        padding:10,
        marginTop:10
    },
    textStyle:{
        fontSize:16,
        fontWeight:'bold',
        marginTop:16,
        marginLeft:24
    }
})