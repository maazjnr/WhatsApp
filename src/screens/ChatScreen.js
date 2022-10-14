import { View, Text, FlatList } from 'react-native'
import chats from "../../assets/data/chats.json";
import ChatListItem from '../components/ChatListItem';


const ChatScreen = () => {
  return (
    <FlatList showsVerticalScrollIndicator={false}
    scrollIndicatorInsets={false}
    data={chats}
    renderItem={({item}) => <ChatListItem chat={item} />}
    />
  )
}

export default ChatScreen