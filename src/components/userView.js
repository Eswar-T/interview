import React,{ useState,useEffect } from "react";
import { View,Text,StyleSheet } from 'react-native'
import { Icon } from 'native-base';

const UserView = (props) => {

    const [ dataSource,setdataSource ] = useState ('')

    useEffect (() => {
        const { params } = props.navigation.state;
        const Userid = params.userId
        console.log(params.userId,"i");

        fetch(`https://jsonplaceholder.typicode.com/users?id=${Userid}`)
        .then((response) => response.json())
        .then((responseJson) => {  
                                  console.log("userDetails", responseJson)                                                     
                                  for(let[key,value] of Object.entries(responseJson)){
                                      setdataSource(value) ;
                                      console.log(dataSource,"value")
                                    } 
                                })
        .catch((error) => console.log("error",error)) 
        })

        return(
           <View style={{ justifyContent:'center',alignItems:'center' }}>
                <Text style={{ fontSize:30,fontStyle:'italic',fontWeight:'bold',marginTop:10 }}>User Details</Text>   
                <View style={styles.textStyle}>
                   <Icon type="FontAwesome" name="envelope" style={{fontSize: 20, color: 'white'}}/>   
                   <Text style={styles.textsize}>{dataSource.email}</Text>
                </View>
                <View style={styles.textStyle}>
                   <Icon type="FontAwesome" name="user" style={{fontSize: 20, color: 'white'}}/>
                   <Text style={styles.textsize}>{dataSource.name}</Text>
                </View>
                <View style={styles.textStyle}>
                   <Text style={styles.textsize}>Website :</Text> 
                   <Text style={styles.textsize}>{dataSource.website}</Text>
                </View>
         </View>
        )
    }


export default UserView

const styles = StyleSheet.create({
    textStyle:{
        flexDirection:'row',
        marginTop:'10%',
        height:50,
        width:'90%',
        backgroundColor:'#87CEEB',
        borderRadius:10,
        paddingTop:10,
        justifyContent:'space-evenly'
    },
    textsize:{
        fontSize:18,
        fontWeight:'bold'
    }
})