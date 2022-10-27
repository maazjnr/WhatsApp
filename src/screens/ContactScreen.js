import { View, Text, FlatList } from 'react-native'
import chats from '../../assets/data/chats.json';
import ContactListItem from '../components/ContactListItem';

const ContactScreen = () => {
  return (
    <FlatList
    data={chats}
    renderItem={({ item }) => <ContactListItem user={item.user} />}
  />
  )
}

export default ContactScreen