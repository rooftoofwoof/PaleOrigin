import React, { Component } from "react";
import { Header, Body, Title } from "native-base";

export default class CustomHeader extends Component {
  constructor(props) {
    super(props);
    console.log("THIS IS PROPS: ", this.props);
  }

  render() {
    const { headerStyle, titleStyle } = styles;
    console.log("THIS IS CHILDREN", this.props.children);

    return (
      <Header style={headerStyle}>
        {this.props.children ? (this.props.children.length > 0 ? this.props.children[0] : null) : null}
        <Body>
          <Title style={titleStyle}>{this.props.headerText}</Title>
        </Body>
        {this.props.children ? (this.props.children.length >= 2 ? this.props.children[1] : null) : null}
      </Header>
    );
  }
}

const styles = {
  headerStyle: { backgroundColor: "#016d4b" },
  titleStyle: { color: "#fff" }
};
