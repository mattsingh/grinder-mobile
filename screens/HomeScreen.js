import React from 'react';
import { StyleSheet, View, Text, SafeAreaView } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import MatchScreen from './MatchScreen';
import ProfileScreen from './ProfileScreen';
import MessageStack from '../routes/MessageStack';
import { FontAwesome, Entypo } from 'react-native-vector-icons';

const Tab = createBottomTabNavigator();

export default function HomeScreen() {
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

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#fff',
		alignItems: 'center',
		justifyContent: 'center',
	},
});
