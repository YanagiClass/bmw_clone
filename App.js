import { NavigationContainer } from "@react-navigation/native";
import React from "react";
import Root from "./navigation/Root";
import Tabs from "./navigation/Tabs";

export default function App() {
  return (
    <NavigationContainer>
      <Root />
    </NavigationContainer>
  );
}
