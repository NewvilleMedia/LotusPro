import { View, Text } from "react-native";
import React from "react";
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import BottomTabNavigator from "./BottomTabNavigator";
import ProductDetails from "../screens/Home/ProductDetails";

const Stack = createNativeStackNavigator();

const RootNavigator = () => {
  return (
    <Stack.Navigator>
    <Stack.Screen
      name="Main"
      component={BottomTabNavigator}
      options={{
        headerShown: false,
        headerBackTitle: ' ',
      }}
    />
    <Stack.Screen
      name="ProductDetails"
      component={ProductDetails}
      options={{
        headerShown: false,
        headerBackTitle: ' ',
      }}
    />
  </Stack.Navigator>
  );
};

export default RootNavigator;
