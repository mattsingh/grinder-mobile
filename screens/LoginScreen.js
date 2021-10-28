import React, { useState, useContext } from 'react';
import { Button, StyleSheet, Text, TextInput, View } from 'react-native';
import { AuthContext } from '../components/context';

export default function LoginScreen() {
	const [login, setLogin] = useState(null);
	const [password, setPassword] = useState(null);

	const { signIn } = useContext(AuthContext);

	return (
		<View style={styles.container}>
			<View style={styles.card}>
				<Text style={styles.title}>Login</Text>
				<Text>Please enter account information</Text>
				<TextInput
					style={styles.input}
					onChangeText={setLogin}
					value={login}
					placeholder='Username or Email'
				/>
				<TextInput
					style={styles.input}
					onChangeText={setPassword}
					value={password}
					secureTextEntry
					placeholder='Password'
				/>
				<Button
					title='Login'
					onPress={() => {
						console.log(login + ' ' + password);
						signIn({ login, password });
					}}
				/>
			</View>
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		alignItems: 'center',
		justifyContent: 'center',
	},
	card: {
		flexBasis: 'auto',
		marginTop: 10,
		paddingTop: 15,
		paddingBottom: 15,
		marginLeft: 30,
		marginRight: 30,
		backgroundColor: '#242121',
		borderRadius: 10,
		borderWidth: 1,
		borderColor: '#fff',
		alignItems: 'center',
		justifyContent: 'center',
	},
	title: {
		color: '#fff',
	},
	input: {
		backgroundColor: '#fff',
		height: 40,
		width: 200,
		margin: 12,
		borderWidth: 1,
		borderRadius: 10,
		padding: 10,
	},
	buttons: {},
});
