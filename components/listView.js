import React from 'react';
import {Text,View,FlatList,Image,ScrollView,TouchableOpacity,TextInput} from 'react-native';
import ListItem from './ListItem';
import { Constants, Location, Permissions } from 'expo';


export default  class List extends React.Component {
  constructor(props){

    super(props);
    this.state ={loading:true,currentLocation:{},errorMessage:null,location:""}
    this._getLocationAsync=this._getLocationAsync.bind(this)
    this.fetch=this.fetch.bind(this)

  }

 _getLocationAsync = async () => {
    let { status } = await Permissions.askAsync(Permissions.LOCATION);
    if (status !== 'granted') {
      this.setState({
        errorMessage: 'Permission to access location was denied',
      });
    }

    let location = await Location.getCurrentPositionAsync({});
    console.log("Location",location)
    this.setState({ currentLocation:{latitude:location.coords.latitude,longitude:location.coords.longitude}},()=>{this.fetch()});
  };



  fetch()
  {
     fetch('https://developers.zomato.com/api/v2.1/geocode?lat='+this.state.currentLocation.latitude+'&lon='+this.state.currentLocation.longitude,{headers: {
    'user-key': '8e989760d4b1a6e056306a5742dabada',
    'Content-Type': 'application/json'
    }})
      .then((response) => response.json())   
      .then((responseJson) => {
        console.log(responseJson)
        this.setState({
          loading:false,
          dataSource: responseJson.nearby_restaurants,
          location:responseJson.location.title+","+responseJson.location.city_name
        });

    })

  }
  componentDidMount()
  {
    //this.getCurrentLocation();
    this._getLocationAsync();

  }
  
    render() {
      return (
        <View style={{flex:1}}>
          <View style={{width:'100%',backgroundColor:'white',height:50,flex:2}}>
             <Text style={{fontSize:10,color:'silver',padding:5}}>YOUR LOCATION</Text>
               <View style={{flexDirection:'row',flex:2,justifyContent:'space-between',backgroundColor:'white'}}>
                  <Text style={{fontSize:15,height:30,width:250,padding:5}}>{this.state.location}</Text>   
                   <TouchableOpacity style={{padding:10}}>  
                    <Text style={{fontSize:10,color:'green',paddingBottom:5,fontWeight:'bold'}}>CHANGE</Text>
                  </TouchableOpacity>
              </View>
          </View>
            <View style={{padding:10,backgroundColor:'white'}}>     
              <TouchableOpacity style={{flexDirection:'row',justifyContent:'center',padding:10,alignItems:'center',backgroundColor:'#E2E0E0',height:30,width:340,borderRadius:10}}>
                 <Image source={require('./../assets/search.png')} style={{height:15,width:15,padding:5}}/> 
                    <TextInput style={{fontSize:15,height:50,width:250,paddingBottom:5,paddingLeft:5}}
                     placeholder="Search for restaurants or dishes"
                     placeholderTextColor="black"
                     underlineColorAndroid = "transparent"
                       />
            </TouchableOpacity>
           </View>
           
      <View style={{flex:1,backgroundColor:'#E2E0E0'}}> 
        <View style={{flex:9,backgroundColor:'#E2E0E0',paddingLeft:10,paddingRight:10}}>
         <View style={{backgroundColor:'white',padding:10,height:100,width:320,margin:10,borderRadius:5}}>
                 <Text style={{fontWeight:'bold',fontSize:20}}>Order For Delivery</Text>
                 <Text style={{color:'#1b67e2',fontSize:15}}>Use code FIRST50 and get 50% OFF upto 150/- on your first order</Text>
         </View>

            <FlatList
             data={this.state.dataSource}
           
             renderItem={({item}) => <ListItem title={item.restaurant.name}
                                           imageUrl={item.restaurant.thumb}
                                            status={item.restaurant.cuisines}
                                            picture={item.restaurant.featured_image}
                                            time={item.restaurant.cuisines}
                                            link={item.restaurant.deeplink}
             />}/>
        </View>
      </View>
      </View>
    );
  }
}