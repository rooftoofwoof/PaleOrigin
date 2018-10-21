import React, { Component } from "react";
import { View, Text, FlatList } from "react-native";
import { Icon, Button, Right, Left, Container } from "native-base";
import styles from "./styles";
import ProductItem from "../common/ProductItem";
import CustomHeader from "../common/CustomHeader";

class Dashboard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      exportOrAppend: 0,
      data: [
        {
          prodName: "SPINACH",
          img_url: "https://s.abcnews.com/images/Health/abc-santa-monica-farmers-market-06-jc-170619_12x5_992.jpg",
          qr_code: "abcde"
        },
        {
          prodName: "BANANAS",
          img_url:
            "https://i2.wp.com/www.onegreenplanet.org/wp-content/uploads/2013/06/ripe-unripe-bananas.jpg?resize=1600%2C1000",
          qr_code: "qrstuv"
        }
      ]
    };
  }

  handlePress = code => {
    console.log("THIS IS CODE IN HANDLEPRESS: ", code);
    if (this.state.exportOrAppend === 1) {
      return this.props.navigation.navigate("ExportQR", { qr_code: code });
    } else if (this.state.exportOrAppend === 2) {
      return null;
    } else {
      return null;
    }
  };

  renderItem = item => {
    const { prodName, img_url, qr_code } = item.item;
    const { productButtonStyle } = styles;
    return (
      <Button transparent style={productButtonStyle} onPress={() => this.handlePress(qr_code)}>
        <ProductItem prodName={prodName} img_url={img_url} />
      </Button>
    );
  };

  render() {
    const { productListStyle, containerStyle, bigIconStyle, iconStyle, iconTextStyle } = styles;
    return (
      <Container style={containerStyle}>
        <CustomHeader headerText={"PaleOrigin"}>
          <Left>
            <Button
              iconLeft
              transparent
              rounded
              onPress={() => this.setState({ exportOrAppend: this.state.exportOrAppend === 1 ? 0 : 1 })}
            >
              <Icon style={this.state.exportOrAppend == 1 ? bigIconStyle : iconStyle} name="beer" />
              <Text style={iconTextStyle}> Export</Text>
            </Button>
          </Left>
          <Right>
            <Button
              iconLeft
              transparent
              rounded
              onPress={() => this.setState({ exportOrAppend: this.state.exportOrAppend === 2 ? 0 : 2 })}
            >
              <Icon style={this.state.exportOrAppend == 2 ? bigIconStyle : iconStyle} name="beer" />
              <Text style={iconTextStyle}> Append</Text>
            </Button>
          </Right>
        </CustomHeader>
        <View style={productListStyle}>
          <FlatList data={this.state.data} renderItem={this.renderItem} />
        </View>
      </Container>
    );
  }
}

export default Dashboard;
