import * as SecureStore from 'expo-secure-store';
import jwt_decode from 'jwt-decode';

const axios = require('axios').default;

export async function getConversations() {
	let userToken = await SecureStore.getItemAsync('userToken');
	let userId = jwt_decode(userToken).id;
	let res = await axios.get('api/conversation/' + userId, {
		headers: { Authorization: userToken}
	});
	return res.data;
}

export async function getMessages(conversationId) {
	let userToken = await SecureStore.getItemAsync('userToken');
	let userId = jwt_decode(userToken).id;
	let res = await axios.get('api/message/' + conversationId, {
		headers: { Authorization: userToken}
	});
	return res.data;
}

export async function getProfile(userId) {
	let userToken = await SecureStore.getItemAsync('userToken');
	let res = await axios.get('api/getProfile/' + userId, {
		headers: { Authorization: userToken }
	});
	// console.log(res.data.Profile);
	return res.data.Profile;
}

export async function sendMessage(body) {
	let userToken = await SecureStore.getItemAsync('userToken');
	let res = await axios.post('api/message', {
		conversationId: body.conversationId,
		sender: body.sender,
		text: body.text,
	}, {
		headers: { Authorization: userToken },
	});
	return res.data.Profile;
}

export async function getUserId() {
	let userToken = await SecureStore.getItemAsync('userToken');
	let userId = jwt_decode(userToken).id;
	return userId;
}