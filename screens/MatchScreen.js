import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import CardStack, { Card } from 'react-native-card-stack-swiper';
import CardItem from '../components/CardItem';
import demo from '../assets/demo';
import AppGradient from '../components/AppGradient';

export default function MatchScreen() {
	return (
		<AppGradient>
			<CardStack
				style={styles.cardStack}
				loop={false}
				verticalSwipe={false}
				renderNoMoreCards={() => null}
				ref={swiper => { this.swiper = swiper }}
			>
				{demo.map((item, index) => (
					<Card key={index}>
						<CardItem
							// image={item.image}
							name={item.name}
							description={item.description}
							matches={item.match}
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
