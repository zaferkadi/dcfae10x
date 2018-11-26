import React, { Component } from 'react';
import { View, Text, StyleSheet, ActivityIndicator } from 'react-native';
import { MapView } from 'expo';
import get from 'lodash/get';
import { mapSettings } from '../utils'


const deltas = {
	latitudeDelta: 0.0922,
	longitudeDelta: 0.0421
};

const initialRegion = {
	latitude: 37.321996988,
	longitude: -122.0325472123455
};

const Marker = MapView.Marker;

export default class Map extends Component {
	state = {
			region: null
		}

	componentDidMount() {
		// console.log(mapSettings());
	}
	renderMarkers() {		
		return this.props.places.map((place, i) => (
			<Marker key={i} title={place.name} coordinate={place.coords} pinColor="tomato"/>
		));
	}
	onRegionChangeComplete = (region) =>{
		this.setState({ region });
	}
	render() {
		const { location } = this.props;
		const region = {
			latitude: get(location, 'coords.latitude', null),
			longitude: get(location, 'coords.longitude', null),
			...deltas
		};

		if (!region.latitude || !region.longitude) {
			return (
				<View style={styles.container}>
					<ActivityIndicator />
					{/* <Text>Loading map...</Text> */}
				</View>
			);
		}

		return (
			<MapView
				style={styles.container}
				region={this.state.region || region}
				initialRegion={{ ...initialRegion, ...deltas }}
				showsUserLocation
				showsMyLocationButton
				onRegionChangeComplete={this.onRegionChangeComplete}
			>
				{this.renderMarkers()}
			</MapView>
		);
	}
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
		height: '100%'
	}
});