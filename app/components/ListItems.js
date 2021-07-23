import React from "react";
import { StyleSheet, Text, View, Image, TouchableHighlight } from "react-native";
import colors from "../config/colors";
import Swipeable from "react-native-gesture-handler/Swipeable";
// import { MaterialCommunityIcons } from "@expo/vector-icons";

export default function ListItems({ title, image, subTitle, onPress, renderRightAction, ImageComponent }) {
  return (
    <Swipeable renderRightActions={renderRightAction}>
      <TouchableHighlight underlayColor={colors.light} onPress={onPress}>
        <View style={styles.container}>
          {ImageComponent}
          {image && <Image style={styles.image} source={image} />}
          <View style={styles.detailsText}>
            <Text style={styles.title}>{title}</Text>
            {subTitle && (
              <Text style={styles.subTitle} numberOfLines={2}>
                {subTitle}
              </Text>
            )}
            {/* <MaterialCommunityIcons name="chevron-right" size={25} /> */}
          </View>
        </View>
      </TouchableHighlight>
    </Swipeable>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    padding: 15,
    backgroundColor: colors.white,
    alignItems: "center",
  },
  detailsText: {
    flex: 1,
    marginLeft: 10,
    justifyContent: "center",
  },
  image: {
    width: 70,
    height: 70,
    borderRadius: 35,
  },
  title: {
    fontWeight: "500",
  },
  subTitle: {
    color: colors.medium,
  },
});
