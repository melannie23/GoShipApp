import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import LogIn from "./scrn/LogIn";
import Home from "./scrn/Home";
import Dress from "./scrn/Dress";
import Buy from "./scrn/Buy";
import Products from "./scrn/Products";

const Stack = createNativeStackNavigator();

const MyStack = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="LogIn"
          component={LogIn}
          options={{
            headerShown: false
          }}
        />
        <Stack.Screen
          name="Home"
          component={Home}
          options={{
            headerShown: false
          }}
        />
        <Stack.Screen
          name="Dress"
          component={Dress}
          options={{
            headerShown: false
          }}
        />
        <Stack.Screen
          name="Buy"
          component={Buy}
          options={{
            headerShown: false
          }}
        />
        <Stack.Screen
          name="Products"
          component={Products}
          options={{
            headerShown: false
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default MyStack;
