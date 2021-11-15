import React from 'react';
import {
	StyleSheet,
	Text,
	TextInput,
	TouchableOpacity,
	View,
} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';


export default function AppGradient({ ...rest }) {
	return (
		<LinearGradient
			style={styles.container}
			colors={['#6e0dbe', '#3587e4']}
			{...rest}
		>
			{rest.children}
		</LinearGradient>
	);
}


const styles = StyleSheet.create({
	container: {
		flex: 1,
		alignItems: 'center',
		justifyContent: 'center',
		backgroundColor: '#a56fe7',
	},
});
