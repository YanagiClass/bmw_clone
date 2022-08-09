import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import React from "react";
import { Image, StyleSheet } from "react-native";
import All_models from "../screens/All_models";
import Dealer from "../screens/Dealer";
import Main from "../screens/Main";
import Setting from "../screens/Setting";
import Visualizer from "../screens/Visualizer";
import { Ionicons } from "@expo/vector-icons";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
const Tab = createBottomTabNavigator();

export default function Tabs() {
  return (
    <Tab.Navigator
      initialRouteName="Main"
      screenOptions={{
        headerTitleAlign: "center",
        tabBarShowLabel: false,

        tabBarStyle: {
          position: "absolute",
          bottom: 25,
          left: 20,
          right: 20,
          elevation: 0,
          borderRadius: 15,
          height: 90,
          ...style.shadow,
        },
      }}
    >
      <Tab.Screen
        name="All_models"
        component={All_models}
        options={{
          tabBarIcon({ focused, color, size }) {
            return (
              <MaterialCommunityIcons
                name="car-convertible"
                size={24}
                color="black"
              />
            );
          },
        }}
      />
      <Tab.Screen
        name="Visualizer"
        component={Visualizer}
        options={{
          headerTitle: "Visualizer",
          tabBarIcon({ focused, color, size }) {
            return (
              <MaterialCommunityIcons name="car-cog" size={24} color="black" />
            );
          },
        }}
      />
      <Tab.Screen
        name="Main"
        component={Main}
        options={{
          headerTitle: "Products",
          tabBarIcon({ focused, color, size }) {
            return (
              <Image
                style={{ width: 50, height: 50 }}
                source={{
                  uri: "https://images.all-free-download.com/images/graphiclarge/bmw_logo_28104.jpg",
                }}
              />
            );
          },
        }}
      />
      <Tab.Screen
        name="Dealer"
        component={Dealer}
        options={{
          tabBarIcon({ focused, color, size }) {
            return (
              <MaterialCommunityIcons
                name="map-marker-radius"
                size={24}
                color="black"
              />
            );
          },
        }}
      />
      <Tab.Screen
        name="Setting"
        component={Setting}
        options={{
          tabBarIcon({ focused, color, size }) {
            return (
              <Ionicons name="ios-settings-outline" size={24} color="black" />
            );
          },
        }}
      />
    </Tab.Navigator>
  );
}

const style = StyleSheet.create({
  shadow: {
    shadowColor: "#7F5DF0",
    shadowOffset: {
      width: 0,
      height: 10,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.5,
    elevation: 5,
  },
});
