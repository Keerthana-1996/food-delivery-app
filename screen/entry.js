import React from 'react';
import { Text, View, TouchableOpacity } from 'react-native';


export default class Entry extends React.Component {
  render() {
    return (
      <View style={{flex:1,backgroundColor:'#cb202d',alignItems:'center',justifyContent:'center',elevation:15}}>
        <Text style={{fontSize:50,color:'white'}}>Zomato</Text>
            <TouchableOpacity style={{borderRadius:20,margin:25,height:50,width:200,borderWidth:2,backgroundColor:'white',borderColor:'white',alignItems:'center',justifyContent:'center'}}
		            onPress={()=>{this.props.navigation.navigate("Home")}}>
                <Text style={{fontSize:20,color:'red'}}>LOGIN</Text>
            </TouchableOpacity>
              <TouchableOpacity style={{borderRadius:20,margin:5,height:50,width:200,borderWidth:2,backgroundColor:'white',borderColor:'white',alignItems:'center',justifyContent:'center'}}
		            onPress={()=>{this.props.navigation.navigate("SignUp")}}>
                   <Text style={{fontSize:20,color:'red'}}>REGISTER</Text>
              </TouchableOpacity>   
      </View>
    );
  }
}