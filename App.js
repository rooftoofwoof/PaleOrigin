import React, { Component } from "react";
import { StyleSheet, Text } from "react-native";
import { StackNavigator } from "react-navigation";
import Dashboard from "./js/components/dashboard";

const RootStack = StackNavigator(
  {
    Dashboard: { screen: Dashboard }
  },
  {
    headerMode: "none"
  }
);

export default class App extends Component {
  render() {
    return <RootStack />;
  }
}
