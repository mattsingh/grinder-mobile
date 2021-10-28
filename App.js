import React, { useState, useEffect, useReducer, useMemo } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import LoginScreen from './screens/LoginScreen';
import HomeScreen from './screens/HomeScreen';
import SplashScreen from './screens/HomeScreen';
import { AuthContext } from './components/context';
import SecureStore from 'expo-secure-store';

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
				// send some data to server and get token
				// handle sign in errors
				// persist the token using secure store

				dispatch({
					type: 'SIGN_IN',
					token: 'sample_token',
				});
			},
			signOut: () =>
				dispatch({
					type: 'SIGN_OUT',
				}),
			signUp: async (data) => {
				// send user data to server and get token
				// handle errors
				// persist token using securestore

				dispatch({
					type: 'SIGN_IN',
					token: 'sample_token',
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
			} catch (e) {
				// handle failure to restore token
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
		<AuthContext.Provider value={authContext}>
			{state.userToken == null ? <LoginScreen /> : <HomeScreen />}
		</AuthContext.Provider>
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
