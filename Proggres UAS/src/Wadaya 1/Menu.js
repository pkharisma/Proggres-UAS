import React from 'react';
import { createStackNavigator, createAppContainer } from 'react-navigation';
import MainScreen from './Main';
import Post from './Post';
import Wadaya from './List';
import DetailWadaya from './DetailList';


const AppNavigator = createStackNavigator(
        {
            Utama: MainScreen,
            Post:Post,
            Wadaya:Wadaya,
            DetailWadaya:DetailWadaya,
        },
        {
            initialRouteName: "Utama"
        }
        );
export default createAppContainer(AppNavigator);