import React, { useState, useContext } from 'react';
import {
	StyleSheet,
	Text,
	TextInput,
	View,
	TouchableOpacity,
} from 'react-native';
import AppStyles from '../assets/colors';
import { FormCard, FormButton, FormInput, FormText } from '../components/FormComponents';

export default function RegisterScreen() {
	const [firstName, setFirstName] = useState(null);
	const [email, setEmail] = useState(null);
	const [password, setPassword] = useState(null);
	const [confirmPassword, setConfirmPassword] = useState(null);

	return (
		<View style={styles.container}>
			<FormCard>
                <FormText text='Create an account' />
				<FormInput
					onChangeText={setFirstName}
					value={firstName}
					placeholder='Username'
				/>
				<FormInput
					onChangeText={setEmail}
					value={email}
					placeholder='Email'
				/>
				<FormInput
					onChangeText={setPassword}
					value={password}
					placeholder='Password'
				/>
				<FormInput
					onChangeText={setConfirmPassword}
					value={confirmPassword}
					placeholder='Confirm Password'
				/>
				<FormButton
                    buttonTitle='Register'
					onPress={() => console.log('register')}
				/>
			</FormCard>
		</View>
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
