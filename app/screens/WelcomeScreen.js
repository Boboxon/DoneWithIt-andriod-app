import React from "react";
import { StyleSheet, Text, View, ImageBackground, Image } from "react-native";
import AppButton from "../components/AppButton";

export default function WelcomeScreen() {
  return (
    <ImageBackground 
    blurRadius={2} 
    style={styles.background} 
    source={require("../assets/background.jpg")
    }>
      <View style={styles.logoContainer}>
        <Image style={styles.logo} source={require("../assets/logo-red.png")} />
        <Text style={styles.tagLine} >Sell What You Don`t Need</Text>
      </View>
      <View style={styles.buttonContainer}>
        <AppButton title="Login"  onPress={() => console.log("done")} />
        <AppButton title="Register" color="secondary" onPress={() => console.log("done")} />
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    justifyContent: "flex-end",
    alignItems: "center",
  },
  buttonContainer:{
    padding: 20,
    width: '100%',
  },
  logo: {
    width: 100,
    height: 100,
    //  position: "absolute",
    //  top: 100,
  },
  logoContainer: {
    position: "absolute",
    top: 70,
    alignItems: "center",
  },
  tagLine: {
    fontSize: 25,
    fontWeight: '600',
    paddingVertical: 20,
  }
});
