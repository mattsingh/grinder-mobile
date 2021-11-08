import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import MessagesScreen from '../screens/MessagesScreen';
import ChatScreen from '../screens/ChatScreen';

const Stack = createStackNavigator();

export default function MyStack() {
	return (
		<Stack.Navigator>
			<Stack.Screen name='Messages' component={MessagesScreen} />
			<Stack.Screen name='Chat' component={ChatScreen} options={({route}) => ({
				title: route.params.userName
			})} />
		</Stack.Navigator>
	);
}