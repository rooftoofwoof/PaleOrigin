import React, { Component } from "react";
import QRCode from "react-native-qrcode";
import { View } from "react-native";
import { Container } from "native-base";
import CustomHeader from "../common/CustomHeader";
import styles from "./styles";

class ExportQR extends Component {
  render() {
    const { codeViewStyle } = styles;
    console.log("THIS IS QR CODE IN EXPORTQR", this.props.navigation.state.params.qr_code);
    return (
      <Container>
        <CustomHeader headerText={"Export QR"} />
        <View style={codeViewStyle}>
          <QRCode value={this.props.navigation.state.params.qr_code} size={200} bgColor="#016d4b" fgColor="white" />
        </View>
      </Container>
    );
  }
}

export default ExportQR;
