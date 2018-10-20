import React, { Component } from "react";
import { View, Text } from "react-native";
import { Icon, Button, Header, Body, Right, Left, Title, Container } from "native-base";
import styles from "./styles";
import ProductItem from "../common/ProductItem";

class Dashboard extends Component {
  render() {
    const { productListStyle, containerStyle, headerStyle, iconStyle, iconTextStyle, titleStyle } = styles;
    return (
      <Container style={containerStyle}>
        <Header style={headerStyle}>
          <Left>
            <Button iconLeft transparent rounded>
              <Icon style={iconStyle} name="beer" />
              <Text style={iconTextStyle}> Export</Text>
            </Button>
          </Left>
          <Body>
            <Title style={titleStyle}>PaleOrigin</Title>
          </Body>
          <Right>
            <Button iconLeft transparent rounded>
              <Icon style={iconStyle} name="beer" />
              <Text style={iconTextStyle}> Append</Text>
            </Button>
          </Right>
        </Header>
        <View style={productListStyle}>
          <ProductItem
            prodName="SPINACH"
            img_url="https://s.abcnews.com/images/Health/abc-santa-monica-farmers-market-06-jc-170619_12x5_992.jpg"
          />
        </View>
      </Container>
    );
  }
}

export default Dashboard;