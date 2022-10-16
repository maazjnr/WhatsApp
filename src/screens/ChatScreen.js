import {
  View,
  Text,
  ImageBackground,
  StyleSheet,
  FlatList,
} from "react-native";
import bg from "../../assets/images/BG.png";
import Message from "../components/Message";
import messages from "../../assets/data/messages.json";

const ChatScreen = () => {
  return (
    <ImageBackground source={bg} style={styles.bg}>
      <FlatList showsHorizontalScrollIndicator={false}
      showsVerticalScrollIndicator={false}
        style={styles.list}
        data={messages}
        renderItem={({ item }) => <Message message={item} />}
        inverted
      />
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  bg: {
    flex: 1,
    width: "100%"
  },

  list: {
    padding: 10,
  },
});

export default ChatScreen;
