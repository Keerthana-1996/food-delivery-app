import React from 'react';
import {Text,View,FlatList,Image,ScrollView,TouchableOpacity,TextInput} from 'react-native';
import List from './listView'



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
                    <Image source={require('./assets/menu.png')} style={{height:20,width:20,padding:10,flex:7}}/> 
                </TouchableOpacity>
              </View>
          <View style={{flex:2,flexDirection:'row'}}>
                  <TouchableOpacity style={{padding:10}}>
                      <Image source={require('./assets/bookmark.png')} style={{height:20,width:20,padding:10}}/> 
                  </TouchableOpacity>
                  <TouchableOpacity style={{padding:10}}>
                      <Image source={require('./assets/bell.png')} style={{height:20,width:20,padding:10}}/> 
                 </TouchableOpacity>
           </View>
        </View>
          <View style={{width:'100%',backgroundColor:'white',height:50,flex:2}}>
             <Text style={{fontSize:10,color:'silver',padding:5}}>YOUR LOCATION</Text>
             <View style={{flexDirection:'row',flex:2,justifyContent:'space-between',backgroundColor:'white'}}>
                  <TextInput style={{fontSize:15,height:30,width:250,padding:5}}
                     placeholder="Kochi,Kerala"
                     placeholderTextColor="black"
                     underlineColorAndroid = "transparent"
                       />   
                   <TouchableOpacity style={{padding:10}}>
                    <Text style={{fontSize:10,color:'green',paddingBottom:5,fontWeight:'bold'}}>CHANGE</Text>
                  </TouchableOpacity>
            </View>
          </View>
        <View style={{padding:10,backgroundColor:'white'}}>     
          <TouchableOpacity style={{flexDirection:'row',justifyContent:'center',padding:10,alignItems:'center',backgroundColor:'#E2E0E0',height:30,width:340,borderRadius:10}}>
                 <Image source={require('./assets/search.png')} style={{height:15,width:15,padding:5}}/> 
                    <TextInput style={{fontSize:15,height:50,width:250,paddingBottom:5,paddingLeft:5}}
                     placeholder="Search for restaurants or dishes"
                     placeholderTextColor="black"
                     underlineColorAndroid = "transparent"
                       />
            </TouchableOpacity>
         </View>
            <View style={{backgroundColor:'white',padding:10,height:100,width:340,margin:10,borderRadius:5}}>
                 <Text style={{fontWeight:'bold',fontSize:20}}>Order For Delivery</Text>
                 <Text style={{color:'#1b67e2',fontSize:15}}>Use code FIRST50 and get 50% OFF upto 150/- on your first order</Text>
            </View>
            <List/>
       </ScrollView>
       </View>
       );
   }
}
  
  