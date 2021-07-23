import React, { useState } from "react";
import { StyleSheet, FlatList, View } from "react-native";
import DeleteAction from "../components/DeleteAction";
import ListItems from "../components/ListItems";
import ListItemSeparator from "../components/ListItemSeparator";
import Screen from "../components/Screen";

const intialMessage = [
  {
    id: 1,
    title: "title1",
    description:
      "welcome to the  about donewithit porject,welcome to the  about donewithit porject,welcome to the  about donewithit porject",
    image: require("../assets/bobokhon.jpg"),
  },
  { id: 2, title: "title2", description: "description2", image: require("../assets/bobokhon.jpg") },
];

export default function MessageScreen() {
  const [messages, setMessages] = useState(intialMessage);
  const [refreshing, setRefreshing] = useState(false);
  const handleDelete = (message) => {
    const newMessages = messages.filter((m) => m.id !== message.id);
    setMessages(newMessages);
  };

  return (
    <Screen style={styles.screen}>
      <FlatList
        data={messages}
        keyExtractor={(message) => message.id.toString()}
        renderItem={({ item }) => (
          <ListItems
            title={item.title}
            image={item.image}
            onPress={() => console.log("message selected", item)}
            subTitle={item.description}
            renderRightAction={() => <DeleteAction onPress={() => handleDelete(item)} />}
          />
        )}
        ItemSeparatorComponent={ListItemSeparator}
        refreshing={refreshing}
        onRefresh={() => {
          setMessages([
            { id: 2, title: "title2", description: "description2", image: require("../assets/bobokhon.jpg") },
          ]);
        }}
      />
    </Screen>
  );
}

const styles = StyleSheet.create({});
