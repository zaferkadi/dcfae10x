import React from 'react'
import { StyleSheet, Text, SafeAreaView } from 'react-native'
import { HomeScreen } from './screens'

export default class App extends React.Component {
	render() {
		return (
			<SafeAreaView style={styles.container}>
				<HomeScreen />
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