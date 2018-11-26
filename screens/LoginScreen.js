import React, { Component } from 'react';
import { View, StyleSheet, ImageBackground } from 'react-native';
import { Button } from 'react-native-elements';
import { NavigationActions } from 'react-navigation'; // Version can be specified in package.json

class LoginScreen extends Component {
	filterButtons = [
        { 
            label: 'continue with Facebook', 
            color: '#4267b2', 
            filter: { openNow: true }, 
            icon: {name: 'facebook', style: 'regular',type: 'font-awesome'}
        }
    ];
    handleFilterPress = () => {
		NavigationActions.navigate({ routeName: 'Home' })
		this.props.navigation.push('Home')
    }

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

		return (
			<View style={styles.container}>
                {this.renderFilterButtons()}
			</View>
		);
	}
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		flexDirection: 'column',
		justifyContent: 'center',
		alignItems: 'stretch',
		backgroundColor: 'coral'
		},
	filters: {
		flexDirection: 'row',
		justifyContent: 'center',
		alignItems: 'center',
		flexWrap: 'wrap'
	},
	button: {
		marginVertical: 10
	}
});
export { LoginScreen };