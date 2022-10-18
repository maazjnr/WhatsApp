import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import ChatsScreen from '../screens/ChatsScreen';

const Stack = createNativeStackNavigator();


const Navigator = () => {
  return (
    <NavigationContainer>
        <Stack.Navigator>
            <Stack.Screen name="Chat" component={ChatsScreen}/>
        </Stack.Navigator>
    </NavigationContainer>
  )
}

export default Navigator