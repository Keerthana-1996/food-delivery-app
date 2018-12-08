import React from 'react';
import { Text, View, TouchableOpacity } from 'react-native';
import SignUp from './screen/signUp';
import {createStackNavigator} from 'react-navigation';
import Home from './screen/home';
import Entry from './screen/entry';


const Root = createStackNavigator(
                    {
                    SignUp:{screen:SignUp},
                    Home:{screen:Home},
                    Entry:{screen:Entry},
                    },
                    {
                      headerMode: 'none',
                      initialRouteName: 'Entry',

                    })



export default Root;
