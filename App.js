import React, { useState, useEffect, useReducer, useMemo } from 'react';
import Amplify, { Auth } from 'aws-amplify';
import config from './src/aws-exports';
Amplify.configure(config);
import { NavigationContainer } from '@react-navigation/native';
import { StyleSheet, Text, SafeAreaView } from 'react-native';
import AuthStack from './routes/AuthStack';
import AppTabs from './routes/AppTabs';
import SplashScreen from './screens/SplashScreen';
import { AuthContext } from './components/context';
import * as SecureStore from 'expo-secure-store';
import path from './components/Path';

const axios = require('axios').default;
axios.defaults.baseURL = path();

export default function App() {
	const [state, dispatch] = useReducer(
		(prevState, action) => {
			switch (action.type) {
				case 'RESTORE_TOKEN':
					return {
						...prevState,
						userToken: action.token,
						isLoading: false,
					};
				case 'SIGN_IN':
					return {
						...prevState,
						isSignout: false,
						userToken: action.token,
					};
				case 'SIGN_OUT':
					return {
						...prevState,
						isSignout: true,
						userToken: null,
					};
			}
		},
		{
			isLoading: true,
			isSignout: false,
			userToken: null,
		}
	);

	const authContext = useMemo(
		() => ({
			signIn: async (data) => {
				let token = null;

				try {
					const user = await Auth.signIn({
						username: data.email,
						password: data.password,
					});
				} catch (error) {
					console.log('error signing in', error);
					return;
				}

				// send some data to server and get token
				try {
					const res = await axios.post('api/login', {
						email: data.email,
						password: data.password,
					});
					if (res.data.error) return; // if response has an error message, return
					token = res.data.accessToken;
				} catch (err) {
					console.log(err);
					return;
				}

				// persist the token using secure store
				try {
					await SecureStore.setItemAsync('userToken', token);
				} catch (err) {
					console.log(err);
					return;
				}

				dispatch({
					type: 'SIGN_IN',
					token: token,
				});
			},
			signOut: async () => {
				try {
					await Auth.signOut(); // idk why I need this
					SecureStore.deleteItemAsync('userToken');
				} catch (error) {
					console.log('error signing out: ', error);
				}

				dispatch({
					type: 'SIGN_OUT',
				});
			},
			signUp: async (data) => {
				if (data.password != data.confirmPassword) {
					console.log('passwords do not match');
					return;
				}

				// send user data to server and get token
				try {
					const { user } = await Auth.signUp({
						username: data.email,
						password: data.password,
						attributes: {
							name: data.name,
						},
					});
				} catch (error) {
					console.log('error signing up:', error);
					return;
				}

				try {
					const res = await axios.post('api/signup', {
						firstname: data.name,
						email: data.email,
						password: data.password,
					});
					if (res.data.error) return; // if response has an error message, return
					token = res.data.accessToken;
				} catch (err) {
					console.log(err);
					return;
				}

				// persist the token using secure store
				try {
					await SecureStore.setItemAsync('userToken', token);
				} catch (err) {
					console.log(err);
					return;
				}

				dispatch({
					type: 'SIGN_IN',
					token: token,
				});
			},
		}),
		[]
	);

	useEffect(() => {
		const checkStorage = async () => {
			let userToken;

			try {
				userToken = await SecureStore.getItemAsync('userToken');
			} catch (err) {
				// handle failure to restore token
				console.log(err);
			}

			// may need to validate token

			dispatch({
				type: 'RESTORE_TOKEN',
				token: userToken,
			});
		};

		checkStorage();
	}, []);

	if (state.isLoading) {
		// We haven't finished checking for the token yet
		return <SplashScreen />;
	}

	return (
		<NavigationContainer>
			<AuthContext.Provider value={authContext}>
				{state.userToken == null ? <AuthStack /> : <AppTabs />}
			</AuthContext.Provider>
		</NavigationContainer>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#fff',
		alignItems: 'center',
		justifyContent: 'center',
	},
});
