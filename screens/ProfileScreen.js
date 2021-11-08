import React, { useContext } from 'react';
import { StyleSheet, View, Button } from 'react-native';
import { AuthContext } from '../components/context';


export default function ProfileScreen() {
	const { signOut } = useContext(AuthContext);

	return (
		<View style={styles.container}>
			<Button
				title='Sign Out'
				onPress={() => {
					signOut();
				}}
			/>
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		alignItems: 'center',
		justifyContent: 'center',
	},
});
