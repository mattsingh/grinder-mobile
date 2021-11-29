import { useFocusEffect } from '@react-navigation/native';
import React, { useState, useContext, useCallback } from 'react';
import {
	StyleSheet,
	View,
	Text,
	Image,
	ScrollView,
	SafeAreaView,
	Linking,
} from 'react-native';
import { getProfile, getUserId } from '../components/APIFunctions';
import AppGradient from '../components/AppGradient';
import { AuthContext } from '../components/context';
import { FormButton, FormCard } from '../components/FormComponents';
import path from '../components/Path';

export default function ProfileScreen() {
	const [profile, setProfile] = useState({});
	const { signOut } = useContext(AuthContext);

	useFocusEffect(
		useCallback(() => {
			async function updateProfile() {
				const userId = await getUserId();
				const userProfile = await getProfile(userId);
				setProfile(userProfile);
			}
			updateProfile();
		}, [])
	);

	return (
		<AppGradient style={styles.container}>
			<SafeAreaView>
				<ScrollView>
					<Image
						source={
							profile.ProfilePicture
								? {
										uri: `data:image/png;base64,${profile.ProfilePicture}`,
								  }
								: require('../assets/images/default-pfp.png')
						}
						style={styles.userImage}
					/>
					<Text style={styles.userNameText}>{profile.Gamertag}</Text>
					<Text style={styles.userAgeText}>
						{'Age: ' + profile.Age}
					</Text>
					<FormCard>
						<View>
							<Text style={styles.formHeader}>Bio: </Text>
							<Text style={styles.formText}>{profile.Bio}</Text>
						</View>
						<View style={{paddingTop: 15}}>
							<Text style={styles.formHeader}>Genres: </Text>
							<Text style={styles.formText}>
								{profile.Favgenre
									? profile.Favgenre.join(' | ')
									: profile.Favgenre}
							</Text>
						</View>
					</FormCard>
					<FormButton
						buttonTitle='Edit Profile'
						onPress={async () => {
							await Linking.openURL(path());
						}}
					/>
					<FormButton
						buttonTitle='Sign Out'
						onPress={() => {
							signOut();
						}}
					/>
				</ScrollView>
			</SafeAreaView>
		</AppGradient>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		alignItems: 'center',
		justifyContent: 'center',
	},
	userImage: {
		borderColor: '#FFF',
		borderRadius: 100,
		borderWidth: 3,
		height: 200,
		marginBottom: 15,
		width: 200,
		alignSelf: 'center',
	},
	userNameText: {
		color: '#FFF',
		fontSize: 22,
		fontWeight: 'bold',
		paddingBottom: 8,
		textAlign: 'center',
	},
	userAgeText: {
		color: '#A5A5A5',
		fontSize: 15,
		fontWeight: '600',
		paddingBottom: 20,
		textAlign: 'center',
	},
	formHeader: {
		fontSize: 20,
		color: 'white',
		textAlign: 'center',
	},
	formText: {
		fontSize: 15,
		color: 'white',
		textAlign: 'center',
	},
});
