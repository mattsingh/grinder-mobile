import React from 'react';
import { StyleSheet, View, Text, SafeAreaView } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import MatchScreen from './MatchScreen';
import ProfileScreen from './ProfileScreen';
import MessageStack from '../routes/MessageStack';

const Tab = createBottomTabNavigator();

export default function HomeScreen() {
	return (
		<Tab.Navigator screenOptions={{ headerShown: false }}>
			<Tab.Screen name='Match' component={MatchScreen} />
			<Tab.Screen name='Chats' component={MessageStack} />
			<Tab.Screen name='Profile' component={ProfileScreen} />
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
