import React from "react";
import Navigation from "./Client/Navigation/Navigation"
import { Providers } from "./Client/Navigation/Providers"
import { StatusBar } from "react-native";

export default () => (
  <Providers>
    <Navigation />
    <StatusBar hidden />
  </Providers>
);
