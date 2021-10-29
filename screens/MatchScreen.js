import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import CardStack, { Card } from 'react-native-card-stack-swiper';
import CardItem from '../components/CardItem';
import demo from '../assets/demo';

export default function MatchScreen() {
	return (
		<View style={styles.container}>
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
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: 'purple',
		alignItems: 'center',
		justifyContent: 'center',
	},
	cardStack: {
		flex: 1,
		marginHorizontal: 10,
		backgroundColor: '#fff',
		alignItems: 'center',
		justifyContent: 'center',
	},
});
