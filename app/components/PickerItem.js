import React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

export default function PickerItem({ label, onPress }) {
  return (
    <TouchableOpacity onPress={onPress}>
      <Text style={styles.label}>{label}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  label: {
    padding: 20,
  },
});
