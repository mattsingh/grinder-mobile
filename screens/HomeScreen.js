import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
import { StyleSheet, View, Text, SafeAreaView } from 'react-native';
import MatchScreen from './MatchScreen';
import MessagesScreen from './MessagesScreen';
import MessageStack from '../routes/MessageStack'

const Tab = createBottomTabNavigator();

function MyTabs() {
	return (
		<Tab.Navigator screenOptions={{ headerShown: false }}>
			<Tab.Screen name='Match' component={MatchScreen} />
			<Tab.Screen name='Chats' component={MessageStack} />
		</Tab.Navigator>
	);
}
export default function HomeScreen() {
	return (
		<SafeAreaView style={{ flex: 1, backgroundColor: 'purple' }}>
			<NavigationContainer>
				<MyTabs />
			</NavigationContainer>
		</SafeAreaView>
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
