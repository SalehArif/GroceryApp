import React from 'react'
import { createStackNavigator } from '@react-navigation/stack';

import Home from '../Home';
import Products from '../Products';
import Cart from '../Cart';
import ProductDetails from '../ProductDetails';
const Stack = createStackNavigator();

const ProductStack = ( ) => {
  return (
    <Stack.Navigator
        initialRouteName={"Products"}
        screenOptions={{headerShown:false}}
    >
        <Stack.Screen name="Products" component={Products} />
        <Stack.Screen name="ProductDetails" component={ProductDetails} />
        
    </Stack.Navigator>
  )
}

const HomeStack = () => {
  return (
    <Stack.Navigator
        initialRouteName={"Home"}
        screenOptions={{headerShown:false}}
    >
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="ProductDetails" component={ProductDetails} />
    </Stack.Navigator>
  )
}

const CartStack = () => {
  return (
    <Stack.Navigator
        initialRouteName={"Cart"}
        screenOptions={{headerShown:false}}
    >
        <Stack.Screen name="Cart" component={Cart} />
        <Stack.Screen name="ProductDetails" component={ProductDetails} />

    </Stack.Navigator>
  )
}

export { ProductStack, HomeStack, CartStack};
// export default ProductStack;