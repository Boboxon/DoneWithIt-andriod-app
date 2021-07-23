import React from "react";
import { StyleSheet, Text, View } from "react-native";
import colors from "../../config/colors";

export default function ErrorMessages({ error, visible }) {
  if (!visible || !error) return null;  
  return <Text style={styles.error}>{error}</Text>;
}

const styles = StyleSheet.create({
  error: {
    color: colors.danger,
  },
});
