import React, { Component } from "react";
import { Text } from "react-native";
import { Icon, Button, Header, Body, Right, Left, Title, Container } from "native-base";

class Dashboard extends Component {
  render() {
    return (
      <Container>
        <Header>
          <Left>
            <Button iconLeft transparent rounded>
              <Icon style={{ color: "#ef3939" }} name="beer" />
              <Text> Export</Text>
            </Button>
          </Left>
          <Body>
            <Title>PaleOrigin</Title>
          </Body>
          <Right>
            <Button iconLeft transparent rounded>
              <Icon style={{ color: "#6aff44" }} name="beer" />
              <Text> Append</Text>
            </Button>
          </Right>
        </Header>
      </Container>
    );
  }
}

export default Dashboard;
