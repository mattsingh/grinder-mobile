import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import MatchScreen from './MatchScreen';
import ChatsScreen from './ChatsScreen';

const Tab = createBottomTabNavigator();

function MyTabs() {
	return (
		<Tab.Navigator screenOptions={{headerShown: false}}>
			<Tab.Screen name='Match' component={MatchScreen} />
			<Tab.Screen name='Chats' component={ChatsScreen} />
		</Tab.Navigator>
	);
}
export default function HomeScreen() {
	return (
		<NavigationContainer>
			<MyTabs />
		</NavigationContainer>
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
