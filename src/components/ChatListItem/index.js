import { View, Text, Image, StyleSheet } from 'react-native'

const ChatListItem= () => {
  return (
    <View style={styles.container}>
      <Image 
      source={{uri: "https://notjustdev-dummy.s3.us-east-2.amazonaws.com/avatars/lukas.jpeg"}} 
      style={styles.Image} 
      />

      <View style={styles.content}>
        <View style={styles.row}>
            <Text numberOfLines={1} style={styles.name}>Lukas</Text>
            <Text style={styles.subTitle}>8:30</Text>
        </View>

        <Text numberOfLines={2} style={styles.subTitle}>Hello there</Text>
      </View>

    </View>
  )
}

const styles = StyleSheet.create({
    container: {
        flexDirection: "row",
        width: "100%",
        paddingLeft: 10,
        paddingRight: 10,
        marginVertical: 5,
        height: 70
    },

    Image: {
        width: 60,
        height: 60,
        borderRadius: 30,
        marginRight: 10
    },

    content: {
        flex: 1,
        borderBottomWidth: StyleSheet.hairlineWidth,
        borderBottomColor: "#cccdc6"
    },

    row: {
        flexDirection: "row",
        marginBottom: 5
    },

    name: {
        flex: 1,
        fontWeight: "bold"
    },

    subTitle: {
        color: "gray"
    }
})

export default ChatListItem