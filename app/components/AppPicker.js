import React from "react";
import { StyleSheet, Text, TextInput, View } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import colors from "../config/colors";

export default function AppPicker({ icon, placeholder, ...otherProps }) {
  return (
    <View style={styles.container}>
      {icon && <MaterialCommunityIcons name={icon} color={colors.medium} size={20} style={styles.icon} />}
      <Text style={styles.text}>{placeholder}</Text>
      <MaterialCommunityIcons name="chevron-down" color={colors.medium} size={20} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.light,
    borderRadius: 25,
    flexDirection: "row",
    width: "100%",
    padding: 15,
    marginVertical: 15,
    //  mariginVertical: 15,
  },
  textInput: {
    fontSize: 18,
    fontFamily: "Roboto",
    color: colors.dark,
  },
  icon: {
    marginRight: 10,
  },
  text: {
    flex: 1,
  },
});
