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
            <Text style={styles.name}>Lukas</Text>
            <Text style={styles.subTitle}>8:30</Text>
        </View>

        <Text style={styles.subTitle}>Hello there</Text>
      </View>

    </View>
  )
}

const styles = StyleSheet.create({
    container: {
        flexDirection: "row",
        width: "100%"
    },

    Image: {
        width: 60,
        height: 60,
        borderRadius: 30,

    },

    content: {
        width: "100%",
        backgroundColor: "red",
    },

    row: {

    },

    name: {

    },

    subTitle: {

    }
})

export default ChatListItem