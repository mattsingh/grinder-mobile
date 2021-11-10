import React, { useState, useContext } from 'react';
import {
	StyleSheet,
	Text,
	TextInput,
	View,
	TouchableOpacity,
} from 'react-native';
import { AuthContext } from '../components/context';
import {
	FormCard,
	FormInput,
	FormButton,
	FormText,
} from '../components/FormComponents';

export default function LoginScreen({ navigation }) {
	const [email, setEmail] = useState(null);
	const [password, setPassword] = useState(null);

	const { signIn } = useContext(AuthContext);

	return (
		<View style={styles.container}>
			<FormCard>
				<FormText text='Please sign in' />
				<FormInput
					placeholder='Email'
					onChangeText={setEmail}
					value={email}
				/>
				<FormInput
					placeholder='Password'
					onChangeText={setPassword}
					value={password}
				/>
				<FormButton
					buttonTitle='Login'
					onPress={() => {
						console.log(email + ' ' + password);
						signIn({ email, password });
					}}
				/>
				<FormButton
					buttonTitle='Register'
					onPress={() => navigation.navigate('Register')}

				/>
			</FormCard>
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
