import { View, Text, StyleSheet } from "react-native";
import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";
dayjs.extend(relativeTime);

const Message = ({ message }) => {
  const isMyMessage = () => {
    return message.user.id === "u1";
  };

  return (
    <View style={{ width: "100%" }}>
      <View
        style={[
          styles.container,
          {
            backgroundColor: isMyMessage() ? "#DCF8C5" : "white",
            alignSelf: isMyMessage() ? "flex-end" : "flex-start",
          },
        ]}
      >
        <Text>{message.text}</Text>
        <Text style={styles.time}>
          {dayjs(message.createdAt).fromNow(true)}
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    margin: 5,
    padding: 10,
    borderRadius: 10,
    maxWidth: "80%",
    flex: 1,
  //Shadow background
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.2,
    shadowRadius: 1.41,

    elevation: 2,
  },

  time: {
    color: "gray",
    alignSelf: "flex-end",
  },
});

export default Message;
