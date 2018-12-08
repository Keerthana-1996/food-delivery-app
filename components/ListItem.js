import React from 'react';
import { Text, View ,Image } from 'react-native';



export default class ListItem extends React.Component {
  render() {
    return (
      <View style={{flex:1,elevation:5,backgroundColor:'white',borderRadius:10,paddingBottom:10,marginBottom:10}}>
          <View style={{flex:1,flexDirection:'row',paddingTop:20,paddingLeft:10}}>
              <View style={{flex:2}}>
                <Image style={{width:60, height:80}} source={{uri:this.props.imageUrl}}/>
              </View>
              <View style={{flex:8,paddingLeft:5}}>
                <Text style={{fontSize:20,fontWeight:'bold'}}>{this.props.title}</Text>
                <Text style={{fontSize:15,fontWeight:'bold',color:'gray'}}>{this.props.time}</Text>
              </View>
            </View>

            <View style={{flex:6,paddingLeft:10}}>
              <Text style={{fontSize:15}}>{this.props.status}</Text>
              <Text style={{textAlign:'left',color:'#14B0F0',textDecorationLine: 'underline',paddingBottom:5}}>{this.props.link}</Text>
            </View> 
            <View> 
              <Image style={{width:'100%', height:120}} source={{uri:this.props.picture}}/>
            </View>
      </View>
    );
  }
}