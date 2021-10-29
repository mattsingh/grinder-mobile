import React from 'react';
import {
	Text,
	View,
	Image,
	Dimensions,
	TouchableOpacity,
	StyleSheet,
} from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';

export default function CardItem({
	actions,
	description,
	image,
	matches,
	name,
	onPressLeft,
	onPressRight,
	status,
	variant,
}) {
	// Custom styling
	const fullWidth = Dimensions.get('window').width;
	const imageStyle = [
		{
			borderRadius: 8,
			width: variant ? fullWidth / 2 - 30 : fullWidth - 80,
			height: variant ? 170 : 350,
			margin: variant ? 0 : 20,
		},
	];

	const nameStyle = [
		{
			paddingTop: variant ? 10 : 15,
			paddingBottom: variant ? 5 : 7,
			color: '#363636',
			fontSize: variant ? 15 : 30,
		},
	];

	return (
		<View style={styles.containerCardItem}>
			{/* IMAGE */}
			<Image source={image} style={imageStyle} />

			{/* MATCHES */}
			{matches && (
				<View style={styles.matchesCardItem}>
					<Text style={styles.matchesTextCardItem}>
						<Icon name='heart' /> {matches}% Match!
					</Text>
				</View>
			)}

			{/* NAME */}
			<Text style={nameStyle}>{name}</Text>

			{/* DESCRIPTION */}
			{description && (
				<Text style={styles.descriptionCardItem}>{description}</Text>
			)}

			{/* STATUS */}
			{status && (
				<View style={styles.status}>
					<View
						style={
							status === 'Online' ? styles.online : styles.offline
						}
					/>
					<Text style={styles.statusText}>{status}</Text>
				</View>
			)}

			{/* ACTIONS */}
			{actions && (
				<View style={styles.actionsCardItem}>
					<TouchableOpacity
						style={styles.button}
						onPress={() => onPressLeft()}
					>
						<Text style={styles.dislike}>
							<Icon name='dislike1' />
						</Text>
					</TouchableOpacity>

					<TouchableOpacity
						style={styles.button}
						onPress={() => onPressRight()}
					>
						<Text style={styles.like}>
							<Icon name='like1' />
						</Text>
					</TouchableOpacity>
				</View>
			)}
		</View>
	);
}

const styles = StyleSheet.create({
	containerCardItem: {
		backgroundColor: 'white',
		borderRadius: 8,
		alignItems: 'center',
		margin: 10,
		shadowOpacity: 0.05,
		shadowRadius: 10,
		shadowColor: 'black',
		shadowOffset: { height: 0, width: 0 },
	},
	matchesCardItem: {
		marginTop: -35,
		backgroundColor: 'purple', // primary color
		paddingVertical: 7,
		paddingHorizontal: 20,
		borderRadius: 20,
	},
	matchesTextCardItem: {
		// fontFamily: ICON_FONT,
		color: 'white',
	},
	descriptionCardItem: {
		color: 'gray',
		textAlign: 'center',
	},
	actionsCardItem: {
		flexDirection: 'row',
		alignItems: 'center',
		paddingVertical: 30,
	},
	status: {
		paddingBottom: 10,
		flexDirection: 'row',
		alignItems: 'center',
	},
	button: {
		width: 60,
		height: 60,
		borderRadius: 30,
		backgroundColor: '#fff',
		marginHorizontal: 7,
		alignItems: 'center',
		justifyContent: 'center',
		shadowOpacity: 0.15,
		shadowRadius: 20,
		shadowColor: 'darkgray',
		shadowOffset: { height: 10, width: 0 },
	},
	like: {
		fontSize: 25,
		// fontFamily: ICON_FONT,
		color: 'green',
	},
	dislike: {
		fontSize: 25,
		// fontFamily: ICON_FONT,
		color: 'crimson',
	},
});
