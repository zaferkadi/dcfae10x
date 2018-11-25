// import axios from 'axios';
// import config from '../config';

// const api = axios.create({
// 	baseURL: 'https://api.yelp.com/v3',
// 	headers: {
// 		Authorization: `Bearer ${config['YELP_KEY']}`
// 	}
// });

export const getStolenBikes = (userLocation, filter = {}) => {
    return [{
		name: 'was stolen at rababa :(',
		coords: {
			latitude: 51.3230873,
			longitude: 12.3710967
		} 
	}]
	// 51.323087,12.373291
	// @51.3230873,12.3710967,17z
	// return api
	// 	.get('/businesses/search', {
	// 		params: {
	// 			limit: 10,
	// 			categories: 'coffee,coffeeroasteries,coffeeshops',
	// 			...userLocation,
	// 			...filter
	// 		}
	// 	})
	// 	.then(res =>
	// 		res.data.businesses.map(business => {
	// 			return {
	// 				name: business.name,
	// 				coords: business.coordinates
	// 			};
	// 		})
	// 	)
	// 	.catch(error => console.error(error));
};

export default {
	getStolenBikes
};