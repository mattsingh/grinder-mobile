import React from 'react';
import { StyleSheet, View, Text } from 'react-native';

export default function ChatsScreen() {
	return (
		<View style={styles.container}>
			<Text>Chats screen</Text>
		</View>
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
