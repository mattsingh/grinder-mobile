import React, { useState, useContext } from 'react';
import {
	StyleSheet,
	Text,
	TextInput,
	View,
	TouchableOpacity,
} from 'react-native';
import AppStyles from '../assets/colors';
import {
	FormCard,
	FormButton,
	FormInput,
	FormText,
} from '../components/FormComponents';
import { AuthContext } from '../components/context';
import AppGradient from '../components/AppGradient';

export default function RegisterScreen() {
	const [name, setName] = useState(null);
	const [email, setEmail] = useState(null);
	const [password, setPassword] = useState(null);
	const [confirmPassword, setConfirmPassword] = useState(null);

	const { signUp } = useContext(AuthContext);

	return (
		<AppGradient>
			<FormCard>
				<FormText text='Create an account' />
				<FormInput
					onChangeText={setName}
					value={name}
					placeholder='Username'
				/>
				<FormInput
					onChangeText={setEmail}
					value={email}
					placeholder='Email'
					keyboardType='email-address'
				/>
				<FormInput
					onChangeText={setPassword}
					value={password}
					placeholder='Password'
					secureTextEntry={true}
				/>
				<FormInput
					onChangeText={setConfirmPassword}
					value={confirmPassword}
					placeholder='Confirm Password'
					secureTextEntry={true}
				/>
				<FormButton
					buttonTitle='Register'
					onPress={() => {
						console.log('register');
						signUp({ name, email, password, confirmPassword });
					}}
				/>
			</FormCard>
		</AppGradient>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#a56fe7',
		alignItems: 'center',
		justifyContent: 'center',
	},
});
