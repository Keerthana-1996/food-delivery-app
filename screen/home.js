import React from 'react';
import {Text,View,FlatList,Image,ScrollView,TouchableOpacity,TextInput} from 'react-native';
import List from './../components/listView'



export default class Home extends React.Component {
  render() {
    return (
    <View style={{flex:1,backgroundColor:'#E2E0E0'}}>
      <View style={{position:'absolute',bottom:10,right:10,height:50,width:50,borderRadius:25,backgroundColor:'#cb202d',zIndex:10,justifyContent:'center',alignItems:'center'}}>
         <Text style={{fontSize:40,color:'white'}}>+</Text>
       </View>
   <ScrollView>
        <View style={{flexDirection:'row',backgroundColor:'white',height:50,width:'100%'}}>
             <View style={{flex:7,justifyContent:'space-between'}}>
                <TouchableOpacity style={{padding:10}} onPress={()=>{}}>
                    <Image source={require('./../assets/menu.png')} style={{height:20,width:20,padding:10,flex:7}}/> 
                </TouchableOpacity>
              </View>
          <View style={{flex:2,flexDirection:'row'}}>
                  <TouchableOpacity style={{padding:10}}>
                      <Image source={require('./../assets/bookmark.png')} style={{height:20,width:20,padding:10}}/> 
                  </TouchableOpacity>
                  <TouchableOpacity style={{padding:10}}>
                      <Image source={require('./../assets/bell.png')} style={{height:20,width:20,padding:10}}/> 
                 </TouchableOpacity>
           </View>
        </View>
        <List/>
       </ScrollView>
       </View>
       );
   }
}
  
  