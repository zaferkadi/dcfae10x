import React, { Component } from 'react';
import { View, StyleSheet, ImageBackground } from 'react-native';
import { Button } from 'react-native-elements';

class LoginScreen extends Component {
	filterButtons = [
        { 
            label: 'continue with Facebook', 
            color: '#4267b2', 
            filter: { openNow: true }, 
            icon: {name: 'facebook', style: 'regular',type: 'font-awesome'}
        }
    ];
    handleFilterPress() {
        console.log('clicked');
        this.props.onLoggin()
        
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
			<View style={{
                flex: 1,
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'stretch',
                backgroundColor: 'coral'
                }}>
                {this.renderFilterButtons()}
			</View>
		);
	}
}

const styles = {
	filters: {
		flexDirection: 'row',
		justifyContent: 'middle',
		alignItems: 'center',
		flexWrap: 'wrap'
	},
	button: {
		marginVertical: 10
	}
};

export { LoginScreen };