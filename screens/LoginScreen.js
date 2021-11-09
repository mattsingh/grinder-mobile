import React, { useState, useContext } from 'react';
import {
	StyleSheet,
	Text,
	TextInput,
	View,
	TouchableOpacity,
} from 'react-native';
import { AuthContext } from '../components/context';
import AppStyles from '../assets/styles/AppStyles';

export default function LoginScreen() {
	const [login, setLogin] = useState(null);
	const [password, setPassword] = useState(null);

	const { signIn } = useContext(AuthContext);

	return (
		<View style={styles.container}>
			<View style={AppStyles.loginCard}>
				<Text style={AppStyles.loginPageText}>Please sign in</Text>
				<TextInput
					style={AppStyles.loginPageInputs}
					onChangeText={setLogin}
					value={login}
					placeholder='Username or Email'
					placeholderTextColor='#757575'
				/>
				<TextInput
					style={AppStyles.loginPageInputs}
					onChangeText={setPassword}
					value={password}
					secureTextEntry
					placeholder='Password'
					placeholderTextColor='#757575'
				/>
				<TouchableOpacity
					title='Login'
					style={AppStyles.loginPageButtons}
					onPress={() => {
						console.log(login + ' ' + password);
						signIn({ login, password });
					}}
				>
					<Text style={AppStyles.loginPageText}>Login</Text>
				</TouchableOpacity>
				<TouchableOpacity
					title='Login'
					style={AppStyles.loginPageButtons}
					onPress={() => {
						console.log(login + ' ' + password);
						signIn({ login, password });
					}}
				>
					<Text style={AppStyles.loginPageText}>Register</Text>
				</TouchableOpacity>
			</View>
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		alignItems: 'center',
		justifyContent: 'center',
		backgroundColor: '#a56fe7',
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
