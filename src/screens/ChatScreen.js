import {
  View,
  Text,
  ImageBackground,
  StyleSheet,
  FlatList,
  Platform,
  KeyboardAvoidingView,
} from "react-native";
import bg from "../../assets/images/BG.png";
import Message from "../components/Message";
import messages from "../../assets/data/messages.json";
import InputBox from "../components/InputBos/Index";
import { useRoute, useNavigation } from "@react-navigation/native";
import { useEffect } from "react";

const ChatScreen = () => {

  const route = useRoute();
  const navigation = useNavigation();

  useEffect(() => {
    navigation.setOptions({title: route.params.name})
  }, [route.params.name])
  
  return (
    <KeyboardAvoidingView
      style={{ flex: 1, width: "100%" }}
      Behavior={Platform.OS === "ios" ? "padding" : "height"}
      keyboardVerticalOffset={Platform.OS === "ios" ? 60 : 90}
    >
      <ImageBackground source={bg} style={styles.bg}>
        <FlatList
          showsHorizontalScrollIndicator={false}
          showsVerticalScrollIndicator={false}
          style={styles.list}
          data={messages}
          renderItem={({ item }) => <Message message={item} />}
          inverted
        />
        <InputBox />
      </ImageBackground>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  bg: {
    flex: 1,
    width: "100%",
  },

  list: {
    padding: 10,
  },
});

export default ChatScreen;
