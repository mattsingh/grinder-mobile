import { StyleSheet, Dimensions } from 'react-native';

const PRIMARY_COLOR = '#a56fe7';
const SECONDARY_COLOR = '#5636B8';
const WHITE = '#FFFFFF';
const GRAY = '#757E90';
const DARK_GRAY = '#363636';
const BLACK = '#000000';

export default StyleSheet.create({
	loginPageButtons: {
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
	loginPageInputs: {
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
		color: WHITE,
		textAlign: 'center',
	},
	loginPageText: {
		textAlign: 'center',
		color: WHITE,
	},
	loginCard: {
		width: '100%',
		maxWidth: 330,
		padding: 15,
		margin: 'auto',
		backgroundColor: '#242121',
		borderRadius: 30,
		alignItems: 'center',
	},
});
