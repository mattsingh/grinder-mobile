import React from 'react';
import { Image, StyleSheet, View } from 'react-native';
import AppGradient from '../components/AppGradient';

export default function SplashScreen() {
	return (
	<AppGradient>
		<Image
			source={require('../assets/images/app-logo.png')}
			style={{width: 300, height: 300}}
		/>
	</AppGradient>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: 'orange',
		alignItems: 'center',
		justifyContent: 'center',
	},
});
