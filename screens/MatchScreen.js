import React, { useCallback, useState } from 'react';
import { StyleSheet, View, Text } from 'react-native';
import CardStack, { Card } from 'react-native-card-stack-swiper';
import CardItem from '../components/CardItem';
import AppGradient from '../components/AppGradient';
import { useFocusEffect } from '@react-navigation/native';
import { dislike, getPotentialMatches, like } from '../components/APIFunctions';

export default function MatchScreen() {
	const [cardList, setCardList] = useState([]);
	const [refresh, setRefresh] = useState(false);

	useFocusEffect(
		useCallback(() => {
			async function updateCards() {
				const matchList = await getPotentialMatches();
				const formattedMatchList = await matchList.map((item) => {
					return {
						id: item._id,
						name: item.Profile.Gamertag,
						description: item.Profile.Bio,
						image: item.Profile.ProfilePicture,
					};
				});
				setCardList(formattedMatchList);
			}
			updateCards();
		}, [refresh])
	);

	return (
		<AppGradient>
			<CardStack
				style={styles.cardStack}
				loop={false}
				verticalSwipe={false}
				renderNoMoreCards={() => null}
				ref={swiper => { this.swiper = swiper }}
				onSwipedLeft={(index) => {
					console.log('dislike ' + cardList[index].name);
					dislike(cardList[index].id);
				}}
				onSwipedRight={(index) => {
					console.log('like ' + cardList[index].name);
					like(cardList[index].id);

				}}
				onSwipedAll={() => {
					console.log('Refreshing cards');
					setRefresh(!refresh);
				}}
			>
				{cardList.map((item, index) => (
					<Card key={index}>
						<CardItem
							name={item.name}
							description={item.description}
							image={item.image}
							actions
							onPressLeft={() => this.swiper.swipeLeft()}
							onPressRight={() => this.swiper.swipeRight()}
						/>
					</Card>
				))}
			</CardStack>
		</AppGradient>
	);
}

const styles = StyleSheet.create({
	cardStack: {
		flex: 1,
		marginHorizontal: 10,
		backgroundColor: '#fff',
		alignItems: 'center',
		justifyContent: 'center',
	},
});
