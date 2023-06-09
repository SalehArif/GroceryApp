import { StyleSheet, Image } from 'react-native'
import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Entypo from 'react-native-vector-icons/Entypo';
import AntDesign from 'react-native-vector-icons/AntDesign';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

import Home from "../Home"
import Products from "../Products"
import Cart from "../Cart"
import Profile from "../Profile"
import { HomeStack, ProductStack, CartStack } from "./stack"

const Tab = createBottomTabNavigator();

// navigation.jumpTo('Profile', { owner: 'Michaś' });
const Tabs = () => {
  return (
    <Tab.Navigator
        initialRouteName='HomeStack'
        screenOptions={{
            tabBarShowLabel:false,
            tabBarStyle:[{position:"absolute", bottom:25, left:30, right:30, borderRadius:30, elevation:0, height:70 },styles.shadow],
            headerShown:false
        }}
    >
        <Tab.Screen name="HomeStack" component={HomeStack} options={{
            tabBarIcon:({focused, size}) => (
                <Entypo name='home' size={size} color={ focused ? "#FF844C":"#DADCE0"} />
            )
        }} />
        <Tab.Screen name="ProductStack" component={ProductStack} options={{
            tabBarIcon:({focused, size}) => (
                <Image source={require("../../assets/menu.png")} style={{ tintColor: focused ? "#FF844C":"#DADCE0", width:size, height:size}} />
            )
        }} />
        <Tab.Screen name="CartStack" component={CartStack} options={{
            tabBarIcon:({focused, size}) => (
                <MaterialIcons name='shopping-cart' size={size} color={ focused ? "#FF844C":"#DADCE0"} />
            )
        }}/>
        <Tab.Screen name="Profile" component={Profile} options={{
            tabBarIcon:({focused, size}) => (
                <AntDesign name='user' size={size} color={ focused ? "#FF844C":"#DADCE0"} />
            )
        }}/>
    </Tab.Navigator>
  )
}

export default Tabs

const styles = StyleSheet.create({
    shadow:{
        shadowColor:'#333',
        shadowOffset:{
            width:0,
            height:10
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.5,
        elevation: 4
    }
})