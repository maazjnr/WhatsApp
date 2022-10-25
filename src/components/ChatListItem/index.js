import { View, Text, Image, StyleSheet, Pressable } from "react-native";
import dayjs from "dayjs";
import { useNavigation } from "@react-navigation/native";
import relativeTime from 'dayjs/plugin/relativeTime';
dayjs.extend(relativeTime);


const ChatListItem = ({ chat }) => {
  const navigation = useNavigation();

  return (
    <Pressable onPress={() => navigation.navigate("Chat")} style={styles.container}>
      <Image source={{ uri: chat.user.image }} style={styles.Image} />

      <View style={styles.content}>
        <View style={styles.row}>
          <Text numberOfLines={1} style={styles.name}>
            {chat.user.name}
          </Text>
          <Text style={styles.subTitle}>{dayjs(chat.lastMessage.createdAt).fromNow(true)}</Text>
        </View>

        <Text numberOfLines={2} style={styles.subTitle}>
          {chat.lastMessage.text}
        </Text>
      </View>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    width: "100%",
    paddingLeft: 10,
    paddingRight: 10,
    marginVertical: 5,
    height: 70,
    flex: 1
  },

  Image: {
    width: 60,
    height: 60,
    borderRadius: 30,
    marginRight: 10,
  },

  content: {
    width: "80%",
    borderBottomWidth: StyleSheet.hairlineWidth,
    borderBottomColor: "#cccdc6",
  },

  row: {
    flexDirection: "row",
    marginBottom: 5,
  },

  name: {
    flex: 1,
    fontWeight: "bold",
  },

  subTitle: {
    color: "gray",
  },
});

export default ChatListItem;
