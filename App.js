import React from 'react'
import { StyleSheet, Text, SafeAreaView } from 'react-native'
import { HomeScreen, LoginScreen } from './screens'

export default class App extends React.Component {
	state = {
		isLoggedIn: false
	}
	constructor(props){
		super(props)
	this.onLoggin = this.onLoggin.bind(this)	
	}
	onLoggin () {
		this.setState({isLoggedIn: true})
	}
	render() {
		const { isLoggedIn } = this.state
		return (
			<SafeAreaView style={styles.container}>
			{isLoggedIn? <HomeScreen /> :
				<LoginScreen onLoggin={this.onLoggin}/>}
			</SafeAreaView>
		)
	}
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#fff',
		justifyContent: 'flex-start'
	}
})