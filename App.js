import React from "react";
import { Button, StyleSheet, Text, Alert, View } from "react-native";
import ViewImageScreen from "./app/screens/ViewImageScreen";
import WelcomeScreen from "./app/screens/WelcomeScreen";
import Card from "./app/components/Card";
import ListingDetailsScreen from "./app/screens/ListingDetailsScreen";
import MessageScreen from "./app/screens/MessageScreen";
import Screen from "./app/components/Screen";
import Icon from "./app/components/Icon";
import ListItems from "./app/components/ListItems";
import AccountScreen from "./app/screens/AccountScreen";
import AppTextInput from "./app/components/AppTextInput";
import AppPicker from "./app/components/AppPicker";

export default function App() {
  return (
    <Screen>
      <AppPicker icon="apps" placeholder="Category" />
      <AppTextInput icon="email" placeholder="UserName" />
    </Screen>
    // <AccountScreen />
    // <Screen>
    //   <ListItems title="My Title" ImageComponent={<Icon name="email" />} />
    // </Screen>
    // <WelcomeScreen />
    // <ViewImageScreen />
    // <MessageScreen />
    // <View style={styles.container}>
    //   <Card title="Red jacket for sale" subTitle="$100" image={require("./app/assets/jacket.jpg")} />
    // </View>
    // <View>
    //   <ListingDetailsScreen />
    // </View>
  );
}

const styles = StyleSheet.create({
  // container: {
  //   // flex: 1,
  //   // // backgroundColor: "blue",
  //   // alignItems: "center",
  //   // justifyContent: "center",
  //   backgroundColor: "#f8f4f4",
  //   padding: 20,
  //   paddingTop: 100,
  // },
});
