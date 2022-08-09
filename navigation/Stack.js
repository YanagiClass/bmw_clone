import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from "react";
import All_models from "../screens/All_models";
import Dealer from "../screens/Dealer";
import Main from "../screens/Main";
import Setting from "../screens/Setting";
import Visualizer from "../screens/Visualizer";

const NativeStack = createNativeStackNavigator();

export default function Stack() {
  return (
    <NativeStack.Navigator>
      <NativeStack.Screen name="All_models" component={All_models} />
      <NativeStack.Screen name="Visualizer" component={Visualizer} />
      <NativeStack.Screen name="Main" component={Main} />
      <NativeStack.Screen name="Dealer" component={Dealer} />
      <NativeStack.Screen name="Setting" component={Setting} />
    </NativeStack.Navigator>
  );
}
