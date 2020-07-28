import React,{ Component } from 'react';
import {
  
  View,
  Text,
  FlatList,
  Modal,
  TouchableOpacity, TextInput
} from 'react-native';
import { api } from '../network/utility'


class PostsList extends Component  {
  constructor(props){
    super(props);
    this.state={
        text:'',
         dataSource:[]
    }
     this.arrayholder = [];
   this.successfunction = this.successfunction.bind(this);
  }

  


  componentDidMount(){
    

    api(this.successfunction,this.errorfunction);

     
   
  }

  successfunction(response){
    this.setState({ dataSource : response},
      function() {
        this.arrayholder = response;
      })

     // console.log(this.state.dataSource,"respone"),
   }

  renderBody = ( content ) => {   
     this.setState({ content : content },()=> this.props.navigation.navigate("PostView",{ contentData : this.state.content }));
  }

  renderId = ( id ) => {
    console.log(id,"id")
    this.setState({ id : id },()=> this.props.navigation.navigate("UserView",{ userId : this.state.id }));
 }

 SearchFilterFunction(text) {
  //passing the inserted text in textinput
  const newData = this.arrayholder.filter(function(item) {
    //applying filter for the inserted text in search bar
    const itemData = item.title ? item.title.toUpperCase() : ''.toUpperCase();
    const textData = text.toUpperCase();
    return itemData.indexOf(textData) > -1;
  });
  this.setState({
    //setting the filtered newData on datasource
    //After setting the data it will automatically re-render the view
    dataSource: newData,
    text: text,
  });
}
 

  render(){     
    return ( 

            <View style={{ flex:1, backgroundColor:'white',justifyContent:'center',alignItems:'center' }}>
              <Text  style={{ fontSize:30,fontStyle:'italic',fontWeight:'bold',marginTop:10 }}>Post Lists</Text>
              <TextInput style={{ height:40,width:'80%',borderColor:'black',borderWidth:1,marginTop:10,borderRadius:6,paddingLeft:16 }}
                         onChangeText={text => this.SearchFilterFunction(text)}
                         value={this.state.text}
                         underlineColorAndroid="transparent"
                         placeholder="Search Here"/>

                <FlatList data={this.state.dataSource}
                          showsVerticalScrollIndicator={false}
                          renderItem = {({item}) => 
                                            <View style={{ height:'auto',width:'94%', marginTop:16,backgroundColor:'#87CEEB',borderRadius:6,marginLeft:10,marginRight:10 }}>
                                                <TouchableOpacity onPress={()=>this.renderId(item.userId)}>
                                                            <Text style={{ fontSize:16,fontWeight:'bold',paddingLeft:12,paddingTop:6,textAlign:'center' }}>{item.id}</Text> 
                                                </TouchableOpacity>
                                                <TouchableOpacity onPress={()=>this.renderBody(item)}>
                                                            <Text style={{ fontSize:14, marginTop:10,padding:4,textAlign:'center' }}>{item.title}</Text>
                                                </TouchableOpacity>
                                            </View> } 
                          keyExtractor={(item, index)=> index.toString()}/>
            </View> 
         );
  }
};

export default PostsList;
