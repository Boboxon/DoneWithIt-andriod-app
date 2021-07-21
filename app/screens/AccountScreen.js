import React from "react";
import { StyleSheet, Text, View, FlatList } from "react-native";
import Icon from "../components/Icon";
import ListItems from "../components/ListItems";
import ListItemSeparator from "../components/ListItemSeparator";
import Screen from "../components/Screen";
import colors from "../config/colors";

const menuItems = [
  {
    title: "My Listings",
    icon: {
      name: "format-list-bulleted",
      backgroundColor: colors.primary,
    },
  },
  {
    title: "My Messages",
    icon: {
      name: "email",
      backgroundColor: colors.secondary,
    },
  },
];

export default function AccountScreen() {
  return (
    <Screen style={styles.screen}>
      <View style={styles.container}>
        <ListItems
          title="Bobokhon Rajabov"
          subTitle="rboboxon6055@gmail.com"
          image={require("../assets/bobokhon.jpg")}
        />
      </View>
      <View style={styles.container}>
        <FlatList
          data={menuItems}
          keyExtractor={(menuItem) => menuItem.title}
          ItemSeparatorComponent={ListItemSeparator}
          renderItem={({ item }) => (
            <ListItems
              title={item.title}
              ImageComponent={<Icon name={item.icon.name} backgroundColor={item.icon.backgroundColor} />}
            />
          )}
        />
      </View>
      <ListItems title="Log Out" ImageComponent={<Icon name="logout" backgroundColor="#ffe66d" />} />
    </Screen>
  );
}

const styles = StyleSheet.create({
  screen: {
    backgroundColor: colors.light,
  },
  container: {
    marginVertical: 20,
  },
});
