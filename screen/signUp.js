import React from 'react';
import {View, Text, TextInput, style, TouchableOpacity,Image } from 'react-native';


export default class List extends React.Component {
 constructor(props)
  {
    super(props);
    this.state={username:"",password:"",email:""}
  }

render() {
    return (
      <View style={{flex:1,backgroundColor:'#cb202d'}}>
       <TouchableOpacity style={{padding:10}} onPress={()=>{this.props.navigation.goBack()}}>
         <Image source={require('./../assets/left.png')} style={{height:30,width:30}}/> 
       </TouchableOpacity>
       <View style={{alignItems:'center'}}>
         <Text style={{fontSize:50,color:'white'}}>Zomato</Text>
        </View>
          <View style={{padding:10,margin:10}}>
            <TextInput style={{fontSize:20,borderRadius:10,backgroundColor:'white',height:50,padding:10}}
             value={this.state.username}
              placeholder="Username"
              placeholderTextColor="black"
             underlineColorAndroid = "transparent"
             onChangeText ={(text)=>{this.setState({username:text})}}
                 />
          </View>
           <View style={{padding:10,margin:10}}>
             <TextInput style={{fontSize:20,borderRadius:10,backgroundColor:'white',height:50,padding:10}}
              value={this.state.email}
              placeholder="Email"
              placeholderTextColor="black"
             underlineColorAndroid = "transparent"
             onChangeText ={(text)=>{this.setState({email:text})}}
                 />
          </View>
           <View style={{padding:10,margin:10}}>
              <TextInput style={{fontSize:20,borderRadius:10,backgroundColor:'white',height:50,padding:10}}
               value={this.state.password}
               underlineColorAndroid = "transparent"
               placeholderTextColor="black"
               placeholder = "Password"
               secureTextEntry={true}
               onChangeText ={(text)=>{this.setState({password:text})}}
              />
           </View>          
         
              <TouchableOpacity style={{borderRadius:10,margin:25,height:50,borderWidth:2,backgroundColor:'white',borderColor:'white',alignItems:'center',justifyContent:'center'}}
		            onPress={()=>{this.props.navigation.navigate("Home")}}>
                     <Text style={{fontSize:20,color:'red'}}>LOGIN</Text>
              </TouchableOpacity>
  </View>
);
}
}


