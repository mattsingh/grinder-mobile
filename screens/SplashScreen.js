import React from 'react';
import { StyleSheet, View } from 'react-native';

export default function SplashScreen() {
	return <View style={styles.container} />;
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: 'orange',
		alignItems: 'center',
		justifyContent: 'center',
	},
});
