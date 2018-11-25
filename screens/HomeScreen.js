import React, { Component } from 'react';
import { View, StyleSheet } from 'react-native';
import { Location, Permissions } from 'expo';
import { Button } from 'react-native-elements';
import get from 'lodash/get';
import pick from 'lodash/pick';

import BikesService from '../services/bikes';
import Map from '../components/Map';

class HomeScreen extends Component {
	filterButtons = [
        { 
            label: 'Report A Stolen Bike', 
            color: 'coral', 
            filter: { openNow: true }, 
            icon: {name: 'bicycle', style: 'regular',type: 'font-awesome'}
        }
	];

	state = {
		location: null,
		errorMessage: null,
		coffeeShops: []
	};

	componentWillMount() {
		this.getLocationAsync();
	}

	getStolenBikes = async filter => {
		const coords = get(this.state.location, 'coords');
		const userLocation = pick(coords, ['latitude', 'longitude']);
		let coffeeShops = await BikesService.getStolenBikes(
			userLocation,
			filter
		);
		this.setState({ coffeeShops });
	};

	getLocationAsync = async () => {
		let { status } = await Permissions.askAsync(Permissions.LOCATION);
		if (status !== 'granted') {
			this.setState({
				errorMessage: 'Permission to access location was denied'
			});
		}

		let location = await Location.getCurrentPositionAsync({});
		await this.setState({ location });
		this.getStolenBikes();
	};

	handleFilterPress = filter => {
		this.getStolenBikes(filter);
	};

	renderFilterButtons() {
		return this.filterButtons.map((button, i) => (
			<Button
				key={i}
				title={button.label}
				buttonStyle={{
					backgroundColor: button.color,
					...styles.button
				}}
                onPress={() => this.handleFilterPress(button.filter)}
                icon={button.icon}
                
			/>
		));
	}

	render() {
		const { location, coffeeShops } = this.state;

		return (
			<View style={styles.container}>
				<Map location={location} places={coffeeShops} />
				<View style={styles.filters}>{this.renderFilterButtons()}</View>
			</View>
		);
	}
}

const styles = {
	container: {
		flex: 1
	},
	filters: {
		flexDirection: 'row',
		justifyContent: 'flex-start',
		alignItems: 'center',
		flexWrap: 'wrap'
	},
	button: {
		marginVertical: 4
	}
};

export { HomeScreen };