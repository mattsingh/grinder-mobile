import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import MatchScreen from '../screens/MatchScreen';
import ProfileScreen from '../screens/ProfileScreen';
import MessageStack from './MessageStack';
import { FontAwesome, Entypo } from 'react-native-vector-icons';

const Tab = createBottomTabNavigator();

export default function AppTabs() {
	return (
		<Tab.Navigator screenOptions={{ headerShown: false }}>
			<Tab.Screen
				name='Match'
				component={MatchScreen}
				options={{
					tabBarIcon: ({ color, size }) => (
						<FontAwesome name='group' color={color} size={size} />
					),
				}}
			/>
			<Tab.Screen
				name='Chats'
				component={MessageStack}
				options={{
					tabBarIcon: ({ color, size }) => (
						<Entypo name='chat' color={color} size={size} />
					),
				}}
			/>
			<Tab.Screen
				name='Profile'
				component={ProfileScreen}
				options={{
					tabBarIcon: ({ color, size }) => (
						<FontAwesome name='user-circle-o' color={color} size={size} />
					),
				}}
			/>
		</Tab.Navigator>
	);
}