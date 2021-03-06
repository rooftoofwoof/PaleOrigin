import React, { Component } from "react";
import { View, Text, ImageBackground, Button } from "react-native";

export default class ProductItem extends Component {
  render() {
    const { viewStyle, imgStyle, prodNameStyle } = styles;
    const { img_url, prodName } = this.props;

    return (
      <View style={viewStyle}>
        <ImageBackground style={imgStyle} source={{ uri: img_url }}>
          <Text style={prodNameStyle}>{prodName}</Text>
        </ImageBackground>
      </View>
    );
  }
}

const styles = {
  prodNameStyle: {
    fontSize: 44,
    fontWeight: "700",
    lineHeight: 44,
    color: "#fff"
  },
  imgStyle: {
    alignItems: "flex-end",
    justifyContent: "center",
    width: "100%",
    height: "100%",
    borderRadius: 6
  },
  viewStyle: {
    width: "100%",
    aspectRatio: 7,
    borderRadius: 10,
    borderColor: "#843a3e",
    backgroundColor: "#ffde75",
    borderWidth: 5,
    shadowOpacity: 0.1,
    marginVertical: 15
  }
};
