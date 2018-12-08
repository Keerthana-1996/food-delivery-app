
import React from 'react';
import {Text,View,FlatList,Image,ScrollView,TouchableOpacity,TextInput} from 'react-native';
import ListItem from './ListItem';


export default  class List extends React.Component {
  constructor(props){

    super(props);
    this.state ={loading:true,currentLocation:{}}
    this.getCurrentLocation=this.getCurrentLocation.bind(this)
    this.fetch=this.fetch.bind(this)

  }

  getCurrentLocation()
  {

  	  this.watchID = navigator.geolocation.watchPosition((position) => {
      // Create the object to update this.state.mapRegion through the onRegionChange function
      let region = {
        latitude:       position.coords.latitude,
        longitude:      position.coords.longitude
      }
      console.log("region",region)
      this.setState({currentLocation:region},()=>this.fetch())
    }, (error)=>console.log(error));
  }


  fetch()
  {
  	 fetch('https://developers.zomato.com/api/v2.1/geocode?lat='+{this.state.latitude}+'&lon='+{this.state.latitude},{headers: {
    'user-key': '8e989760d4b1a6e056306a5742dabada',
    'Content-Type': 'application/json'
    }})
      .then((response) => response.json())   
      .then((responseJson) => {
        console.log(responseJson.nearby_restaurants)
        this.setState({
          loading:false,
          dataSource: responseJson.nearby_restaurants
        });

    })

  }
  componentDidMount()
  {
    this.getCurrentLocation();
  }
  
    render() {
      return (
      <View style={{flex:1,backgroundColor:'#E2E0E0'}}> 
        <View style={{flex:9,backgroundColor:'#E2E0E0',paddingLeft:10,paddingRight:10}}>
            <FlatList
             data={this.state.dataSource}
           
             renderItem={({item}) => <ListItem title={item.restaurant.name}
                                           imageUrl={item.restaurant.thumb}
                                            status={item.restaurant.cuisines}
                                            picture={item.restaurant.featured_image}
                                            time={item.restaurant.cuisines}
                                            link={item.restaurant.deeplink}
             />}
             
              />
        </View>
      </View>
    );
  }
}