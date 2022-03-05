import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { LogBox } from "react-native";
import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";

import AuthenticateUser from "../Screens/Main/AuthenticateUser";
import Feed from "../Screens/Main/Feed";
import Node from "../Screens/Main/Node";
import Profile from "../Screens/Main/Profile"
import ExampleServer from "../Screens/Servers/ExampleServer"
import Wallet from "../Screens/Modals/Wallet"

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
      <Tab.Screen component={Feed} name="Feed"
        options={{
          tabBarIcon: ({ color, focused }) => {
            return <FontAwesomeIcon icon={faCircle} color={color} size={20} />;
          },
        }}
      />
      <Tab.Screen
        component={Node}
        name="Node"
        options={{
          tabBarIcon: ({ color }) => (
            <FontAwesomeIcon icon={faCircle} color={color} size={20} />
          ),
        }}
      />
      <Tab.Screen
        component={Profile}
        name="Profile"
        options={{
          tabBarIcon: ({ color, focused }) => {
            return <FontAwesomeIcon icon={faCircle} color={color} size={20} />;
          },
        }}
      />
    </Tab.Navigator>
  );
}

const Stack = createStackNavigator();

function Navigation(): JSX.Element {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Root">
        <Stack.Screen component={AuthenticateUser} name="AuthenticateUser" options={{ headerShown: false }} />
        <Stack.Group>
          <Stack.Screen component={Root} name="Root" options={{ headerShown: false }} />
          <Stack.Screen component={ExampleServer} name="ExampleServer" options={{ headerShown: false }} />
        </Stack.Group>
        <Stack.Screen component={Wallet} name="Wallet" options={{ headerShown: false }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default Navigation;