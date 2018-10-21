import React, { Component } from "react";
import { View, Text, TouchableOpacity, Linking } from "react-native";
import { Container } from "native-base";
import CustomHeader from "../common/CustomHeader";
import styles from "./styles";
import QRCodeScanner from "react-native-qrcode-scanner";

class AppendQR extends Component {
  onSuccess(e) {
    Linking.openURL(e.data).catch(err => console.error("An error occured", err));
  }

  render() {
    return (
      <Container>
        <CustomHeader headerText={"Append QR"} />
        <QRCodeScanner
          onRead={this.onSuccess.bind(this)}
          topContent={
            <Text>
              Go to <Text>wikipedia.org/wiki/QR_code</Text> on your computer and scan the QR code.
            </Text>
          }
          bottomContent={
            <TouchableOpacity>
              <Text>OK. Got it!</Text>
            </TouchableOpacity>
          }
        />
      </Container>
    );
  }
}

export default AppendQR;
