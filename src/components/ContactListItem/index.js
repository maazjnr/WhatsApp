import { View, Text, Image, StyleSheet, Pressable } from "react-native";
import dayjs from "dayjs";
import { useNavigation } from "@react-navigation/native";
import relativeTime from "dayjs/plugin/relativeTime";
dayjs.extend(relativeTime);

const ContactListItem = ({ user }) => {
  const navigation = useNavigation();

  return (
    <Pressable onPress={() => {}} style={styles.container}>
      <Image source={{ uri: user.image }} style={styles.Image} />

      <View style={styles.content}>
        <Text numberOfLines={1} style={styles.name}>
          {user.name}
        </Text>
        <Text style={styles.subTitle} numberOfLines={2}>{user.status}</Text>
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
    alignItems: "center"
  },

  Image: {
    width: 60,
    height: 60,
    borderRadius: 30,
    marginRight: 10,
  },

  content: {

  },
  subTitle: {
    color: "gray"
  },

  name: {
    fontWeight: "bold",
  },
});

export default ContactListItem;
