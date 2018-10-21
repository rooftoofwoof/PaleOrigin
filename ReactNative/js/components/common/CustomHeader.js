import React, { Component } from "react";
import { Header, Body, Title, Subtitle } from "native-base";

export default class CustomHeader extends Component {
  render() {
    const { headerStyle, titleStyle, subtitleStyle } = styles;
    const { headerText, subtitleText } = this.props;

    return (
      <Header style={headerStyle}>
        {this.props.children ? (this.props.children.length > 0 ? this.props.children[0] : null) : null}
        <Body>
          <Title style={titleStyle}>{headerText}</Title>
          {subtitleText ? <Subtitle style={subtitleStyle}>{subtitleText}</Subtitle> : null}
        </Body>
        {this.props.children ? (this.props.children.length >= 2 ? this.props.children[1] : null) : null}
      </Header>
    );
  }
}

const styles = {
  headerStyle: { backgroundColor: "#016d4b" },
  titleStyle: { color: "#fff" },
  subtitleStyle: { color: "#fff" }
};
