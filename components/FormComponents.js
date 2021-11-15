import React from 'react';
import {
	StyleSheet,
	Text,
	TextInput,
	TouchableOpacity,
	View,
} from 'react-native';

export function FormInput({ ...rest }) {
	return (
		<TextInput
			style={styles.formInput}
			placeholderTextColor='#757575'
			{...rest}
		/>
	);
}

export function FormButton({ buttonTitle, ...rest }) {
	return (
		<TouchableOpacity style={styles.formButton} {...rest}>
			<Text style={styles.formText}>{buttonTitle}</Text>
		</TouchableOpacity>
	);
}

export function FormCard(props) {
	return <View style={styles.formCard}>{props.children}</View>;
}

export function FormText({ text, ...rest }) {
	return (
		<Text style={styles.formText} {...rest}>
			{text}
		</Text>
	);
}

const styles = StyleSheet.create({
	formButton: {
		borderWidth: 1,
		borderColor: '#2ecc71',
		borderStyle: 'solid',
		borderRadius: 25,
		width: 200,
		marginTop: 15,
		marginRight: 'auto',
		marginBottom: 15,
		marginLeft: 'auto',
		paddingTop: 10,
		paddingRight: 50,
		paddingBottom: 10,
		paddingLeft: 50,
	},
	formInput: {
		borderWidth: 2,
		borderColor: '#3498db',
		borderStyle: 'solid',
		borderRadius: 25,
		width: 200,
		marginTop: 15,
		marginRight: 'auto',
		marginBottom: 15,
		marginLeft: 'auto',
		paddingTop: 10,
		paddingRight: 50,
		paddingBottom: 10,
		paddingLeft: 50,
		color: 'white',
		textAlign: 'center',
	},
	formText: {
		textAlign: 'center',
		color: 'white',
	},
	formCard: {
		width: '100%',
		maxWidth: 330,
		padding: 15,
		margin: 'auto',
		backgroundColor: '#242121',
		borderRadius: 30,
		alignItems: 'center',
	},
});
