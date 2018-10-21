import React, { Component } from "react";
import { StyleSheet, Text } from "react-native";
import { StackNavigator } from "react-navigation";
import Dashboard from "./js/components/dashboard";
import ExportQR from "./js/components/exportQR";

const RootStack = StackNavigator(
  {
    Dashboard: { screen: Dashboard },
    ExportQR: { screen: ExportQR }
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
