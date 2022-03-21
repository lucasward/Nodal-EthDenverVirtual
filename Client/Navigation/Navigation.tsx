import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { LogBox } from "react-native";
import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";

import AuthenticateUser from "../Screens/Main/AuthenticateUser";
import Feed from "../Screens/Main/Feed";
import Node from "../Screens/Main/Node";
import Profile from "../Screens/Main/Profile"
import Wallet from "../Screens/Modals/Wallet"

import ServerDetail from "../Screens/Detail/ServerDetail"
import ModuleDetail from "../Screens/Detail/ModuleDetail"

import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { faCircle } from "@fortawesome/free-solid-svg-icons";

LogBox.ignoreAllLogs();

const Tab = createMaterialBottomTabNavigator();

function Root(): JSX.Element {
  return (
    <Tab.Navigator
      initialRouteName="Node"
      shifting={false}
      activeColor="#315399"
      inactiveColor="#EEEEEE"
      labeled={false}
      >
      <Tab.Screen
        component={Node}
        name="Node"
        options={{
          tabBarIcon: ({ color }) => (
            <FontAwesomeIcon icon={faCircle} color={color} size={20} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}

const Stack = createStackNavigator();

function Navigation(): JSX.Element {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="AuthenticateUser">
        <Stack.Screen component={AuthenticateUser} name="AuthenticateUser" options={{ headerShown: false }} />
        <Stack.Group>
          <Stack.Screen component={Root} name="Root" options={{ headerShown: false }} />
          <Stack.Screen component={ServerDetail} name="ServerDetail" options={{ headerShown: false }} />
          <Stack.Screen component={ModuleDetail} name="ModuleDetail" options={{ headerShown: false }} />
        </Stack.Group>
        <Stack.Screen component={Wallet} name="Wallet" options={{ headerShown: false }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default Navigation;