import React from "react";
import { Image, StyleSheet, Text, View } from "react-native";
import colors from "../config/colors";
import ListItems from "../components/ListItems";

export default function ListingDetailsScreen() {
  return (
    <View>
      <Image style={styles.image} source={require("../assets/jacket.jpg")} />
      <View style={styles.detailsContainer}>
        <Text style={styles.titile}>Red jacket for Sale</Text>
        <Text style={styles.price}>$100</Text>
        <View style={styles.userList}>
          <ListItems image={require("../assets/bobokhon.jpg")} title="Bobokhon Rajabov" subTitle="6 Listings" />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  image: {
    width: "100%",
    height: 300,
  },
  detailsContainer: {
    padding: 20,
  },
  titile: {
    fontSize: 24,
    fontWeight: "500",
  },
  price: {
    color: colors.secondary,
    fontWeight: "bold",
    fontSize: 20,
    marginVertical: 10,
  },
  userList: {
    marginVertical: 50,
  },
});
