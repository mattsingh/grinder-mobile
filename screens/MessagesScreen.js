import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';
import {
	StyleSheet,
	View,
	Text,
	FlatList,
	TouchableOpacity,
	Image,
} from 'react-native';
import ChatScreen from './ChatScreen';

const chats = [
	// sample list of chats
	{
		id: 1,
		userName: 'Hippie Overlord',
		postTime: '5 mins ago',
		messageText: 'I have aids',
	},
	{
		id: 2,
		userName: 'Cristianplays',
		postTime: '1 hour ago',
		messageText: 'grapes',
	},
	{
		id: 3,
		userName: 'Djinn',
		postTime: '2 hours ago',
		messageText: 'Want to play CS:GO?',
	},
];

function renderMessageList({ item }) {
	return (
		<TouchableOpacity
			style={styles.card}
			onPress={() =>
				navigation.navigate('Chat', { userName: item.userName })
			}
		>
			<View style={styles.userInfo}>
				<View style={styles.userImgWrapper}>
					<Image
						style={styles.userImage}
						source={require('../assets/images/default-pfp.png')}
						defaultSource={require('../assets/images/default-pfp.png')}
					/>
				</View>
				<View style={styles.TextSection}>
					<View style={styles.UserInfoText}>
						<Text>{item.userName}</Text>
						<Text>{item.postTime}</Text>
					</View>
					<Text style={styles.MessageText}>{item.messageText}</Text>
				</View>
			</View>
		</TouchableOpacity>
	);
}

export default function MessagesScreen({ navigation }) {
	return (
		<View style={styles.container}>
			<FlatList
				data={chats}
				keyExtractor={(chat) => chat.id}
				renderItem={({ item }) => (
					<TouchableOpacity
						style={styles.card}
						onPress={() =>
							navigation.navigate('Chat', {
								userName: item.userName,
							})
						}
					>
						<View style={styles.userInfo}>
							<View style={styles.userImgWrapper}>
								<Image
									style={styles.userImage}
									source={require('../assets/images/default-pfp.png')}
									defaultSource={require('../assets/images/default-pfp.png')}
								/>
							</View>
							<View style={styles.TextSection}>
								<View style={styles.UserInfoText}>
									<Text>{item.userName}</Text>
									<Text>{item.postTime}</Text>
								</View>
								<Text style={styles.MessageText}>
									{item.messageText}
								</Text>
							</View>
						</View>
					</TouchableOpacity>
				)}
			/>
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		paddingLeft: 20,
		paddingRight: 20,
		alignItems: 'center',
		backgroundColor: '#ffffff',
	},
	card: {
		width: '100%',
	},
	userInfo: {
		flexDirection: 'row',
		justifyContent: 'space-between',
	},
	userImage: {
		width: 50,
		height: 50,
		borderRadius: 25,
	},
	userImgWrapper: {
		paddingTop: 15,
		paddingBottom: 15,
	},
	TextSection: {
		flexDirection: 'column',
		justifyContent: 'center',
		padding: 15,
		paddingLeft: 0,
		marginLeft: 10,
		width: 300,
		borderBottomWidth: 1,
		borderBottomColor: '#cccccc',
	},
	UserInfoText: {
		flexDirection: 'row',
		justifyContent: 'space-between',
		marginBottom: 5,
	},
	UserName: {
		fontSize: 14,
		fontWeight: 'bold',
		fontFamily: 'Helvetica',
	},
	PostTime: {
		fontSize: 12,
		color: '#666',
		fontFamily: 'Helvetica',
	},
	MessageText: {
		fontSize: 14,
		color: '#333333',
	},
});
